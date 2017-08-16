import React from 'react';

export default class UserProfile extends React.Component {
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
              <div className="user-profile">
                <strong>Имя: </strong><div id="user-name"></div>
                <strong>E-mail: </strong><div id="user-email"></div>
                <strong>Адрес: </strong><div id="user-address"></div>
                <strong>Телефон: </strong><div id="user-phone"></div>
                <strong>Сайт: </strong><div id="user-website"></div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal">Ок</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
