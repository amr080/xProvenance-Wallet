import { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  BodyContent,
  Button,
  H2,
  Header,
  ImageContainer,
  Content,
} from 'Components';
import { COLORS, FONTS } from 'theme';
import passphraseImg from 'images/passphrase-intro.png';

interface Props {
  nextUrl: string;
}

export const SeedphraseIntro = ({ nextUrl }: Props) => {
  const navigate = useNavigate();
  return (
    <Content>
      <Header progress={66} title="Recovery Passphrase" />
      <H2
        $css={css`
          margin: 64px 0 16px;
          ${FONTS.SECONDARY_FONT};
          font-size: 1.4rem;
          font-weight: 600;
          line-height: 1.7rem;
          letter-spacing: 0.32rem;
          text-align: center;
          text-transform: uppercase;
        `}
      >
        Save Passphrase
      </H2>
      <BodyContent
        $css={css`
          text-align: center;
          margin-bottom: 0px;
        `}
      >
        Prepare to write down your recovery phrase.The only way to recover your account is with this
        recovery passphrase.
      </BodyContent>
      <ImageContainer size="140px" centered src={passphraseImg} alt="Secure your passphrase" />
      <BodyContent
        $css={css`
          color: ${COLORS.NEGATIVE_200};
          text-align: center;
          margin: 0;
        `}
      >
        Do not share this passphrase with anyone, as it grants full access to your account.
      </BodyContent>
      <Button onClick={() => navigate(nextUrl)}>Continue</Button>
    </Content>
  );
};