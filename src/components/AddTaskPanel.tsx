import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';

import Button from '../components/Button';
import Label from '../components/Label';
import TextArea from '../components/TextArea';
import TypeSelectContainer from '../apollo-containers/TypeSelectContainer';
import UserSelectionPanel from '../components/UserSelectionPanel';

import { User } from '../types/User';
import { TaskType } from '../types/Type';

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
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const InsertButton = styled(Button) `
  width: 50%;
  align-self: center;
  margin-top: 15px;
`;

interface Props {
  updateShow: () => any;
  createTask: (description: string, assigneeId: string, typeId: string) => void;
}

interface State {
  type: TaskType | null;
  description: string;
  user: User | null;
}

class AddTaskPanel extends React.Component<Props, State> {

  static contextTypes = {
    users: PropTypes.array
  };

  context: { 'users': Array<User> };

  constructor (props: Props) {
    super(props);
    this.state = {
      type: null,
      description: '',
      user: null
    };
  }

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          const { description, user, type } = this.state;
          if (description && description !== '' && type && user) {
            this.props.createTask(description, user.id, type.id);
          }
        }}
      >
        <Close onClick={e => this.props.updateShow()}><img src={cross} /></Close>
        <Wrapper>
          <InputDiv>
            <Label htmlFor="type">Type</Label>
            <TypeSelectContainer changeType={(type: TaskType) => this.setState({ type })} type={this.state.type} />
          </InputDiv>
          <InputDiv>
            <Label htmlFor="description">Description</Label>
            <TextArea
              rows={4}
              cols={45}
              id="description"
              value={this.state.description}
              onChange={(e) => this.setState({ description: e.target.value })}
            />
          </InputDiv>
          <InputDiv>
            <UserSelectionPanel
              users={this.context.users}
              selectedUser={this.state.user}
              selectUser={(user: User) => this.setState({ user })}
            />
          </InputDiv>
          <InsertButton>Insert task</InsertButton>
        </Wrapper>
      </Form>
    );
  }

}

export default AddTaskPanel;