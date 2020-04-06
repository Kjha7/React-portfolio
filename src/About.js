import React, {Component} from 'react';
import './App.css';
import './CSS/About.css';

class About extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-header">About</div>
        <img
          className="image-line"
          src={require('./img/line-breaker.png')}
          alt=""
        />
        <div className="bullet-wrap">
          <img
            className="bullet-icon"
            src={require('./img/speed.png')}
            alt=""
          />
          <div className="bullet-title">Fast</div>
          <div className="bullet-para">
            Fast load times and lag free interaction, my highest priority.
          </div>
        </div>
        <div className="bullet-wrap">
          <img
            className="bullet-icon"
            src={require('./img/responsive.png')}
            alt=""
          />
          <div className="bullet-title">Responsive</div>
          <div className="bullet-para">
            My layouts will work on any device, big or small.
          </div>
        </div>
        <div className="bullet-wrap">
          <img
            className="bullet-icon"
            src={require('./img/intuitive.png')}
            alt=""
          />
          <div className="bullet-title">Intuitive</div>
          <div className="bullet-para">
            Strong preference for easy to use, intuitive UX/UI.
          </div>
        </div>
        <div className="bullet-wrap">
          <img
            className="bullet-icon"
            src={require('./img/dynamic.png')}
            alt=""
          />
          <div className="bullet-title">Dynamic</div>
          <div className="bullet-para">
            Websites don't have to be static, I love making pages come to life.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
