import React from 'react';

import Comment from './Comment';
import { getComments } from '../../actions/commentsActions';

import { connect } from 'react-redux';

@connect((store) => {
  return {
    comments: store.comments.comments
  }
})

export default class CommentList extends React.Component {
  constructor() {
    super(...arguments);

    let toDispatch = getComments();
    this.props.dispatch(toDispatch);
  }

  render() {
    let comments = this.props.comments.map((comment, index) => {
      return (
          <Comment key={index} {...comment} />
      );
    });
    return (
      <div className="panel panel-default">
        {comments}
      </div>
    );
  }
}
