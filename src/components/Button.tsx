import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  color: ${props => props.theme.textColor};
  border: 2px solid ${props => props.theme.textColor};
  border-radius: 5px;
  padding: 10px;
  font-size: 15px;
  font-family: ${props => props.theme.fontTitle};
  font-weight: bold;
  cursor: pointer;
  box-sizing: border-box;
  
  :hover {
    background-color: #0000004f
  }
  :focus {
    background-color: ${props => props.theme.textColor};
    color: ${props => props.theme.bgColor};
    border: 2px solid ${props => props.theme.textColor};
  }
`;

export default Button;