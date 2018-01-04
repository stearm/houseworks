import styled from 'styled-components';

import Button from './Button';

const SmallButton = styled(Button)`
  background-color: ${props => props.theme.bgColor};
  font-size: 12px;
  padding: 5px;
`;

export default SmallButton;