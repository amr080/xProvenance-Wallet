import styled from 'styled-components';
import { Button, Header, Input } from 'Components';
import { ICON_NAMES, MAINNET_NETWORK, PASSWORD_MIN_LENGTH } from 'consts';
import { useState } from 'react';
import {
  decryptKey,
  createHDWallet,
} from 'utils';
import { useNavigate } from 'react-router-dom';
import { useAccount } from 'redux/hooks';

const Wrapper = styled.div`
  width: 100%;
  label {
    margin-top: 20px;
  }
`;

interface Props {
  nextUrl: string,
}

export const DashboardAccountCreate:React.FC<Props> = ({ nextUrl }) => {  
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [walletPassword, setWalletPassword] = useState('');
  const { accounts, key, addAccount, saveAccountData } = useAccount();
  const [error, setError] = useState<string[]>([]); // [accountNameError, walletPasswordError]
  const passwordMinLength = Number(PASSWORD_MIN_LENGTH)!;
  
  const handleCreateAccount = async () => {
    let newError = [];
    // Account name must exist
    if (!name) newError[0] = 'Account Name Required';
    // Wallet password must exist
    if (!walletPassword) newError[1] = 'Wallet Password Required';
    // Wallet password must be min length
    if (walletPassword.length < passwordMinLength) newError[1] = `Password must be a minimum of ${passwordMinLength} characters.`;
    // No errors so far and we have a local key to decrypt
    if (!newError.length && key) {
      // Wallet password must be correct
      const masterKey = decryptKey(key, walletPassword);
      if (!masterKey) newError[1] = 'Invalid password';
      else {
        // TODO: Indicate if you want this account to be mainnet or testnet
        // const network = 'testnet';
        const network = MAINNET_NETWORK;
        // Get the id to use
        // Loop through all wallets, get the highest ID, increment, and use that as the wallet index
        const sortedWallets = accounts.sort((a, b) => a.id! < b.id! ? 1 : -1);
        const highestId = sortedWallets[0].id || 0;
        const id = highestId + 1;
        // Password was correct, create the account
        const newAccount = createHDWallet({ masterKey, name, id, network });
        // Save data to redux and chrome storage
        // TODO: This should just be a single function to add into accounts and potentially change activeAccountId (or even key)
        addAccount(newAccount);
        saveAccountData({ activeAccountId: id });
        // Redirect back to dashboard menu
        navigate(nextUrl);
      }
    }
    // Update error(s)
    setError(newError);
  };

  return (
    <Wrapper>
      <Header title='Create New Account' iconLeft={ICON_NAMES.CLOSE} />
      <Input
        label="Account Name"
        placeholder="Enter Account Name"
        id="Account-Name"
        value={name}
        onChange={setName}
        error={error[0]}
      />
      <Input
        label="Wallet Password"
        placeholder="Enter Wallet Password"
        id="Wallet-Pasword"
        value={walletPassword}
        onChange={setWalletPassword}
        error={error[1]}
        type="password"
      />
      <Button onClick={handleCreateAccount} >Create</Button>
    </Wrapper>
  );
};
