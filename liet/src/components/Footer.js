import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import 'font-awesome/css/font-awesome.min.css';

const Styles = styled.div`
.main-footer {
    color: white;
    background-color: #f38f20;
    padding-top: 3em;
    position: relative;
    bottom: 0;
    width: 100%;
  }

  a{
      color: #fff;
  }

  a:hover{
      color:#FEC617; 
  }
`;

export const Footer = () => (
    <Styles>
       <div className="main-footer">
      <Container>
        <Row>
          {/* Column1 */}
          <Col md={4}>
            <h4>Linton IET on Campus</h4>
            <ul className="list-unstyled">
              <li><a href="https://www.facebook.com/LintonIETOnCampus" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a> <a href="https://www.facebook.com/LintonIETOnCampus" target="_blank"><i className="fas fa-envelope-square  fa-2x"></i></a></li>
              <li>Empowered by LUC students</li>
              <li>Since 2020</li>

            </ul>
          </Col>
          {/* Column2 */}
          <Col  md={4}>
            <h4>About</h4>
            <ui className="list-unstyled">
            <li>Committee</li>
              <li>Credits</li>
              <li>Club Fee</li>
            </ui>
          </Col>
          {/* Column3 */}
          <Col  md={4}>
            <h4>Opportunity</h4>
            <ui className="list-unstyled">
              <li>Graffiti</li>
              <li>Student Helps Student</li>
              <li>Intern/Job</li>
              <li>Collaboration</li>
            </ui>
          </Col>
        </Row>
        <hr />
        <Row>
          <p className="col-sm pull-left">
            &copy;{new Date().getFullYear()} Linton IET on Campus | All rights reserved 
          </p>
          <p className="col-sm pull-right">
            Build With <a href="https://reactjs.org/" target="_blank"><i className="fab fa-react fa-spin fa-2x	"></i></a> <a href="https://nodejs.org/en/" target="_blank"><i class="fab fa-node fa-2x	"></i></a>
          </p>
        </Row>
      </Container>
    </div>
    </Styles>
)