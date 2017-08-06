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
          <header className="page-header">
            <nav className="navbar navbar-default clearfix">
              <Menu/>
              <BtnLogin/>
            </nav>
          </header>

          <Content/>
          <footer className="panel-footer">
            <nav className="navbar navbar-default">
              <Menu/>
            </nav>
          </footer>
        </div>
      </div>

    );
  }
}