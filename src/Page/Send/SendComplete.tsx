import styled from 'styled-components';
import { BottomFloat, Content, Button, Typo, List } from 'Components';
import { DASHBOARD_URL } from 'consts';
import { useNavigate } from 'react-router';
import checkSuccessIcon from 'images/check-success.svg';
import { useMessage } from 'redux/hooks';
import { format } from 'date-fns';
import { capitalize, trimAddress } from 'utils';

const SuccessIcon = styled.img`
  height: 80px;
  width: 80px;
  display: flex;
  margin: 0 auto;
  margin-top: 30px;
`;

export const SendComplete = () => {
  const navigate = useNavigate();
  const {
    resetMessage,
    coin,
    coinAmount,
    txMemo,
    txFromAddress,
    txSendAddress,
    txDate,
    txResponse,
  } = useMessage();

  const handleContinueClick = () => {
    // Clear out/reset message store
    resetMessage();
    // Send user to dashboard
    navigate(DASHBOARD_URL);
  };

  return (
    <Content>
      <SuccessIcon src={checkSuccessIcon} />
      <Typo type="display2" align="center" marginTop="20px">
        {coinAmount} {capitalize(coin?.display, 'uppercase')}
      </Typo>
      <Typo type="displayBody" align="center" marginTop="14px">
        Your transfer details are below
      </Typo>
      <List
        message={{
          date: format(txDate!, 'MMM dd, yyyy'),
          from: trimAddress(txFromAddress),
          to: trimAddress(txSendAddress),
          ...(!!txMemo && { note: txMemo }),
          ...(!!txResponse?.txhash && { 'Transaction Hash': txResponse.txhash }),
        }}
        marginTop="40px"
        marginBottom="80px"
      />
      <BottomFloat>
        <Button onClick={handleContinueClick}>Done</Button>
      </BottomFloat>
    </Content>
  );
};