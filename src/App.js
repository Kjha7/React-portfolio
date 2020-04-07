import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import {Route, NavLink, HashRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
