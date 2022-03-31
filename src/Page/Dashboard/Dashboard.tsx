import { InfoText, Title, Button, FooterNav } from 'Components';
import styled from 'styled-components';
import bg from 'images/bg.png';

const Wrapper = styled.div`
  padding: 42px 16px;
  background: url(${bg}) no-repeat;
  background-size: cover;
  display: flex;
  height: 100vh;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-family: 'Montserrat', 'sans-serif';
  box-sizing: border-box;
  z-index: 10;
`;

export const Dashboard = () => {

  return (
    <>
      <Wrapper>
        <Title size="1.6rem" weight={600}>Portfolio Value</Title>
        <Title size="1.6rem" weight={600}>$2,539.23</Title>
        <Button variant='primary'>Send</Button>
        <Button variant='primary'>Receive</Button>
        <Title size="1.6rem" weight={600}>My Assets</Title>
        <InfoText margin="16px auto 0 auto">Hash</InfoText>
      </Wrapper>
      <FooterNav />
    </>
  );
};
