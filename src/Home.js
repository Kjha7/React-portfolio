import React, {Component} from 'react';
import './App.css';
import './CSS/Home.css';
import {Route, Link, HashRouter} from 'react-router-dom';
import Projects from './Projects';

class Navigation extends Component {
  render() {
    return (
      <nav className="nav-content">
        <div>
          <div className="text">
            Hello, I'm
            <span className="highlight"> Kirti Jha</span>. <br />
            I'm a software developer.
          </div>
          <HashRouter>
            <div className="btn-page-link">
              <Link to="/projects">View my work</Link>

              <img
                className="image-work"
                src={require('./img/right-line-arrow-ico-512.png')}
                alt=""
              />
            </div>
            <div className="content">
              <Route path="/projects" component={Projects} />
            </div>
          </HashRouter>
        </div>
      </nav>
    );
  }
}

export default Navigation;
