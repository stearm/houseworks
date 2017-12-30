import * as React from 'react';
import styled from 'styled-components';

import { Task } from '../types/Task';
import CardList from './CardList';
import Card from './Card';
import Title from './Title';

const TaskPanelWrapper = styled.div`
  & > div:first-child {
    margin: 15px 0 5px 5px;
  }
`;

interface Props {
  title: string;
  tasks: Array<Task>;
}

const TasksPanel: React.SFC<Props> = ({title, tasks}) => (
  <TaskPanelWrapper>
    <Title size={25} color={'#37656b'}>
      {title}
    </Title>
    <CardList>
      {tasks.map((task, i) => (
        <Card key={i} task={task}/>
      ))}
    </CardList>
  </TaskPanelWrapper>
);

export default TasksPanel;