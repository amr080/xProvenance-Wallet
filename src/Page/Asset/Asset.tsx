import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { FooterNav, Header, Sprite, AssetRow } from 'Components';
import { ICON_NAMES } from 'consts';
import { AssetChart } from './AssetChart';
import { AssetStats } from './AssetStats';

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  font-family: 'Gothic A1', sans-serif;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 80px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const HeaderTitleGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const HeaderTitle = styled.div`
  font-size: 1.4rem;
  text-transform: uppercase;
  font-weight: 700;
`
const HeaderIcon = styled.img`
  width:30px;
  margin-bottom: 10px;
`;
const Price = styled.div`
  font-size: 6.4rem;
  font-weight: 300;
  font-family: 'Montserrat', sans-serif;
  margin-bottom: 10px;
`;
const PriceChange = styled.div`
  font-size: 1.4rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SectionTitle = styled.div`
  font-size: 1.9rem;
  font-weight: 700;
  margin: 30px 0 10px 0;
  text-align: left;
`;

export const Asset:React.FC = () => {
  const { assetName } = useParams();

  return (
    assetName ? 
    <Wrapper>
      <Header
        title={
          <HeaderTitleGroup>
            <HeaderIcon src={`/images/assets/${assetName}.svg`} alt={`${assetName} icon`} />
            <HeaderTitle>{assetName}</HeaderTitle>
          </HeaderTitleGroup>
        }
      />
      <Price>$0.118</Price>
      <PriceChange>
        <Sprite icon={ICON_NAMES.ARROW_TALL} size="1.5rem" />
        $0.008(0.10%)
      </PriceChange>
      <AssetChart />
      <AssetStats />
      <SectionTitle>Recent Transactions</SectionTitle>
      <div>
        <AssetRow img="hash" name="hash" amount={{ value: 500, change: 13.63 }} />
        <AssetRow img="hash" name="hash" amount={{ value: 500, change: 13.63 }} />
        <AssetRow img="hash" name="hash" amount={{ value: 500, change: 13.63 }} />
        <AssetRow img="hash" name="hash" amount={{ value: 500, change: 13.63 }} />
      </div>
      <FooterNav />
    </Wrapper>
    : null
  );
};
