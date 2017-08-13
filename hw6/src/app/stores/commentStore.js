import { EventEmitter } from 'events';
import axios from 'axios';

import {
  ADD_COMMENT,
  FETCH_COMMENTS_START,
  FETCH_COMMENTS_END
} from '../constants/commentsConstants';

import dispatcher from '../dispatcher';

class CommentStore extends EventEmitter {
  constructor() {
    super(...arguments);

    this.comments = [];

    this.fetchCommnetsStart = this.fetchCommnetsStart.bind(this);
    this.fetchCommentsEnd = this.fetchCommentsEnd.bind(this);
    this.change = this.change.bind(this);
    this.getComments = this.getComments.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleActions = this.handleActions.bind(this);
  }

  fetchCommnetsStart() {
    axios.get('http://jsonplaceholder.typicode.com/comments')
      .then((response) => {
        let { data } = response;

        dispatcher.dispatch({
          type: FETCH_COMMENTS_END,
          payload: data
        });
      });
  }

  fetchCommentsEnd(comments) {
    this.comments = comments;
    this.change();
  }

  change() {
    this.emit('change', this.comments);
  }

  getComments() {
    return this.comments;
  }

  addComment(comment) {
    this.comments.push(comment);
    this.change();
  }

  handleActions(action) {
    switch (action.type) {
      case ADD_COMMENT: {
        this.addComment(action.payload);
        break;
      }
      case FETCH_COMMENTS_START: {
        this.fetchCommnetsStart();
        break;
      }
      case FETCH_COMMENTS_END: {
        this.fetchCommentsEnd(action.payload);
        break;
      }
    }
  }
}

const cS = new CommentStore;
dispatcher.register(cS.handleActions);
export default cS;