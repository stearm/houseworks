import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import TasksPage from '../pages/TasksPage';
import Overlay from '../components/Overlay';

import { Task } from '../types/Task';

const loader = require('../assets/loader.svg');

const ALL_TASKS = gql`
  query AllTasksQuery {
    allTasks {
      title
      description
      effort {
        reward
        value
      }
      assignee {
        email
        name
      }   
    }
  }
`;

interface AllTasksQuery {
  loading: boolean;
  allTasks: Array<Task>;
  error: Error;
}

const TasksPageContainer: React.SFC = ({ children, allTasksQuery }: {children: any, allTasksQuery: AllTasksQuery}) => {
  
  if (allTasksQuery.loading) {
    return (
    <Overlay borderRadius={0}>
      <img src={loader} />
    </Overlay>
    );
  }
  
  if (allTasksQuery.error && allTasksQuery.error.message.indexOf('Insufficient Permissions') >= 0) {
    return <div>No way 0_o</div>;
  }

  return (
    <TasksPage tasks={allTasksQuery.allTasks}/>
  );
};

export default graphql(ALL_TASKS, { name: 'allTasksQuery'})(TasksPageContainer);