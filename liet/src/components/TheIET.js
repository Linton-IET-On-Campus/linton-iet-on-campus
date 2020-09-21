import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';

const Styles = styled.div`



    h2{
        text-align: center;
        
    }

    h3{
        text-align: center;
        text-decoration: underline;
    }
    
    p{
        text-align: center;
    }

    .accordion{
        margin: 0 auto !important;
        text-align: center !important;
    }

    .btn-link{
        color: #f38f20 !important;
    }


`;

export const TheIET = (props)  => (
    <Styles>
        <Container>
                <h2>About the IET</h2>
        </Container>
        <hr />
        <Container className="better">
                <h3 class="work">Working to engineer a better world</h3>
                <p>We are the IET and we inspire, inform and influence the global engineering community to engineer a better world. As a diverse home across engineering and technology, we share knowledge that helps make better sense of the world in order to solve the challenges that matter. It’s why we are uniquely placed to champion engineering.</p>
         </Container>
         <hr />
         <Container>
            <h3>Vision and Strategy</h3>
            <p>
                Our aims and aspirations and how we intend to achieve them. 
                <br></br>
                <Button variant="info">Find out more</Button>{' '}

            </p>
        </Container>    
        <hr />
        <Container>  
            <h3>Our Values</h3>
            <p>Our aims and aspirations and how we intend to achieve them.  </p>
            <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0" class="values">
      Integrity
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Operate professionally and ethically to gain trust.
Be open and honest with each other.
Respect everyone and value each other’s contribution.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1"  class="values">
      Excellence
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Work towards the highest level of service and satisfaction.
Use agile methods and seek innovative solutions to add value.
Continually improve and adopt best practices.</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="2"  class="values">
      Teamwork
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="2">
      <Card.Body>Encourage staff and volunteers to work together.
Recognise the value of talented individuals working in teams.
Be collaborative and partner with other organisations.</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
        </Container>

    
   </Styles>
  
)