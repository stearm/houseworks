import * as React from 'react';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import * as PropTypes from 'prop-types';

import { User } from '../types/User';

const ALL_USERS = gql`
  query AllUsersQuery {
    allUsers {
      name
      email
    }
  }
`;

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      email
    }
  }
`;

interface AllUsersQuery {
  loading: boolean;
  allUsers: Array<User>;
  error: Error;
}

interface LoggedInUserQuery {
  loading: boolean;
  loggedInUser: { email: string };
  error: Error;
}

interface Props {
  allUsersQuery: AllUsersQuery;
  loggedInUserQuery: LoggedInUserQuery;
}

class UserProvider extends React.Component<Props, {}> {

  static childContextTypes = {
    users: PropTypes.array
  };

  getChildContext = () => {
    const { allUsersQuery, loggedInUserQuery } = this.props;
    if (allUsersQuery.loading || loggedInUserQuery.loading) {
      return {users: []};
    }

    const users = allUsersQuery.allUsers.map(user => {
      const userWithInfo = Object.assign({}, user);
      if (loggedInUserQuery.loggedInUser.email === userWithInfo.email) {
        userWithInfo.logged = true;
      }
      return userWithInfo;
    });

    return {
      users
    };
  }

  render () {
    const { allUsersQuery, loggedInUserQuery, children } = this.props;

    if (allUsersQuery.loading || loggedInUserQuery.loading) {
      return null;
    }

    return children;
  }
}

export default compose(
  graphql(ALL_USERS, { name: 'allUsersQuery', options: {fetchPolicy: 'network-only'}}),
  graphql(LOGGED_IN_USER, { name: 'loggedInUserQuery', options: {fetchPolicy: 'network-only'}})
)(UserProvider);