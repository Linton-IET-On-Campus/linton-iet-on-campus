import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

const Contact = props => (
  <tr>
    <td>{props.contact.email}</td>
    <td>{props.contact.phone}</td>
    <td>{props.contact.comment}</td>
    <td>
     <a href="#" onClick={() => { props.deleteContact(props.contact._id) }}>delete</a>
    </td>
  </tr>
)

export default class ContactsList extends Component {
  constructor(props) {
    super(props);

    this.deleteContact = this.deleteContact.bind(this)

    this.state = {contacts: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/contacts/')
      .then(response => {
        this.setState({ contacts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteContact(id) {
    axios.delete('http://localhost:5000/contacts/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      contacts: this.state.contacts.filter(el => el._id !== id)
    })
  }

  contactList() {
    return this.state.contacts.map(currentcontact => {
      return <Contact contact={currentcontact} deleteContact={this.deleteContact} key={currentcontact._id}/>;
    })
  }

  render() {
    return (
        <Styles>
            <br />
            <br />
            <br />
      <Container>

        <h3>Who have contacted us</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Email</th>
              <th>Phone</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            { this.contactList() }
          </tbody>
        </table>
      </Container></Styles>
    )
  }
}