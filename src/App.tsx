import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import client from './client';
import ThemeProviderWrapper from './ThemeProviderWrapper';
import ApolloProvider from 'react-apollo/ApolloProvider';
import LoginPageContainer from './apollo-containers/LoginPageContainer';
import TasksPageContainer from './apollo-containers/TasksPageContainer';
import { Redirect } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <ThemeProviderWrapper>
          <Router>
            <div style={{height: '100%'}}>
              <Route
                exact
                path="/"
                component={() => {
                  if (localStorage.getItem('graphcoolToken')) {
                    return <TasksPageContainer />;
                  }
                  return <Redirect to="/login" />;
                }}
              />
              <Route
                path="/login"
                component={() => {
                  if (localStorage.getItem('graphcoolToken')) {
                    return <Redirect to="/" />;
                  }
                  return <LoginPageContainer />;
                }}
              />
            </div>
          </Router>
      </ThemeProviderWrapper>
    </ApolloProvider>
    );
  }
}

export default App;
