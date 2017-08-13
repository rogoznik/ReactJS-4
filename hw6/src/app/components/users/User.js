import React from 'react';

export default class User extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      showBody: false
    };
  }

  bodyShow = () => {
    this.setState({showBody: !this.state.showBody});
  };

  render() {
    let profileBody;
    if (this.state.showBody) {
      profileBody = (
        <div className="panel-body profile-body">
          <div className="user-info">
            <div className="user-info__user-name"><strong>Имя:</strong> {this.props.name}</div>
            <div className="user-info__user-email"><strong>E-mail:</strong> {this.props.email}</div>
            <div className="user-info__user-phone"><strong>Телефон:</strong> {this.props.phone}</div>
          </div>
        </div>
      );
    }
    return (
      <div className="panel panel-default profile">
        <div className="panel-heading profile-header" onClick={this.bodyShow}>
          <span className="profile-user"><strong>Пользователь:</strong> {this.props.username}</span>
        </div>
        {profileBody}
      </div>
    );
  }
}