import React, {Component} from 'react';
import './App.css';
import './CSS/About.css';
import {Container, Row, Col} from 'reactstrap';
import {ProgressBar} from 'react-bootstrap';

class About extends Component {
  render() {
    return (
      <div className="about-body">
        <div className="about-header">Skills</div>
        <img
          className="image-line"
          src={require('./img/line-breaker.png')}
          alt=""
        />
        <Container>
          <Row>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/speed.png')}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/responsive.png')}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/intuitive.png')}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/dynamic.png')}
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="bullet-title">Speed</div>
            </Col>
            <Col>
              <div className="bullet-title">Responsive</div>
            </Col>
            <Col>
              <div className="bullet-title">Intuitive</div>
            </Col>
            <Col>
              <div className="bullet-title">Dynamic</div>
            </Col>
          </Row>
          <Row>
            <Col> </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <div className="bullet-para">
                Writing Asymptotically fast algorithm is my highest priority.
              </div>
            </Col>
            <Col>
              <div className="bullet-para">
                My software architecture will work to scale in future if
                required.
              </div>
            </Col>
            <Col>
              <div className="bullet-para">
                Strong preference for easy to use, intuitive algorithms.
              </div>
            </Col>
            <Col>
              <div className="bullet-para">
                Drive to learn new hardware and software stacks.
              </div>
            </Col>
          </Row>
        </Container>
        <div className="self-pic">
          <img className="self-icon" src={require('./img/self.jpg')} alt="" />
          <h3>Who's this guy?</h3>
          <p>
            I'm a graduate student at Arizona State University.
            <br />I have serious passion for software
            <br />
            development and providing solutions. <br />
            <span>Let's make something special.</span>
          </p>
        </div>

        <div className="progress-bar-class">
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="info" label="Java" now={19} key={1} />
              <ProgressBar
                striped
                variant="info"
                label="90%"
                now={71}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="success" label="C#" now={19} key={1} />
              <ProgressBar
                striped
                variant="success"
                label="90%"
                now={71}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar
                variant="warning"
                label="Spring Boot"
                now={19}
                key={1}
              />
              <ProgressBar
                striped
                variant="warning"
                label="80%"
                now={61}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="danger" label=".Net" now={19} key={1} />
              <ProgressBar
                striped
                variant="danger"
                label="80%"
                now={61}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="Light" label="SQL" now={19} key={1} />
              <ProgressBar
                striped
                variant="Light"
                label="70%"
                now={51}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="secondary" label="AWS" now={19} key={1} />
              <ProgressBar
                striped
                variant="secondary"
                label="60%"
                now={41}
                key={2}
              />
            </ProgressBar>
          </div>
          <div className="p-bar-col">
            <ProgressBar className="progress-col">
              <ProgressBar variant="dark" label="Js" now={19} key={1} />
              <ProgressBar
                striped
                variant="dark"
                label="55%"
                now={36}
                key={2}
              />
            </ProgressBar>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
