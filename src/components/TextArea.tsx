import styled from 'styled-components';

const TextArea = styled.textarea`
  padding: 10px;
  margin: 2px;
  border-radius: 5px;
  border-style: none;
  font-size: 14px;
  font-family: ${props => props.theme.fontNormal}
  max-width: 100%;
`;

export default TextArea;