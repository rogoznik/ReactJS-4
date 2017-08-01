import React from 'react';

export default class WindowLogin extends React.Component {

  render() {
    return (
      <div className="modal fade" id="modal-form-login">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Вход</h4>
            </div>
            <div className="modal-body">
              <form action="" method="POST" className="clearfix form-login center-block">
                <div className="input-wrapper margin-bottom_10">
                  <input type="text" name="userLogin" id="userLogin" placeholder="Логин"/>
                </div>
                <div className="input-wrapper margin-bottom_10">
                  <input type="password" name="userPass" id="userPass" placeholder="Пароль"/>
                </div>
                <button type="submit" className="btn btn-primary right">Вход</button>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}