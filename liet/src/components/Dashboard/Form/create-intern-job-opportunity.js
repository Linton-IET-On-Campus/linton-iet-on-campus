import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

export default class CreateIntern extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangePosition = this.onChangePosition.bind(this);
    this.onChangeSalary = this.onChangeSalary.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      img: '',
      name: '',
      position: '',
      salary: '',
      location: '',
      duration: '',
      description: '',
      link: '',

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

  onChangePosition(e) {
    this.setState({
        position: e.target.value
    })
  }

  onChangeSalary(e) {
    this.setState({
        salary: e.target.value
    })
  }

  onChangeLocation(e) {
    this.setState({
        location: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
        duration: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
        link: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const intern = {
      img: this.state.img,
      name: this.state.name,
      position: this.state.position,
      salary: this.state.salary,
      location: this.state.location,
      duration: this.state.duration,
      description: this.state.description,
      link: this.state.link
    }

    console.log(intern);

    axios.post('http://localhost:5000/intern-job-opportunity/add', intern)
      .then(res => console.log(res.data));

    window.location = '/dashboard/add-intern-job-opportunity';
  }

  render() {
    return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Add Intern or Job</h3>
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
          <label>Company Name: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}
              />
        </div>
        <div className="form-group">
          <label>Position: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.position}
              onChange={this.onChangePosition}
              />
        </div>
        <div className="form-group">
          <label>Salary: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.salary}
              onChange={this.onChangeSalary}
              />
        </div>
        <div className="form-group">
          <label>Location: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Duration: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
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
          <label>Link: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.link}
              onChange={this.onChangeLink}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
    </Container>
    )
  }
}