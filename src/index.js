import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './Styles/index.css';
import App from './Pages/App';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'techyons';

const httpLink = createHttpLink({
  uri: 'https://api.graph.cool/simple/v1/cjqjj84oead2201992zqib6hi'
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})

ReactDOM.render((
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>
  ),
  document.getElementById('root')
);

serviceWorker.register();
