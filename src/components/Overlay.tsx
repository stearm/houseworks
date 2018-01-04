import styled, { StyledFunction } from 'styled-components';

interface OverlayProps {
  borderRadius?: number;
}
const div: StyledFunction<OverlayProps & React.HTMLProps<HTMLDivElement>> = styled.div;

const Overlay = div`
  z-index: 1000000;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: ${props => props.borderRadius ? `${props.borderRadius}px` : '0px'};
`;

export default Overlay;