import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import UserSelectionPanel from '../components/UserSelectionPanel';
import { User } from '../types/User';

const ALL_USERS = gql`
  query AllUsersQuery {
    allUsers {
      name
      email
    }
  }
`;

interface AllEffortsQuery {
  loading: boolean;
  allUsers: Array<User>;
  error: Error;
}

const UserSelectionPanelContainer: React.SFC = 
  ({ children, allUsersQuery }: {children: any, allUsersQuery: AllEffortsQuery}) => {

    if (allUsersQuery.loading) {
      return <span>'Fetching users...'</span>;
    }

    return <UserSelectionPanel users={allUsersQuery.allUsers} />;
  };

export default graphql(ALL_USERS, { name: 'allUsersQuery'})(UserSelectionPanelContainer);