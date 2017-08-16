import React from 'react';

export default class User extends React.Component {
  constructor() {
    super(...arguments);

    this.state = {
      showBody: false
    };

    this.showProfile = this.showProfile.bind(this);
    this.showBody = this.showBody.bind(this);
  }

  showBody() {
    this.setState({
      showBody: !this.state.showBody
    });
  }

  showProfile() {
    $('#myModalLabel').html("Пользователь: " + this.props.username);
    $('#user-name').html(this.props.name);
    $('#user-email').html(this.props.email);
    $('#user-address').html(
      this.props.address.city + ", " +
      this.props.address.street + ", " +
      this.props.address.suite
    );
    $('#user-phone').html(this.props.phone);
    $('#user-website').html(this.props.website);
  }

  render() {
    let body = null;
    if (this.state.showBody) {
      body = (
        <div className="panel-body">
          <div><strong>Имя: </strong>{this.props.name}</div>
          <div><strong>Email: </strong>{this.props.email}</div>
          <button className="btn btn-success btn-show-profile" data-toggle="modal"
            data-target="#myModal" onClick={this.showProfile}>Подробнее</button>
        </div>
      );
    }
    return (
      <div className="panel panel-default">
        <div className="panel-heading" onClick={this.showBody}>
          Пользователь: {this.props.username}
        </div>
        {body}
      </div>
    );
  }
}
