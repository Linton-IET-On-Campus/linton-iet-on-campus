import React from 'react';
import styled from 'styled-components';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Container, Row } from 'react-bootstrap';

const Styles = styled.div`

    .container{
        padding: 30px;
    }

    h2{
        text-align: center;
    }

    .btn-link{
        color: #f38f20 !important;
    }
`;


export const QnA = () => (
    <Styles>

        <Container>
            <h2>General Question</h2>
            <Accordion defaultActiveKey="0">

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                       What is this program about?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        We heard a lot of students complaining about their studies and cannot find helps or the right person to teach them.
                        Hence, this program is intend to help student with their studies.
                        Not only their studies, we also learn new things and share ideas together.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        What is the purpose of this program?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <ul>
                            <li>Discuss and get to know the technology used in specific engineering field </li>
                            <li>Share knowledge of using CAD in different engineering field </li>
                            <li>Learning through sharing and teaching </li>
                            <li>Increase competency of the student </li>
                            <li>Stay up to date with technology </li>

                        </ul>
                    
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        What can I gain from this program?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        By joining this program, you will learn new technology like CAD or 3D drawing with us. 
                        You also get to meet new people and students from different fields in Linton.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        How does the program work?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body>
                        We run our session or activity based on volunteer basics.
                        Anyone can join as member or as group leader to host or teach the idea or technology he/she wants.
                        However, the topic has to be related to the studies.
                        We use WhatsApp and Google Meet for communication and discussion.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>

                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        How do I join this program?
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body>
                        The simplest way is to contact <a href="http://wa.me/601110501375" target="_blank">Hovah</a> and get invited to the group.
                        Or you may join <a href="https://chat.whatsapp.com/GuxLBb2C8sqC8xWzJZjHEu"  target="_blank">Linton IET on Campus Whatsapp gorup</a> for more details.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>


            </Accordion>
        </Container>

    </Styles>

)