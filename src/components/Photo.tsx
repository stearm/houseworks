import styled, { StyledFunction } from 'styled-components';

interface PhotoProps {
  selected?: boolean;
}

const photoDiv: StyledFunction<PhotoProps & React.HTMLProps<HTMLDivElement>> = styled.div;

const Photo = photoDiv`
  border: ${props => props.selected ? 'solid 3px #8ab9f3' : 'solid 2px'};
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  box-sizing: border-box;
`;

export default Photo;