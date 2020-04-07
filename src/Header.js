import React, {Component} from 'react';
import './App.css';
import './CSS/Header.css';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import {Route, Link, HashRouter} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <HashRouter>
        <div className="link-wrap">
          <div className="page-link" dest="#home">
            <Link to="/">Home</Link>
          </div>
          <div className="page-link" dest="about">
            <Link to="/about">Skills</Link>
          </div>
          <div className="page-link" dest="portfolio">
            <Link to="/projects">Projects</Link>
          </div>
          <div className="page-link" dest="contact">
            <Link to="/contact">Contact</Link>
          </div>
          <div className="content">
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Footer} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Header;
