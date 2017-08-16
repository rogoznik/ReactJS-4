import { createStore, combineReducers, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import logger from 'redux-logger';

import { usersReducer } from '../reducers/usersReducer';
import { commentsReducer } from '../reducers/commentsReducer';


const middleWare = applyMiddleware(promise());
const reducer = combineReducers({
  users: usersReducer,
  comments: commentsReducer
});

const store = createStore(reducer, middleWare);

export default store;
