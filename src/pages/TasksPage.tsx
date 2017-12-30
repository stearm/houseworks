import * as React from 'react';
import styled from 'styled-components';

import TasksPanel from '../components/TasksPanel';
import AddTaskPanel from '../components/AddTaskPanel';
import { Task } from '../types/Task';
import Stats from '../components/Stats';
import Swipable from '../components/Swipable';
import LogoutButton from '../components/LogoutButton';
import SmallButton from '../components/SmallButton';

import { User } from '../types/User';

const AddTaskButton = styled(SmallButton)`
  position: absolute;
  top: 15px;
  right: 58px;
  z-index: 5000;
`;

interface Props {
  tasks: {[key: string]: Array<Task>};
  users: Array<User>;
}

interface State {
  showNewTaskPanel: boolean;
}

class TasksPage extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      showNewTaskPanel: false
    };
  }

  updateShow = () => {
    this.setState({showNewTaskPanel: !this.state.showNewTaskPanel});
  }

  render() {
    const tasks = this.props.tasks;
    const users = Object.keys(tasks);
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
            users.map(user => (
              <div key={user}>
                <TasksPanel title={`${user}'s tasks`} tasks={tasks[user]} />
              </div>
            ))
          }
        </Swipable>
      </div>
    );
  }

}

export default TasksPage;