import React from 'react';

import { savePost } from '../../actions/postsActions';

export default class EditPost extends React.Component {

  saveChange = () => {
    let id = parseInt($('#btn-edit-post').attr('data-postId'));
    let body = $('#post-body').val();
    savePost({id, body});
  };

  render() {
    return (
      <div className="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
              <h4 className="modal-title" id="myModalLabel"/>
            </div>
            <div className="modal-body">
              <textarea id="post-body" cols="30" rows="10"/>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Отмена</button>
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.saveChange}>Сохранить</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}