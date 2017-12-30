import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import * as _ from 'lodash';

import TasksPage from '../pages/TasksPage';
import Overlay from '../components/Overlay';

import { Task } from '../types/Task';
import { User } from '../types/User';

import WithUsers from '../apollo-containers/WithUsers';

const loader = require('../assets/loader.svg');

const ALL_TASKS = gql`
  query AllTasksQuery {
    allTasks {
      description
      type {
        reward
        effort
        title
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

const TasksPageContainer: React.SFC = (
  { children, allTasksQuery }: {children: any, allTasksQuery: AllTasksQuery }
) => {
  
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

  const tasks = _.groupBy(allTasksQuery.allTasks, 'assignee.email');

  return (
    <WithUsers>
      {(users: Array<User>) => (
        <TasksPage tasks={tasks} users={users} />
      )}
    </WithUsers>
  );
};

export default graphql(ALL_TASKS, { name: 'allTasksQuery'})(TasksPageContainer);