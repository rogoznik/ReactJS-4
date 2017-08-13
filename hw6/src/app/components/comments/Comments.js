import React from 'react';

import { addComment, fetchComments } from '../../actions/commentsActions';
import CommentList from './CommentList';
import CommentStore from '../../stores/commentStore'

export default class Comments extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      comments: []
    };

    this.newComment = this.newComment.bind(this);
    this.onCommentsChange = this.onCommentsChange.bind(this);
  }

  newComment() {
    let name = 'Новый комментарий';
    let userId = 1;
    let body = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, non?';

    addComment({name, userId, body});
  }

  onCommentsChange(comments) {
    this.setState({
      comments: comments
    });
  }

  componentWillMount() {
    CommentStore.on('change', this.onCommentsChange);
  }

  componentDidMount() {
    fetchComments();
  }

  render() {
    return(
      <div>
        <button className="btn btn-primary btn-block" onClick={this.newComment}>
          Добавить комментарий
        </button>
        <CommentList comments={this.state.comments} />
      </div>
    );
  }
}