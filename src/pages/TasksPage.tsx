import * as React from 'react';
import styled from 'styled-components';
import * as PropTypes from 'prop-types';
import * as _ from 'lodash';

import { Task } from '../types/Task';
import { User } from '../types/User';

import TasksPanel from '../components/TasksPanel';
import AddTaskPanel from '../components/AddTaskPanel';
import Stats from '../components/Stats';
import Swipable from '../components/Swipable';
import LogoutButton from '../components/LogoutButton';
import SmallButton from '../components/SmallButton';

const AddTaskButton = styled(SmallButton)`
  position: absolute;
  top: 15px;
  right: 58px;
  z-index: 5000;
`;

interface Props {
  tasks: {[key: string]: Array<Task>};
}

interface State {
  showNewTaskPanel: boolean;
}

class TasksPage extends React.Component<Props, State> {

  static contextTypes = {
    users: PropTypes.array
  };

  context: { 'users': Array<User> };

  constructor(props: Props) {
    super(props);
    this.state = {
      showNewTaskPanel: false
    };
  }

  updateShow = () => {
    this.setState({showNewTaskPanel: !this.state.showNewTaskPanel});
  }

  getTitle = (email: string): string => {
    const foundUser: User | undefined = _.find(this.context.users, u => u.email === email);

    if (!foundUser) {
      throw Error(`No user found with email ${email}`);
    }

    if (foundUser.logged) {
      return 'Your tasks';
    }
    return `${foundUser.name}\'s tasks`;
  }

  render() {
    const tasks = this.props.tasks;
    const showNewTaskPanel = this.state.showNewTaskPanel;

    return (
      <div style={{ height: '100%' }}>
        <LogoutButton />
        <AddTaskButton onClick={this.updateShow}>Add tasks</AddTaskButton>
        <Stats />
        {
          showNewTaskPanel
            ? <AddTaskPanel updateShow={this.updateShow}/>
            : null
        }
        <Swipable>
          {
            this.context.users.sort((u1, u2) => u1.logged ? -1 : 1).map(user => (
              <div key={user.email}>
                <TasksPanel title={this.getTitle(user.email)} tasks={tasks[user.email]} />
              </div>
            ))
          }
        </Swipable>
      </div>
    );
  }

}

export default TasksPage;