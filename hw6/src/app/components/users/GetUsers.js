import React from 'react';
import Axios from 'axios';

import UserList from './UserList';

export default class GetUsers extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    Axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        let {data} = response;
        this.setState({users: data});
      });
  }

  render() {
    return (
      <UserList items={this.state.users}/>
    );
  }
}