import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/MainPage';
import Articles from './app/pages/Articles';
import Users from './app/pages/Users';


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path="articles" component={Articles}/>
      <Route path="users" component={Users}/>
    </Route>
  </Router>,
app);