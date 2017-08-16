import React from 'react';
import { Link } from 'react-router';

export default class Menu extends React.Component {
  render(){
    return(
      <div className="col-xs-2">
        <div className="menu">
          <div className="brand">
            <Link className="link" to="/">{this.props.brand}</Link>
          </div>

          <ul>
            {this.props.children}
          </ul>
        </div>
      </div>
    );
  }
}