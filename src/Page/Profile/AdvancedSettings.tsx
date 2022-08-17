import styled from 'styled-components';
import { useState } from 'react';
import { Content, Header, Sprite } from 'Components';
import { COLORS } from 'theme';
import { ICON_NAMES } from 'consts';
import { FaucetContent } from './FaucetContent';

const SectionContent = styled.div`
  padding: 20px;
`;
const SectionOption = styled.div<{ active: boolean }>`
  border-bottom: 1px solid ${COLORS.NEUTRAL_600};
  font-weight: 400;
  transition: 250ms all;
  ${({ active }) => active && `background: ${COLORS.NEUTRAL_700};`}
  ${SectionContent} {
    display: ${({ active }) => (active ? 'block' : 'none')};
  }
`;
const SectionTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  cursor: pointer;
  &:hover {
    background: ${COLORS.NEUTRAL_600};
  }
  &:active {
    background: ${COLORS.NEUTRAL_700};
  }
`;

export const AdvancedSettings: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const changeActiveIndex = (newValue: number) => {
    let finalValue = newValue;
    if (newValue === activeIndex) finalValue = -1;
    setActiveIndex(finalValue);
  };

  return (
    <Content>
      <Header title="Advanced Settings" />
      <SectionOption active={activeIndex === 0}>
        <SectionTitleRow onClick={() => changeActiveIndex(0)} tabIndex={0}>
          Faucet
          <Sprite
            icon={ICON_NAMES.CHEVRON}
            size="1.3rem"
            spin={activeIndex === 0 ? 90 : 0}
          />
        </SectionTitleRow>
        <SectionContent>
          <FaucetContent />
        </SectionContent>
      </SectionOption>
      <SectionOption active={activeIndex === 1}>
        <SectionTitleRow onClick={() => changeActiveIndex(1)} tabIndex={0}>
          Custom gRPC Service
          <Sprite
            icon={ICON_NAMES.CHEVRON}
            size="1.3rem"
            spin={activeIndex === 1 ? 90 : 0}
          />
        </SectionTitleRow>
      </SectionOption>
      <SectionOption active={activeIndex === 2}>
        <SectionTitleRow onClick={() => changeActiveIndex(2)} tabIndex={0}>
          Print All Storage Data
          <Sprite
            icon={ICON_NAMES.CHEVRON}
            size="1.3rem"
            spin={activeIndex === 2 ? 90 : 0}
          />
        </SectionTitleRow>
      </SectionOption>
    </Content>
  );
};
