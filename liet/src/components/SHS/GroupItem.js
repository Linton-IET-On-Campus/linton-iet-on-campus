import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'; 
import ListGroupItem from 'react-bootstrap/ListGroupItem'; 

const GroupItem = ({ item }) => {
  return (
    <Card style={{ width: '18rem' }}  class="col-md-4 col-sm-6 equal-height">
        <Card.Img variant="top" src={item.img} width="274px" height="160px"  />
        <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.field}</Card.Subtitle>
            <Card.Text>
                 {item.description}
            </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
            <ListGroupItem><i class="fas fa-user"></i> {item.leader}</ListGroupItem>
            <ListGroupItem><i class="fas fa-calendar-day"></i> {item.day}</ListGroupItem>
            <ListGroupItem><i class="fas fa-clock"></i> {item.time}</ListGroupItem>
        </ListGroup>
        <Card.Footer>
            <Card.Link href={item.link}>Join Group</Card.Link>
            <Card.Link href={item.meet}>Google Meet</Card.Link>
        </Card.Footer>
    </Card>
  )
}

export default GroupItem