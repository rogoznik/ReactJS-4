import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import { usersReducer } from '../reducers/usersReducer';
import { commentsReducer } from '../reducers/commentsReducer';
import { commentsForPostReducer } from '../reducers/commentsForPostReducer';
import { postsReducer } from '../reducers/postsReducer';


const middleWare = applyMiddleware(promise(), logger());
const reducer = combineReducers({
  users: usersReducer,
  comments: commentsReducer,
  posts: postsReducer,
  commentsForPost: commentsForPostReducer
});

const store = createStore(reducer, middleWare);

export default store;
