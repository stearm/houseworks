import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client/ApolloClient';
import { ApolloLink } from 'apollo-link';

const httpLink = createHttpLink({ uri: `https://api.graph.cool/simple/v1/${process.env.REACT_APP_SERVICE_ID}` });
const middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${localStorage.getItem('graphcoolToken')}`
    }
  });

  if (!forward) {
    throw Error('Forward is required!');
  }

  return forward(operation);
});

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;