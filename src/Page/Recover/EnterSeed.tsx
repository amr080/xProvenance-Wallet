import styled from 'styled-components';
import { mnemonicToSeedSync } from 'bip39';
import { publicKeyCreate as secp256k1PublicKeyCreate } from 'secp256k1';
import { base64ToBytes } from '@tendermint/belt';
import type { Wallet } from '@tendermint/sig';
import type { Bech32String, Bytes } from '@tendermint/types';
import { useState } from 'react';
import { Button, Header, Input } from 'Components';
import { pasteMnumonic } from './pasteMnumonic';

const Wrapper = styled.div`
  padding: 30px 16px 48px 16px;
  text-align: center;
`;
const InputSection = styled.div`
  text-align: left;
  margin-top: 40px;
  margin-bottom: 70px;
  input {
    margin-bottom: 32px;
  }
`;
const ErrorMessage = styled.div`
  color: #E63740;
  font-weight: bold;
  margin-bottom: 20px;
`;

interface InputData {
  id: number,
  error?: string,
  value?: string,
};

export const EnterSeed:React.FC = () => {
  pasteMnumonic();
  const totalSeeds = 24;
  const createInitialInputData = () => {
    // Clone all inputValues
    const newInputValues = [];
    // Add data
    for (let i = 0; i < totalSeeds; i += 1) {
      const data = {
        value: '',
        id: i,
        error: '',
      }
      // Update target inputValue
      newInputValues[i] = data;
    }
    return newInputValues;
  };
  const [inputValues, setInputValues] = useState<InputData[]>(createInitialInputData());
  const [submitError, setSubmitError] = useState<boolean>(false);

  const updateInput = (index: number, field: 'error' | 'value', value: string) => {
    // Clone all inputValues
    const newInputValues = [...inputValues];
    // Update target inputValue
    if (index !== undefined && field) {
      newInputValues[index][field] = value;
      setInputValues(newInputValues);
    }
  };

  const validateInputs = () => {
    let valid = true;
    // Loop through and check existance and type
    inputValues.forEach((data, index) => {
      const { value } = data;
      // Must be string A-Z only
      if (value && !(/^[a-zA-Z]+$/.test(value))) {
        valid = false;
        // Set input error
        updateInput(index, 'error', 'Must be string');
      }
      // Must have value
      if (value === undefined || value === null || value === '') {
        valid = false;
        // Set input error
        updateInput(index, 'error', 'Required');
      }
    });
    return valid;
  };

  const createSeedInputs = (total: number) => {
    const allInputsElements = [];

    const onInputChange = (i: number, e: any) => {
      updateInput(i, 'error', '');
      updateInput(i, 'value', e.target.value);
    }

    for (let i = 0; i < total; i += 1) {
      const displayNum = i + 1;
      const { value, error } = inputValues[i];
      allInputsElements.push(
        <Input
          id={`${displayNum}`}
          label={`Passphrase ${displayNum}`}
          key={`Passphrase ${displayNum}`}
          value={value}
          onChange={(e: any) => onInputChange(i, e)}
          error={error}
        />
      );
    }
    return allInputsElements;
  };

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

  const createAddress = (publicKey: Bytes, prefix: string = this.bech32MainPrefix): Bech32String => {
    const hash1 = sha256(publicKey);
    const hash2 = ripemd160(hash1);
    const words = bech32ToWords(hash2);

    return bech32Encode(prefix, words);
  }

  const createWallet = (privateKeyString: string): Wallet  => {
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

  const handleContinue = () => {
    // Clear out previous error
    setSubmitError(false);
    // Validate all inputs first
    const valid = validateInputs();
    // If there are no errors, go to the next page
    if (valid) {
      console.log('Success!');
      // Grab all input values
      const mnumonic = inputValues.map(({ value }) => value).join(' ');
      console.log('mnumonic: ', mnumonic);
      // Create mnemonic seed
      const seed = mnemonicToSeedSync(mnumonic)
      console.log('seed: ', seed);
      // Create public and private keys
      // const wallet = ethers.Wallet.fromMnemonic(mnumonic);
      // console.log('wallet :', wallet);
    }
    // If any error, show error message
    else setSubmitError(true);
  };

  return (
    <Wrapper>
      <Header title="Enter Recovery Passphrase"  progress={50} />
      <InputSection>
        {createSeedInputs(totalSeeds)}
      </InputSection>
      {submitError && <ErrorMessage>Please fix input issues above</ErrorMessage>}
      <Button variant='primary' onClick={handleContinue}>Continue</Button>
    </Wrapper>
  );
};
