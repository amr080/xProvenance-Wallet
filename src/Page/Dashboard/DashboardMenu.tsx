import styled from 'styled-components';
import { useState } from 'react';
import { CopyValue, Button, Header, Sprite, BottomFloat } from 'Components';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_URL, ICON_NAMES, NEW_ACCOUNT_ADD_URL } from 'consts';
import { useAccount } from 'redux/hooks';

const WalletItem = styled.div<{active?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background: ${({ active }) => active ? '#01504F' : '#2C2F3A' };
  margin-bottom:2px;
  padding: 16px 24px;
  transition: 250ms all;
  cursor: pointer;
  &:hover {
    background: ${({ active }) => active ? '#12615F' : '#3D3F4B' };
  }
`;
const WalletText = styled.div`
  font-family: 'Gothic A1', sans-serif;
  line-height: 2.2rem;
`;
const AccountName = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;
const WalletActionsPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  height: 100%;
  width:inherit;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;
const WalletAction = styled.div`
  width: 100%;
  font-family: 'Gothic A1', sans-serif;
  padding: 24px 16px;
  background: #2C2F3A;
  text-align: center;
  font-size: 1.4rem;
  font-weight: bold;
  border-bottom: 2px solid #3D4151;
  cursor: pointer;
  transition: 250ms all;
  &:hover {
    background: #3D3F4B;
  }
  &:last-of-type {
    border-bottom: none;
  }
`;

export const DashboardMenu:React.FC = () => {
  const navigate = useNavigate();
  const { activeAccountId, accounts, saveAccountData } = useAccount();
  const [ accountMenuTargetId, setAccountMenuTargetId ] = useState('');

  const renderWallets = () => accounts.map(({ address, name }) => (
    <WalletItem key={address} active={address === activeAccountId} onClick={() => { setAccountMenuTargetId(address!)} }>
      <WalletText>
        <AccountName>{name}</AccountName>
      </WalletText>
      <Sprite icon={ICON_NAMES.MENU} size="2.2rem" />
    </WalletItem>
  ));

  const handleSelectWallet = () => {
    // Save to redux and chrome storage
    saveAccountData({ activeAccountId: accountMenuTargetId })
  };

  return (
    <>
      <Header title='Wallets' iconLeft={ICON_NAMES.CLOSE} backLocation={DASHBOARD_URL} />
      {renderWallets()}
      {accountMenuTargetId && (
        <WalletActionsPopup onClick={() => setAccountMenuTargetId('')}>
          {activeAccountId !== accountMenuTargetId && (
            <WalletAction onClick={handleSelectWallet}>
              Select Account
            </WalletAction>
          )}
          {/* TODO: User must click on text to copy, instead have user click on entire button row */}
          <WalletAction>
            <CopyValue value={accounts.find(account => account.address === accountMenuTargetId)?.address} successText="Address Copied!" noPopup>Copy Account Address</CopyValue>
          </WalletAction>
          <WalletAction>Rename</WalletAction>
          <WalletAction>Remove</WalletAction>
          <WalletAction onClick={() => setAccountMenuTargetId('')}>Close</WalletAction>
        </WalletActionsPopup>
      )}
      <BottomFloat>
        <Button onClick={() => navigate(NEW_ACCOUNT_ADD_URL)} >Create Account</Button>
      </BottomFloat>
    </>
  );
};
