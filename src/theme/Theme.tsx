import { ReactNode } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { normalize } from 'styled-normalize';
import { baseFonts, BaseTypographyLoader, FONTS } from './fonts';
import { baseColors, COLORS } from './colors';
import { ThemeProvider } from 'styled-components';
import { SpriteSheet } from 'Components';

export const baseTheme: DefaultTheme = {
  colors: { ...COLORS },
  fonts: { ...FONTS },
};

export const GlobalStyles = createGlobalStyle<{
  $colors: string;
  $fonts: string;
}>`
  ${normalize}

  :root {
    ${baseColors};
    ${baseFonts};
    ${({ $colors }) => $colors};
    ${({ $fonts }) => $fonts};
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    color: ${COLORS.WHITE};
    ${FONTS.PRIMARY_FONT};
    font-weight: 400;
    font-size: 1.6rem;
  }
`;

export type ThemeProps = {
  children: ReactNode;
  $colors?: string;
  $fonts?: string;
  theme?: object;
};

export const Theme = ({ children, $colors = '', $fonts = '', theme = {} }: ThemeProps) => (
  <ThemeProvider theme={{ ...baseTheme, ...theme }}>
    <HelmetProvider>
      <SpriteSheet />
      <BaseTypographyLoader />
      <GlobalStyles $colors={$colors} $fonts={$fonts} />
      {children}
    </HelmetProvider>
  </ThemeProvider>
);
