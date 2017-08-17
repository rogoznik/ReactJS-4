import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/MainPage';
import Users from './app/pages/Users';
import Comments from './app/pages/Comments';
import Posts from './app/pages/Posts';

import { Provider } from 'react-redux';
import store from './app/stores/store';

const app = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={MainPage} />
        <Route path="users" component={Users}/>
        <Route path="comments" component={Comments}/>
        <Route path="posts" component={Posts}/>
      </Route>
    </Router>
  </Provider>,
app);
