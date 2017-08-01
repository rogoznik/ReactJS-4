import React from 'react';

import BtnLogin from './BtnLogin';
import Menu from './menu/Menu';
import Content from './Content';
import WindowLogin from './WindowLogin';


export default class MainPage extends React.Component {

  render() {

    return (
      <div className="container">
        <div className="main-page">
          <WindowLogin/>
          <header className="header">
            <BtnLogin/>
          </header>
          <nav className="nav-bar">
            <Menu/>
          </nav>
          <Content/>
          <footer className="footer">
            <nav className="nav-bar">
              <Menu/>
            </nav>
          </footer>
        </div>
      </div>

    );
  }
}