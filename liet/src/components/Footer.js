import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Styles = styled.div`
.main-footer {
    color: white;
    background-color: #f38f20;
    padding-top: 3em;
    position: relative;
    bottom: 0;
    width: 100%;
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
              <li>342-420-6969</li>
              <li>Moscow, Russia</li>
              <li>123 Streeet South North</li>
            </ul>
          </Col>
          {/* Column2 */}
          <Col  md={4}>
            <h4>About</h4>
            <ui className="list-unstyled">
            <li>Committee</li>
              <li>Credit</li>
              <li>Graffiti</li>
            </ui>
          </Col>
          {/* Column3 */}
          <Col  md={4}>
            <h4>Opportunity</h4>
            <ui className="list-unstyled">
              <li>Student Helps Student</li>
              <li>Intern/Job</li>
              <li>Collaboration</li>
            </ui>
          </Col>
        </Row>
        <hr />
        <Row>
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Linton IET on Campus | All rights reserved 
          </p>
        </Row>
      </Container>
    </div>
    </Styles>
)