import React from 'react';

import { delPost } from '../../actions/postsActions';

export default class Post extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showBody: false
    };
  }

  bodyShow = () => {
    this.setState({showBody: !this.state.showBody});
  };

  deletePost = () => {
    this.bodyShow();
    delPost(this.props.id);
  };

  editPost = () => {
    $('#myModalLabel').html(this.props.title);
    $('#post-body').val(this.props.body);
  };

  render() {
    let postBody;
    if (this.state.showBody) {
      postBody = (
          <div className="panel-body">
            <div>
              {this.props.body}
            </div>
            <button className="btn btn-danger" onClick={this.deletePost}>Удалить</button>
            <button className="btn btn-success" id="btn-edit-post" data-postId={this.props.id} data-toggle="modal" data-target="#myModal" onClick={this.editPost}>Редактировать</button>
          </div>
      )
    }
    return (
        <div className="panel panel-default">
          <div className="panel-heading" onClick={this.bodyShow}>
            <div className="post-author">Автор: {this.props.userId}</div>
            <h3 className="panel-title">{this.props.title}</h3>
          </div>
          {postBody}
        </div>
    );
  }
}