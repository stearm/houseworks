import * as React from 'react';
import styled from 'styled-components';

import SmallButton from './SmallButton';

const LogoutSmallButton = styled(SmallButton)`
  position: absolute;
  top: 15px;
  right: 5px;
  z-index: 5000;
`;

const LogoutButton = () => (
  <LogoutSmallButton
    onClick={(e) => {
      localStorage.removeItem('graphcoolToken');
      window.location.reload();
    }}
  >
    Logout
  </LogoutSmallButton>
);

export default LogoutButton;