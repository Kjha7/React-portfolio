import React, {Component} from 'react';
import './App.css';
import './CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <nav className="header-body">
        <div className="link-wrap">
          <div className="page-link" dest="home">
            Home
          </div>
          <div className="page-link" dest="about">
            About
          </div>
          <div className="page-link" dest="portfolio">
            Portfolio
          </div>
          <div className="page-link" dest="contact">
            Contact
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
