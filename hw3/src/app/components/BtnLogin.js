import React from 'react';

export default class BtnLogin extends React.Component {

  render() {
    return (
      <button type="button" className="btn btn-primary" id="btn-login" data-toggle="modal" data-target="#modal-form-login">Логин</button>
    );
  }
}