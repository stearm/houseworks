import * as React from 'react';
import './App.css';
import TasksPanel from './components/TasksPanel';
import { Task } from './types/Task';
import * as moment from 'moment';
import { TaskType } from './types/Type';
import Stats from './components/Stats';
import Swipable from './components/Swipable';

const tasks: Array<Task> = [
  {
    title: 'Task1',
    description: 'Descrizione lunghissima task Ciaone, meglio farlo ASAP, Lorem ipsum blablablabla',
    createdAt: moment().unix(),
    type: TaskType.BED
  },
  {
    title: 'Task2',
    description: 'Descrizione lunghissima task 2',
    createdAt: moment().unix(),
    type: TaskType.WASH_DISHES
  },
  {
    title: 'Task3',
    description: 'Descrizione lunghissima task 3',
    createdAt: moment().unix(),
    type: TaskType.GARBAGE
  }
];

class App extends React.Component {
  render() {
    return (
      <div style={{height: '100%'}}>
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
  }
}

export default App;
