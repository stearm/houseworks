import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './Theme';

export default ({children}: { children: React.ReactNode | Array<React.ReactNode> }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);