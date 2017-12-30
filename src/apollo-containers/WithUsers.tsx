import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import { User } from '../types/User';

const ALL_USERS = gql`
  query AllUsers {
    allUsers {
      email
      name
    }
  }
`;

interface AllUsersQuery {
  loading: boolean;
  allUsers: Array<User>;
  error: Error;
}

const WithUsers: React.SFC = (
  {children, allUsersQuery}: { children: Function, allUsersQuery: AllUsersQuery }
) => {
  if (allUsersQuery.loading) {
    return children([]);
  } else {
    return children(allUsersQuery.allUsers);
  }
};

export default graphql(ALL_USERS, { name: 'allUsersQuery', options: {fetchPolicy: 'network-only'}})(WithUsers);