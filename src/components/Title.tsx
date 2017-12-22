import * as React from 'react';

import styled from 'styled-components';

const TitleWrapper = styled.div`
  font-family: ${props => props.theme.fontTitle};
  font-weight: bold;
`;

interface Props {
  children: string;
  size?: number;
  color?: string;
}

const Title: React.SFC<Props> = ({children, size, color}) => (
  <TitleWrapper>
    <span style={{fontSize: size, color}}>{children}</span>
  </TitleWrapper>
);

export default Title;