// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import Dashboard from './Pages/Dashboard';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'tachyons';
import 'semantic-ui-css/semantic.min.css';

const httpLink = createHttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjqjj84oead2201992zqib6hi'
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render((
  <ApolloProvider client={client}>
    <Dashboard />
  </ApolloProvider>
  ),
  document.getElementById('root')
);

serviceWorker.register();
