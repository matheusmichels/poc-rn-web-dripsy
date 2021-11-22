import { DripsyProvider, makeTheme } from 'dripsy';

const FONT_FAMILY = 'OpenSans';

const theme = makeTheme({
  colors: {
    primary: '#218582',
    secondary: '#fe985f',
    textPrimary: '#4d4e50',
    textSecondary: '#808080',
    textContrast: '#ffffff',
    background: '#f6f6f6',
  },
  fontWeights: {
    light: '300',
    normal: '400',
    bold: '700',
  },
  customFonts: {
    [FONT_FAMILY]: {
      300: `${FONT_FAMILY}Light`,
      400: FONT_FAMILY,
      700: `${FONT_FAMILY}Bold`,
    },
  },
  fonts: {
    root: FONT_FAMILY,
  },
  types: {
    reactNativeTypesOnly: true,
    onlyAllowThemeValues: 'always',
  },
});

export type Theme = typeof theme;

export function ThemeProvider({ children }: React.PropsWithChildren<unknown>) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
