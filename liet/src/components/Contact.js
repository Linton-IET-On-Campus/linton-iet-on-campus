import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`

body{
	font-family: Arial;
	font-size: 12px;
	background-color: white;
  height: 600px;
  padding-top: 100px;
	}

	h1{
	font-size: 20px;
	text-align: center;
	}

	.container{
	background-color: #f2f2f2;
	width: 70%;
	padding: 20px;
	margin-left: auto;
	margin-right: auto;
	}

	label{
	font-size: 20px;
	}


`;

export default class Contact extends Component {

    constructor(props) {
        super(props);
    
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeComment = this.onChangeComment.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
          email: '',
          phone: '',
          comment: '',
        
        }
      }
    
    
    
      onChangeEmail(e) {
        this.setState({
          email: e.target.value
        })
      }
    
      onChangePhone(e) {
        this.setState({
          phone: e.target.value
        })
      }
    
      onChangeComment(e) {
        this.setState({
          comment: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
    
        const contact = {
          email: this.state.email,
          phone: this.state.phone,
          comment: this.state.comment,
        }
    
        console.log(contact);
    
        axios.post('http://localhost:5000/contacts/add', contact)
          .then(res => console.log(res.data));
    
        window.location = '/about/collaboration';
      }

    render() {
        return (
    <Styles>
        <body>
            <h1>Contact Us</h1>
                <div class="container">
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Email: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
              />
        </div>
        <div className="form-group"> 
          <label>Phone Number: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.phone}
              onChange={this.onChangePhone}
              />
        </div>
        <div className="form-group">
          <label>Comment: </label>
          <textarea 
              type="text" 
              className="form-control"
              value={this.state.comment}
              onChange={this.onChangeComment}
              />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
        </div>
      </form>
                </div>
        </body>
  </Styles>
    )
    }
}