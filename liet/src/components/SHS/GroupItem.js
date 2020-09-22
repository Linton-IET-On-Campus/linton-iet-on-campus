import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 

const GroupItem = ({ item }) => {
  return (
    <Card>
    <Card.Img variant="top" src={item.img} width="274px" height="160px"  />
    <Card.Body>
      <Card.Title>{item.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{item.field}</Card.Subtitle>
      <Card.Text>
       {item.description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
        <ListGroupItem><i class="fas fa-user"></i> Person-in-Charge: {item.leader}</ListGroupItem>
        <ListGroupItem><i class="fas fa-calendar-day"></i> Day: {item.day}</ListGroupItem>
        <ListGroupItem><i class="fas fa-clock"></i> Time: {item.time}</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href={item.group-link}>Join Group</Card.Link>
        <Card.Link href={item.google-meet}>Google Meet</Card.Link>
    </Card.Body>
    </Card>
  )
}

export default GroupItem