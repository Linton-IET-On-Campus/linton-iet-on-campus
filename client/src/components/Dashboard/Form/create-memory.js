import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

export default class CreateMemory extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeQuote = this.onChangeQuote.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      quote: '',
    }
  }


  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeQuote(e) {
    this.setState({
        quote: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const memory = {
      name: this.state.name,
      quote: this.state.quote,
    }

    console.log(memory);

    axios.post('http://localhost:5000/memory-wall/add', memory)
      .then(res => console.log(res.data));

    window.location = '/dashboard/add-memory';
  }

  render() {
    return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Add Memory</h3>
      <form onSubmit={this.onSubmit}>
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
          <label>Quote: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.quote}
              onChange={this.onChangeQuote}
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