import * as React from 'react';
import * as moment from 'moment';
import { storiesOf } from '@storybook/react';

import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../components/Card';
import CardList from '../components/CardList';
import { Task } from '../types/Task';
import { TaskType } from '../types/Type';
import TasksPanel from '../components/TasksPanel';
import Draggable from '../components/Draggable';
import Swipable from '../components/Swipable';
import Stats from '../components/Stats';

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

storiesOf('HouseWork', module)
  .add('Card', () => <Card task={tasks[0]}/>)
  .add('CardList', () => (
      <div style={{padding: 10}}>
        <CardList>
          {tasks.map((task, i) => (
            <Card key={i} task={task}/>
          ))}
        </CardList>
      </div>
    )
  )
  .add('TasksPanel', () => <TasksPanel title="My tasks" tasks={tasks}/>)
  .add('TasksPanels with Swipe', () => (
    <Swipable>
      <TasksPanel title="My tasks" tasks={tasks}/>
      <TasksPanel title="My tasks" tasks={tasks}/>
    </Swipable>
  ))
  .add('Draggable', () => <Draggable><p>Ciaone</p></Draggable>)
  .add('Swipable and Tasks', () => (
    <div>
      <Stats/>
      <Swipable>
        <TasksPanel title="My tasks" tasks={tasks}/>
        <TasksPanel title="My tasks" tasks={tasks}/>
      </Swipable>
    </div>
  ));