import React from 'react';

import User from './User';

export default class UserList extends React.Component {
  render() {
    let userList = this.props.items.map((user, index) => {
      return (
          <User key={index} {...user}/>
        );
    });
    return (
      <div className="user-list">{userList}</div>
    );
  }
}