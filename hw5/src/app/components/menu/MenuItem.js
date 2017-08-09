import React from 'react';
import { Link } from 'react-router';

export default class MenuItem extends React.Component {
  render() {
    return(
      <li className={this.props.active ? 'active' : null}>
        <Link to={this.props.href} className="link">
          {this.props.title}
        </Link>
      </li>
    );
  }
}