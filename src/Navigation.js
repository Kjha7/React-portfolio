import React, {Component} from 'react';
import './App.css';
import './CSS/Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav-content">
        <div>
          <div className="text">
            Hello, I'm
            <span className="highlight"> Kirti Jha</span>. <br />
            I'm a full-stack web developer.
          </div>
          <div className="btn-page-link">
            View my work
            <img
              className="image-work"
              src={require('./img/right-line-arrow-ico-512.png')}
              alt=""
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
