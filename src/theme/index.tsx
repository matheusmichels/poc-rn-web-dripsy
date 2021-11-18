import React from 'react';
import { DripsyProvider, makeTheme } from 'dripsy';

const theme = makeTheme({
  customFonts: {
    Inter: {
      lighter: 'Inter-Light',
      normal: 'Inter',
      bold: 'Inter-Bold',
    },
  },
  fonts: {
    root: 'Inter',
  },
});

export function ThemeProvider({ children }: React.PropsWithChildren<unknown>) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
