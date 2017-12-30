import * as React from 'react';
import styled from 'styled-components';

import Button from '../components/Button';
import Label from '../components/Label';
import TextArea from '../components/TextArea';
import TypeSelectContainer from '../apollo-containers/TypeSelectContainer';
import UserSelectionPanelContainer from '../apollo-containers/UserSelectionPanelContainer';

const cross = require('../assets/cross.svg');

const Form = styled.form`
  position: absolute;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: ${props => props.theme.bgColor};
  width: 100%;
  height: 100%;
  z-index: 99999;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px;

  @media (max-width: 768px) {
    width: 75%;
  }
`;

const Close = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
`;

const InsertButton = styled(Button) `
  width: 50%;
  align-self: center;
  margin-top: 15px;
`;

interface Props {
  updateShow: Function;
}

interface State {

}

class AddTaskPanel extends React.Component<Props, State> {

  render() {
    return (
      <Form>
        <Close onClick={e => this.props.updateShow()}><img src={cross} /></Close>
        <Wrapper>
          <InputDiv>
            <Label htmlFor="type">Type</Label>
            <TypeSelectContainer />
          </InputDiv>
          <InputDiv>
            <Label htmlFor="description">Description</Label>
            <TextArea rows={4} cols={45} id="description" />
          </InputDiv>
          <InputDiv>
            <UserSelectionPanelContainer />
          </InputDiv>
          <InsertButton>Insert task</InsertButton>
        </Wrapper>
      </Form>
    );
  }

}

export default AddTaskPanel;