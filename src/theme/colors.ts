import { css } from 'styled-components';

export const COLOR_VARIABLES = {
  NEUTRAL_800: '--neutral-800',
  NEUTRAL_750: '--neutral-750',
  NEUTRAL_700: '--neutral-700',
  NEUTRAL_650: '--neutral-650',
  NEUTRAL_600: '--neutral-600',
  NEUTRAL_550: '--neutral-550',
  NEUTRAL_500: '--neutral-500',
  NEUTRAL_450: '--neutral-450',
  NEUTRAL_400: '--neutral-400',
  NEUTRAL_350: '--neutral-350',
  NEUTRAL_300: '--neutral-300',
  NEUTRAL_250: '--neutral-250',
  NEUTRAL_200: '--neutral-200',
  NEUTRAL_150: '--neutral-150',
  NEUTRAL_100: '--neutral-100',
  NEUTRAL_50: '--neutral-50',
  WHITE: '--white',
  POSITIVE_800: '--positive-800',
  POSITIVE_750: '--positive-750',
  POSITIVE_700: '--positive-700',
  POSITIVE_650: '--positive-650',
  POSITIVE_600: '--positive-600',
  POSITIVE_550: '--positive-550',
  POSITIVE_500: '--positive-500',
  POSITIVE_450: '--positive-450',
  POSITIVE_400: '--positive-400',
  POSITIVE_350: '--positive-350',
  POSITIVE_300: '--positive-300',
  POSITIVE_250: '--positive-250',
  POSITIVE_200: '--positive-200',
  POSITIVE_150: '--positive-150',
  POSITIVE_100: '--positive-100',
  POSITIVE_50: '--positive-50',
  NEGATIVE_800: '--negative-800',
  NEGATIVE_750: '--negative-750',
  NEGATIVE_700: '--negative-700',
  NEGATIVE_650: '--negative-650',
  NEGATIVE_600: '--negative-600',
  NEGATIVE_550: '--negative-550',
  NEGATIVE_500: '--negative-500',
  NEGATIVE_450: '--negative-450',
  NEGATIVE_400: '--negative-400',
  NEGATIVE_350: '--negative-350',
  NEGATIVE_300: '--negative-300',
  NEGATIVE_250: '--negative-250',
  NEGATIVE_200: '--negative-200',
  NEGATIVE_150: '--negative-150',
  NEGATIVE_100: '--negative-100',
  NEGATIVE_50: '--negative-50',
  NOTICE_800: '--notice-800',
  NOTICE_750: '--notice-750',
  NOTICE_700: '--notice-700',
  NOTICE_650: '--notice-650',
  NOTICE_600: '--notice-600',
  NOTICE_550: '--notice-550',
  NOTICE_500: '--notice-500',
  NOTICE_450: '--notice-450',
  NOTICE_400: '--notice-400',
  NOTICE_350: '--notice-350',
  NOTICE_300: '--notice-300',
  NOTICE_250: '--notice-250',
  NOTICE_200: '--notice-200',
  NOTICE_150: '--notice-150',
  NOTICE_100: '--notice-100',
  NOTICE_50: '--notice-50',
  PRIMARY_800: '--primary-800',
  PRIMARY_750: '--primary-750',
  PRIMARY_700: '--primary-700',
  PRIMARY_650: '--primary-650',
  PRIMARY_600: '--primary-600',
  PRIMARY_550: '--primary-550',
  PRIMARY_500: '--primary-500',
  PRIMARY_450: '--primary-450',
  PRIMARY_400: '--primary-400',
  PRIMARY_350: '--primary-350',
  PRIMARY_300: '--primary-300',
  PRIMARY_250: '--primary-250',
  PRIMARY_200: '--primary-200',
  PRIMARY_150: '--primary-150',
  PRIMARY_100: '--primary-100',
  PRIMARY_50: '--primary-50',
  SECONDARY_800: '--secondary-800',
  SECONDARY_750: '--secondary-750',
  SECONDARY_700: '--secondary-700',
  SECONDARY_650: '--secondary-650',
  SECONDARY_600: '--secondary-600',
  SECONDARY_550: '--secondary-550',
  SECONDARY_500: '--secondary-500',
  SECONDARY_450: '--secondary-450',
  SECONDARY_400: '--secondary-400',
  SECONDARY_350: '--secondary-350',
  SECONDARY_300: '--secondary-300',
  SECONDARY_250: '--secondary-250',
  SECONDARY_200: '--secondary-200',
  SECONDARY_150: '--secondary-150',
  SECONDARY_100: '--secondary-100',
  SECONDARY_50: '--secondary-50',
  FOCUS: '--focus',
  FOCUS_DARK: '--focus-dark',
  BACKGROUND_1: '--background-1',
};

export const baseColors = css`
  ${COLOR_VARIABLES.NEUTRAL_800}: #09090C;
  ${COLOR_VARIABLES.NEUTRAL_750}: #1A1C23;
  ${COLOR_VARIABLES.NEUTRAL_700}: #2C2F3A;
  ${COLOR_VARIABLES.NEUTRAL_650}: #353846;
  ${COLOR_VARIABLES.NEUTRAL_600}: #3D4151;
  ${COLOR_VARIABLES.NEUTRAL_550}: #464B5D;
  ${COLOR_VARIABLES.NEUTRAL_500}: #4C5165;
  ${COLOR_VARIABLES.NEUTRAL_450}: #585D74;
  ${COLOR_VARIABLES.NEUTRAL_400}: #69708C;
  ${COLOR_VARIABLES.NEUTRAL_350}: #7F859f;
  ${COLOR_VARIABLES.NEUTRAL_300}: #8B90A7;
  ${COLOR_VARIABLES.NEUTRAL_250}: #A2A7B9;
  ${COLOR_VARIABLES.NEUTRAL_200}: #B9BDCA;
  ${COLOR_VARIABLES.NEUTRAL_150}: #D0D3DC;
  ${COLOR_VARIABLES.NEUTRAL_100}: #E3E5EC;
  ${COLOR_VARIABLES.NEUTRAL_50}: #F3F4F6;

  ${COLOR_VARIABLES.WHITE}: #FFFFFF;

  ${COLOR_VARIABLES.NOTICE_800}: #140F00;
  ${COLOR_VARIABLES.NOTICE_750}: #3D2E00;
  ${COLOR_VARIABLES.NOTICE_700}: #513D00;
  ${COLOR_VARIABLES.NOTICE_650}: #654C01;
  ${COLOR_VARIABLES.NOTICE_600}: #7A5B01;
  ${COLOR_VARIABLES.NOTICE_550}: #8E6B01;
  ${COLOR_VARIABLES.NOTICE_500}: #A27A01;
  ${COLOR_VARIABLES.NOTICE_450}: #B78901;
  ${COLOR_VARIABLES.NOTICE_400}: #DFA801;
  ${COLOR_VARIABLES.NOTICE_350}: #F4B601;
  ${COLOR_VARIABLES.NOTICE_300}: #FEC10B;
  ${COLOR_VARIABLES.NOTICE_250}: #FED148;
  ${COLOR_VARIABLES.NOTICE_200}: #FEDB71;
  ${COLOR_VARIABLES.NOTICE_150}: #FEE59A;
  ${COLOR_VARIABLES.NOTICE_100}: #FFF0C2;
  ${COLOR_VARIABLES.NOTICE_50}: #FFFAEB;

  ${COLOR_VARIABLES.NEGATIVE_800}: #120203;
  ${COLOR_VARIABLES.NEGATIVE_750}: #360709;
  ${COLOR_VARIABLES.NEGATIVE_700}: #49090C;
  ${COLOR_VARIABLES.NEGATIVE_650}: #5B0B0F;
  ${COLOR_VARIABLES.NEGATIVE_600}: #6D0D12;
  ${COLOR_VARIABLES.NEGATIVE_550}: #7F1015;
  ${COLOR_VARIABLES.NEGATIVE_500}: #911218;
  ${COLOR_VARIABLES.NEGATIVE_450}: #A3141B;
  ${COLOR_VARIABLES.NEGATIVE_400}: #C81921;
  ${COLOR_VARIABLES.NEGATIVE_350}: #E01B25;
  ${COLOR_VARIABLES.NEGATIVE_300}: #E63740;
  ${COLOR_VARIABLES.NEGATIVE_250}: #EB5C63;
  ${COLOR_VARIABLES.NEGATIVE_200}: #ED6E74;
  ${COLOR_VARIABLES.NEGATIVE_150}: #F4A4A8;
  ${COLOR_VARIABLES.NEGATIVE_100}: #F8C9CB;
  ${COLOR_VARIABLES.NEGATIVE_50}: #FDEDEE;

  ${COLOR_VARIABLES.POSITIVE_800}: #071301;
  ${COLOR_VARIABLES.POSITIVE_750}: #163A03;
  ${COLOR_VARIABLES.POSITIVE_700}: #1E4D04;
  ${COLOR_VARIABLES.POSITIVE_650}: #256006;
  ${COLOR_VARIABLES.POSITIVE_600}: #2D7407;
  ${COLOR_VARIABLES.POSITIVE_550}: #248708;
  ${COLOR_VARIABLES.POSITIVE_500}: #3C9A09;
  ${COLOR_VARIABLES.POSITIVE_450}: #3FAD05;
  ${COLOR_VARIABLES.POSITIVE_400}: #4BC10B;
  ${COLOR_VARIABLES.POSITIVE_350}: #52D40C;
  ${COLOR_VARIABLES.POSITIVE_300}: #5AE70D;
  ${COLOR_VARIABLES.POSITIVE_250}: #8BF551;
  ${COLOR_VARIABLES.POSITIVE_200}: #A5F778;
  ${COLOR_VARIABLES.POSITIVE_150}: #BEF99F;
  ${COLOR_VARIABLES.POSITIVE_100}: #D8FCC5;
  ${COLOR_VARIABLES.POSITIVE_50}: #F2FEEC;

  ${COLOR_VARIABLES.PRIMARY_800}: #000814;
  ${COLOR_VARIABLES.PRIMARY_750}: #00173F;
  ${COLOR_VARIABLES.PRIMARY_700}: #022460;
  ${COLOR_VARIABLES.PRIMARY_650}: #01368F;
  ${COLOR_VARIABLES.PRIMARY_600}: #0049B8;
  ${COLOR_VARIABLES.PRIMARY_550}: #1B66EA;
  ${COLOR_VARIABLES.PRIMARY_500}: #357EFD;
  ${COLOR_VARIABLES.PRIMARY_450}: #579Aff;
  ${COLOR_VARIABLES.PRIMARY_400}: #70A9FF;
  ${COLOR_VARIABLES.PRIMARY_350}: #85B6FF;
  ${COLOR_VARIABLES.PRIMARY_300}: #99C2FF;
  ${COLOR_VARIABLES.PRIMARY_250}: #ADCEFF;
  ${COLOR_VARIABLES.PRIMARY_200}: #C2DAFF;
  ${COLOR_VARIABLES.PRIMARY_150}: #D6E7FF;
  ${COLOR_VARIABLES.PRIMARY_100}: #EBF3FF;
  ${COLOR_VARIABLES.PRIMARY_50}: #F5F9FF;

  ${COLOR_VARIABLES.SECONDARY_800}: #001414;
  ${COLOR_VARIABLES.SECONDARY_750}: #012828;
  ${COLOR_VARIABLES.SECONDARY_700}: #013C3B;
  ${COLOR_VARIABLES.SECONDARY_650}: #01504F;
  ${COLOR_VARIABLES.SECONDARY_600}: #026463;
  ${COLOR_VARIABLES.SECONDARY_550}: #027977;
  ${COLOR_VARIABLES.SECONDARY_500}: #028D8A;
  ${COLOR_VARIABLES.SECONDARY_450}: #02A19E;
  ${COLOR_VARIABLES.SECONDARY_400}: #03B5B2;
  ${COLOR_VARIABLES.SECONDARY_350}: #03DAD5;
  ${COLOR_VARIABLES.SECONDARY_300}: #04F1ED;
  ${COLOR_VARIABLES.SECONDARY_250}: #22FCF8;
  ${COLOR_VARIABLES.SECONDARY_200}: #9BFDFC;
  ${COLOR_VARIABLES.SECONDARY_150}: #C3FEFD;
  ${COLOR_VARIABLES.SECONDARY_100}: #DCFFFE;
  ${COLOR_VARIABLES.SECONDARY_50}: #EBFFFE;

  ${COLOR_VARIABLES.FOCUS}: var(${COLOR_VARIABLES.PRIMARY_500});
  ${COLOR_VARIABLES.FOCUS_DARK}: var(${COLOR_VARIABLES.PRIMARY_700});
  ${COLOR_VARIABLES.BACKGROUND_1}: var(${COLOR_VARIABLES.NEUTRAL_750});
`;

export const COLORS = (Object.keys(COLOR_VARIABLES) as Array<keyof typeof COLOR_VARIABLES>).reduce<
  { [key in keyof typeof COLOR_VARIABLES]: string }
>(
  (acc, key) => ({
    ...acc,
    [key]: `var(${COLOR_VARIABLES[key]})`,
  }),
  {} as { [key in keyof typeof COLOR_VARIABLES]: string }
);
