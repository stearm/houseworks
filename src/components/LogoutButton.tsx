import * as React from 'react';
import styled from 'styled-components';

import Button from './Button';

const StyledLogoutButton = styled(Button)`
  background-color: ${props => props.theme.bgColor};
  position: absolute;
  font-size: 10px;
  padding: 5px;
  top: 5px;
  right: 5px;
  z-index: 5000;
`;

const LogoutButton = () => (
  <StyledLogoutButton
    onClick={(e) => {
      localStorage.removeItem('graphcoolToken');
      window.location.reload();
    }}
  >
    Logout
  </StyledLogoutButton>
);

export default LogoutButton;