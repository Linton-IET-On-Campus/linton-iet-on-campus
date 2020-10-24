import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

export default class CreateSHS extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeField = this.onChangeField.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeLeader = this.onChangeLeader.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLink = this.onChangeLink.bind(this);
    this.onChangeMeet = this.onChangeMeet.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      img: '',
      title: '',
      field: '',
      description: '',
      leader: '',
      day: '',
      time: '',
      link: '',
      meet: '',
    }
  }



  onChangeImage(e) {
    this.setState({
      img: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
        title: e.target.value
    })
  }

  onChangeField(e) {
    this.setState({
        field: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeLeader(e) {
    this.setState({
        leader: e.target.value
    })
  }

  onChangeDay(e) {
    this.setState({
        day: e.target.value
    })
  }

  onChangeTime(e) {
    this.setState({
        time: e.target.value
    })
  }

  onChangeMeet(e) {
    this.setState({
        meet: e.target.value
    })
  }

  onChangeLink(e) {
    this.setState({
        link: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const shs = {
      img: this.state.img,
      title: this.state.title,
      field: this.state.field,
      description: this.state.description,
      leader: this.state.leader,
      day: this.state.day,
      time: this.state.time,
      link: this.state.link,
      meet: this.state.meet,
    }

    console.log(shs);

    axios.post('http://localhost:5000/student-helps-student/add', shs)
      .then(res => console.log(res.data));

    window.location = '/dashboard/add-student-helps-student';
  }

  render() {
    return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Add Student Helps Student Group</h3>
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
          <label>Title: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
          <label>Field: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.field}
              onChange={this.onChangeField}
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
          <label>Leader: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.leader}
              onChange={this.onChangeLeader}
              />
        </div>
        <div className="form-group">
          <label>Day: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.day}
              onChange={this.onChangeDay}
              />
        </div>
        <div className="form-group">
          <label>Time: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.time}
              onChange={this.onChangeTime}
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
          <label>Meet: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.meet}
              onChange={this.onChangeMeet}
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