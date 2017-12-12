import * as React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  & > div:not(:last-child) {
    margin-right: 5px;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    margin-left: 5px;
    margin-right: 5px;
    & > div:not(:first-child) {
      margin-top: 5px;
    }
  }
`;

export default ({ children }: { children: Array<React.ReactNode> }) => (
  <List>
    {children}
  </List>
);