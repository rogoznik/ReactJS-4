import React from 'react';

import User from './User';
import { getUsers } from '../../actions/usersActions';
import UserProfile from './UserProfile';

import { connect } from 'react-redux';

@connect((store) => {
  return {
    users: store.users.users
  }
})

export default class Users extends React.Component {
  constructor() {
    super(...arguments);

    let toDispatch = getUsers();
    this.props.dispatch(toDispatch);
  }

  render() {
    let users = this.props.users.map((user, index) => {
      return (
          <User key={index} {...user} />
      );
    });
    return (
      <div className="panel panel-default">
        {users}
        <UserProfile/>
      </div>
    );
  }
}
