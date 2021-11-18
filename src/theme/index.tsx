import React from 'react';
import { DripsyProvider, makeTheme } from 'dripsy';

const theme = makeTheme({
  customFonts: {
    Inter: {
      bold: 'Inter-Bold',
      normal: 'Inter-Regular',
      lighter: 'Inter-Light',
    },
  },
  fonts: {
    root: 'Inter',
  },
});

export function ThemeProvider({ children }: React.PropsWithChildren<unknown>) {
  return <DripsyProvider theme={theme}>{children}</DripsyProvider>;
}
