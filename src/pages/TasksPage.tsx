import * as React from 'react';

import TasksPanel from '../components/TasksPanel';
import { Task } from '../types/Task';
import Stats from '../components/Stats';
import Swipable from '../components/Swipable';
import LogoutButton from '../components/LogoutButton';

const TasksPage = ({ tasks }: {tasks: Array<Task>}) => (
  <div style={{height: '100%'}}>
    <LogoutButton />
    <Stats/>
    <Swipable>
      <div>
        <TasksPanel title="Not my tasks" tasks={tasks}/>
      </div>
      <div>
        <TasksPanel title="My tasks" tasks={tasks}/>
      </div>
      <div>
        <TasksPanel title="Free tasks" tasks={tasks}/>
      </div>
    </Swipable>
  </div>
);

export default TasksPage;