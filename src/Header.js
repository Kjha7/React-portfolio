import React, {Component} from 'react';
import './App.css';
import './CSS/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="link-wrap">
        <div className="page-link" dest="home">
          Home
        </div>
        <div className="page-link" dest="about">
          Skills
        </div>
        <div className="page-link" dest="portfolio">
          Project
        </div>
        <div className="page-link" dest="contact">
          Contact
        </div>
      </div>
    );
  }
}

export default Header;
