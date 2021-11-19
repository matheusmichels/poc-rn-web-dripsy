import React from 'react';

import { render as rtlRender } from '@testing-library/react-native';

import { ThemeProvider } from '../theme';

function render(ui, options = {}) {
  function Wrapper({ children }) {
    return <ThemeProvider>{children}</ThemeProvider>;
  }

  return rtlRender(ui, { wrapper: Wrapper, ...options });
}

export * from '@testing-library/react-native';

// override React Testing Library's render with our own
export { render };
