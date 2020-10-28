import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

const Group = props => (

  <tr>

    <td>{props.group.img}</td>
    <td>{props.group.title}</td>
    <td>{props.group.field}</td>
    <td>{props.group.description}</td>
    <td>{props.group.leader}</td>
    <td>{props.group.day}</td>
    <td>{props.group.time}</td>
    <td>{props.group.link}</td>
    <td>{props.group.meet}</td>

    <td>
      <Link to={"/dashboard/student-helps-student/edit/"+props.group._id}>edit</Link> | <a href="#" onClick={() => { props.deleteGroup(props.group._id) }}>delete</a>
    </td>
  </tr>
)

export default class GroupsList extends Component {
  constructor(props) {
    super(props);

    this.deleteGroup = this.deleteGroup.bind(this)

    this.state = {groups: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/student-helps-student/')
      .then(response => {
        this.setState({ groups: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteGroup(id) {
    axios.delete('http://localhost:5000/student-helps-student/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      groups: this.state.groups.filter(el => el._id !== id)
    })
  }

  groupList() {
    return this.state.groups.map(currentgroup => {
      return <Group group={currentgroup} deleteGroup={this.deleteGroup} key={currentgroup._id}/>;
    })
  }

  render() {
    return (
      <Styles>
      <br />
      <br />
      <br />
    <Container>
      
    <Link className="btn btn-primary" to="/dashboard/add-student-helps-student">➕ ADD GROUP</Link>
      <br /> <br />
      <div>
        <h3>List of the Groups</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Title</th>
              <th>Field</th>
              <th>Description</th>
              <th>Leader</th>
              <th>Day</th>
              <th>Time</th>
              <th>Link</th>
              <th>Meet</th>
            </tr>
          </thead>
          <tbody>
            { this.groupList() }
          </tbody>
        </table>
      </div>

      </Container>
      </Styles>

    )
  }
}