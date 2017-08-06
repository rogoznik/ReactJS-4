import React from 'react';

import MenuItem from './MenuItem';

export default class Menu extends React.Component {

  render() {

    let menuItems = [
      "Главная",
      "Статьи",
      "Контакты"
    ];

    return (
      <div className="menu left">
        <MenuItem items={menuItems}/>
      </div>
    );
  }
}