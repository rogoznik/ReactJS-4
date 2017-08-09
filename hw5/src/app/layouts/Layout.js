import React from 'react';

import Menu from '../components/menu/Menu';
import MenuItem from '../components/menu/MenuItem';

export default class Layout extends React.Component {
  constructor() {
    super(...arguments);
    this.brand = 'ReactBlog';
  }

  isActive(href) {
    return window.location.pathname === href;
  }

  render() {
    return(
      <div className="container">
        <div className="divider_100"/>
        <div className="row">
          <Menu brand={this.brand}>
            <MenuItem href="/" active={this.isActive('/')} title="Главная"/>
            <MenuItem href="/articles" active={this.isActive('/articles')} title="Статьи"/>
            <MenuItem href="/users" active={this.isActive('/users')} title="Пользователи"/>
          </Menu>
          <div className="col-xs-7">
            <div className="content">
              { this.props.children }
            </div>
          </div>
        </div>
      </div>

    );
  }
}