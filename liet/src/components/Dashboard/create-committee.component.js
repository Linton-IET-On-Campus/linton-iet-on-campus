import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

export default class CreateCommitteee extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      img: '',
      name: '',
      role: '',
      description: '',
      whatsapp: '',
      email: '',
    }
  }



  onChangeImage(e) {
    this.setState({
      img: e.target.value
    })
  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeRole(e) {
    this.setState({
      role: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeWhatsapp(e) {
    this.setState({
      whatsapp: e.target.value
    })
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const committee = {
      img: this.state.img,
      name: this.state.name,
      role: this.state.role,
      description: this.state.description,
      whatsapp: this.state.whatsapp,
      email: this.state.email
    }

    console.log(committee);

    axios.post('http://localhost:5000/committees/add', committee)
      .then(res => console.log(res.data));

    window.location = '/committees/add';
  }

  render() {
    return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Add new committee</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Image: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.img}
              onChange={this.onChangeImage}
              />
        </div>
        <div className="form-group"> 
          <label>Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label>Role: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.role}
              onChange={this.onChangeRole}
              />
        </div>
        <div className="form-group">
          <label>Description: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>WhatsApp: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.whatsapp}
              onChange={this.onChangeWhatsapp}
              />
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Add Committee" className="btn btn-primary" />
        </div>
      </form>
    </Container>
    )
  }
}