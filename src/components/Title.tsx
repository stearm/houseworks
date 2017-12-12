import * as React from 'react';

import styled from 'styled-components';
import ThemeProviderWrapper from '../ThemeProviderWrapper';

const Title = styled.div`
  font-family: ${props => props.theme.fontTitle};
  font-weight: bold;
`;

export default ({children, size, color}: {children: string, size?: number, color?: string}) => (
  <ThemeProviderWrapper>
    <Title>
      <span style={{fontSize: size, color}}>{children}</span>
    </Title>
  </ThemeProviderWrapper>
);