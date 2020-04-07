import React, {Component} from 'react';
import './App.css';
import './CSS/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="footer-body">
        <div className="icon-wrap">
          <a
            className="media-link"
            href="https://www.linkedin.com/in/kirti-jha/"
          >
            <img
              className="media-icon"
              src={require('./img/linkedin.png')}
              alt=""
            />
          </a>
          <a className="media-link" href="https://github.com/Kjha7">
            <img
              className="media-icon"
              src={require('./img/GitHub.png')}
              alt=""
            />
          </a>
        </div>
        <div className="copyright">KIRTI JHA ©2020</div>
      </div>
    );
  }
}

export default Footer;
