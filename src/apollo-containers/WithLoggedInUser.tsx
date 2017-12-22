import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const LOGGED_IN_USER = gql`
  query LoggedInUser {
    loggedInUser {
      id
    }
  }
`;

const WithLoggedInUser: React.SFC = (
  {children, loggedInUser}: {children: Function, loggedInUser: object}
) => children(loggedInUser);

export default graphql(LOGGED_IN_USER, { options: {fetchPolicy: 'network-only'}})(WithLoggedInUser);