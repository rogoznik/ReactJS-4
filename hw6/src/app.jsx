import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from './app/layouts/Layout';
import MainPage from './app/pages/MainPage';
import Posts from './app/components/posts/Posts'
import Users from './app/pages/Users';
import Comments from './app/components/comments/Comments';


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path="posts" component={Posts}/>
      <Route path="users" component={Users}/>
      <Route path="comments" component={Comments}/>
    </Route>
  </Router>,
app);