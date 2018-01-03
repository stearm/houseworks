import * as React from 'react';
import * as moment from 'moment';
import { storiesOf } from '@storybook/react';

import '../index.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Card from '../components/Card';
import CardList from '../components/CardList';
import { Task } from '../types/Task';
import { Reward } from '../types/Reward';
import TasksPanel from '../components/TasksPanel';
import Draggable from '../components/Draggable';
import Swipable from '../components/Swipable';
import Stats from '../components/Stats';
import AddTaskPanel from '../components/AddTaskPanel';
import App from '../App';
import TypeSelect from '../components/TypeSelect';

const tasks: Array<Task> = [
  {
    description: 'Descrizione lunghissima task Ciaone, meglio farlo ASAP, Lorem ipsum blablablabla',
    createdAt: moment().unix(),
    assignee: {
      email: 'ste@house.works',
      name: 'Stefano'
    },
    type: {
      id: 1,
      title: 'ciaone',
      effort: 2,
      reward: Reward.BEER
    }
  },
  {
    description: 'Descrizione lunghissima task 2',
    createdAt: moment().unix(),
    assignee: {
      email: 'ste@house.works',
      name: 'Stefano'
    },
    type: {
      id: 1,
      title: 'ciaone',
      effort: 2,
      reward: Reward.BEER
    }
  },
  {
    description: 'Descrizione lunghissima task 3',
    createdAt: moment().unix(),
    assignee: {
      email: 'ste@house.works',
      name: 'Stefano'
    },
    type: {
      id: 1,
      title: 'ciaone',
      effort: 2,
      reward: Reward.BEER
    }
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
  ))
  .add('AddTaskPanel', () => <AddTaskPanel updateShow={() => console.log('ciaone')}/>)
  .add('EffortSelect', () => <TypeSelect types={[]} />)
  .add('App', () => (
    <App />
  ));