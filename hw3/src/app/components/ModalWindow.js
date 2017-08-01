import React from 'react';

export default class ModalWindow extends React.Component {

  render() {
    return (
      <div className="modal fade" id="modal-form-login">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Modal title</h4>
            </div>
            <div className="modal-body">
              <form action="">
                <button type="submit" className="btn btn-primary">Вход</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}