import { EventEmitter } from 'events';
import axios from 'axios';

import {
  ADD_POST,
  FETCH_POSTS_START,
  FETCH_POSTS_END,
  DEL_POST,
  EDIT_POST
} from '../constants/postsConstants';

import dispatcher from '../dispatcher';

class PostStore extends EventEmitter {
  constructor() {
    super(...arguments);

    this.posts = [];


  }

  fetchPostsStart = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          let { data } = response;

          dispatcher.dispatch({
            type: FETCH_POSTS_END,
            payload: data
          });
        });
  };

  change = () => {
    this.emit('change', this.posts);
  };

  fetchPostsEnd = (posts) => {
    this.posts = posts;
    this.change();
  };

  addPost = (post) => {
    this.posts.push(post);
    this.change();
  };

  delPost = (id) => {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        this.posts.splice(i, 1);
        break;
      }
    }
    this.change();
  };

  savePost = ({id, body}) => {
    for (let i = 0; i < this.posts.length; i++) {
      if (this.posts[i].id === id) {
        this.posts[i].body = body;
        break;
      }
    }
    this.change();
  };

  handleActions = (action) => {
    switch (action.type) {
      case ADD_POST: {
        this.addPost(action.payload);
        break;
      }
      case FETCH_POSTS_START: {
        this.fetchPostsStart();
        break;
      }
      case FETCH_POSTS_END: {
        this.fetchPostsEnd(action.payload);
        break;
      }
      case DEL_POST: {
        this.delPost(action.payload);
        break;
      }
      case EDIT_POST: {
        this.savePost(action.payload);
        break;
      }
    }
  }
}

const pS = new PostStore;
dispatcher.register(pS.handleActions);
export default pS;