import React from 'react';

import BtnLogin from './BtnLogin';
import Menu from './menu/Menu';
import Content from './Content';
import ModalWindow from './ModalWindow';


export default class MainPage extends React.Component {

  render() {

    return (
      <div className="main-page">
        <ModalWindow/>
        <header className="header">
          <BtnLogin/>
        </header>
        <nav className="nav-bar">
          <Menu/>
        </nav>
        <Content/>
        <footer className="footer"></footer>
      </div>
    );
  }
}