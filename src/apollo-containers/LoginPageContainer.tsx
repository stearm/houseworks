import * as React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router-dom';

import LoginPage from '../pages/LoginPage';
import { RouteComponentProps } from 'react-router';

const AUTHENTICATE_EMAIL_USER = gql`
    mutation AuthenticateUser($email: String!, $password: String!) {
        authenticateUser(email: $email, password: $password) {
            token
        }
    }
`;

interface Props {
  authenticateUserMutation: Function;
  match: object;
  location: object;
  history: Array<string>;
}

interface State {
  email: string;
  password: string;
  loginError: boolean;
  loading: boolean;
}

class LoginPageContainer extends React.Component<Props, State> {

  constructor (props: Props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      loginError: false,
      loading: false
    };
  }

  changeCredential = (value: string, field: 'email' | 'password') => {
    this.setState({ [field as any]: value });
  }

  loginUser = async () => {
    const { email, password } = this.state;

    this.setState({loading: true, loginError: false}, async () => {
      try {
        const response = await this.props.authenticateUserMutation({variables: { email, password }});
        localStorage.setItem('graphcoolToken', response.data.authenticateUser.token);
        this.setState({loading: false});
        this.props.history.push('/');
      } catch (e) {
        this.setState({loginError: true, loading: false});
        console.error('An error occurred: ', e);
      }
    });
  }

  render () {
    return (
      <LoginPage
        email={this.state.email}
        password={this.state.password}
        loginError={this.state.loginError}
        loading={this.state.loading}
        changeCredentials={this.changeCredential}
        login={this.loginUser}
      />
    );
  }
}

export default graphql(
  AUTHENTICATE_EMAIL_USER,
  {name: 'authenticateUserMutation'}
)
(withRouter<RouteComponentProps<{}>, any>(LoginPageContainer));