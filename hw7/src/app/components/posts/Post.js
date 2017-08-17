import React from 'react';

import { getCommentsForPost } from '../../actions/commentsActions';

import Comment from '../comments/Comment';

import { connect } from 'react-redux';

@connect((store) => {
  return {
    commentsForPost: store.commentsForPost.commentsForPost
  }
})

export default class Post extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showBody: false,
      showComments: false
    };



    this.showBody = this.showBody.bind(this);
    this.showComments = this.showComments.bind(this);
  }

  showBody() {
    this.setState({
      showBody: !this.state.showBody,
      showComments: false
    });
  }

  showComments() {
    let toDispatch = getCommentsForPost(this.props.id);
    this.props.dispatch(toDispatch);
    this.setState({
      showComments: !this.state.showComments
    });
  }

  render() {
    let body = null;
    let showComments = null;
    let CaptionBtnComments = '';

    let comments = this.props.commentsForPost.map((comment, index) => {
      return <Comment key={index} {...comment} />;
    });

    if (this.state.showComments) {
      showComments = (<div className="panel panel-default">{comments}</div>);
      CaptionBtnComments = 'Скрыть комментарии';
    } else {
      CaptionBtnComments = 'Показать комментарии';
    }

    if (this.state.showBody) {
      body = (
        <div className="panel-body">
          <div className="post-author"><strong>Автор: </strong>{this.props.userId}</div>
          {this.props.body}
          <button className="btn btn-success btn-block" onClick={this.showComments}>{CaptionBtnComments}</button>
          {showComments}
        </div>
      );
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading" onClick={this.showBody}>
          {this.props.title}
        </div>
        {body}
      </div>
    );
  }
}
