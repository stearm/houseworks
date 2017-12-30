import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import TypeSelect from '../components/TypeSelect';
import { TaskType } from '../types/Type';

const ALL_TYPES = gql`
  query AllTaskTypesQuery {
    allTaskTypes {
      id
      title
      effort
      reward
    }
  }
`;

interface AllEffortsQuery {
  loading: boolean;
  allTaskTypes: Array<TaskType>;
  error: Error;
}

const EffortSelectContainer: React.SFC = 
  ({ children, allTypesQuery }: {children: any, allTypesQuery: AllEffortsQuery}) => {

    if (allTypesQuery.loading) {
      return <span>'Fetching efforts...'</span>;
    }

    return <TypeSelect types={allTypesQuery.allTaskTypes} />;
  };

export default graphql(ALL_TYPES, { name: 'allTypesQuery'})(EffortSelectContainer);