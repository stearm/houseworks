import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ALL_USERS = gql`
  query AllUsersQuery {
    allUsers {
      name
      email
    }
  }
`;

const LOGGED_USER = gql``;