import {
  generateMnemonic as bip39gm,
  mnemonicToSeedSync as bip39mts,
  validateMnemonic as bip39vm,
} from 'bip39';
import { fromSeed as bip32FromSeed, BIP32Interface, fromBase58 as bip32FromB58 } from 'bip32';
import { toWords as bech32ToWords, encode as bech32Encode } from 'bech32';
import { publicKeyCreate as secp256k1PublicKeyCreate } from 'secp256k1';
import type { Bech32String, Bytes } from '@tendermint/types';
import type { Wallet, KeyPair } from '@tendermint/sig';
import { bufferToBytes, base64ToBytes as ogBase64ToBytes, bytesToBase64 as ogBytesToBase64 } from '@tendermint/belt';
import { createHash } from 'crypto';
import { derivationPath } from 'utils';

const walletPrefix = process.env.REACT_APP_PROVENANCE_WALLET_PREFIX!;
const defaultDerivationPath = derivationPath();
const mnemonicWordCount = 24

export const bytesToBase64 = ogBytesToBase64;
export const base64ToBytes = ogBase64ToBytes

export const validateMnemonic = bip39vm;

export const createMnemonic = (wordCount = mnemonicWordCount) => {
  const strength = (wordCount / 3) * 32;
  const mnemonic = bip39gm(strength);
  const valid = validateMnemonic(mnemonic);
  return valid ? mnemonic : '';
}

const sha256 = (bytes: Bytes): Bytes => {
  const buffer1 = bytes instanceof Buffer ? bytes : Buffer.from(bytes);
  const buffer2 = createHash('sha256').update(buffer1).digest();

  return bufferToBytes(buffer2);
}

const ripemd160 = (bytes: Bytes): Bytes => {
  const buffer1 = bytes instanceof Buffer ? bytes : Buffer.from(bytes);
  const buffer2 = createHash('ripemd160').update(buffer1).digest();

  return bufferToBytes(buffer2);
}

const createAddress = (publicKey: Bytes, prefix: string = walletPrefix): Bech32String => {
  const hash1 = sha256(publicKey);
  const hash2 = ripemd160(hash1);
  const words = bech32ToWords(hash2);

  return bech32Encode(prefix, words);
}

const createKeyPairFromMasterKey = (masterKey: BIP32Interface, path: string): KeyPair => {
  const buffer = masterKey.derivePath(path).privateKey;
  if (!buffer) {
    throw new Error('could not derive private key');
  }
  const privateKey = bufferToBytes(buffer);
  const publicKey = secp256k1PublicKeyCreate(privateKey, true);

  return {
    privateKey,
    publicKey,
  };
}

export const createWalletFromMasterKey = (
  masterKey: BIP32Interface | string,
  prefix: string = walletPrefix,
  path: string = defaultDerivationPath
): Wallet => {
  let finalMasterKey = masterKey;
  if (typeof masterKey === 'string') finalMasterKey = bip32FromB58(masterKey);
  const { privateKey, publicKey } = createKeyPairFromMasterKey(finalMasterKey as BIP32Interface, path);
  const address = createAddress(publicKey, prefix);

  return {
    privateKey,
    publicKey,
    address,
  };
}

export const createMasterKeyFromMnemonic = (mnemonic: string): BIP32Interface => {
  const seed = bip39mts(mnemonic);
  return bip32FromSeed(seed);
}

export const createWallet = (privateKeyString: string): Wallet => {
  try {
    const privateKey = base64ToBytes(privateKeyString);
    const publicKey = secp256k1PublicKeyCreate(privateKey);
    const address = createAddress(publicKey);

    return {
      privateKey,
      publicKey,
      address,
    };
  } catch (e) {
    throw new Error('Failed to create wallet from private key');
  }
}
