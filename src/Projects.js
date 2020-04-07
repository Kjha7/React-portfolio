import React, {Component} from 'react';
import './App.css';
import './CSS/Projects.css';
import {Container, Row, Col} from 'reactstrap';

class Projects extends Component {
  render() {
    return (
      <div className="proj-body">
        <div className="proj-header">Recent Works</div>
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
                src={require('./img/project.png')}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/project.png')}
                alt=""
              />
            </Col>
            <Col>
              <img
                className="bullet-icon"
                src={require('./img/project.png')}
                alt=""
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Inventory Managment System</h5>
            </Col>
            <Col>
              <h5>Donation Camp System</h5>
            </Col>
            <Col>
              <h5>Employee Feedback System</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="git-link">
                <a href="https://github.com/Kjha7/Inventory-Management-System">
                  Github Link
                </a>
              </div>
            </Col>
            <Col>
              <div className="git-link">
                <a href="https://github.com/Kjha7/DonationCamp">Github Link</a>
              </div>
            </Col>
            <Col>
              <div className="git-link">
                <a href="https://github.com/ishansarangi/EmployeeSurveyAndFeedbackPortal">
                  Github Link
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
