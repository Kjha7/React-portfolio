import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Header from './Header';
import About from './About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Home />
      <Header />
      <About />
    </div>
  );
}

export default App;
