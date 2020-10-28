import React, { Component } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap';

export default class CreateBlog extends Component {
  constructor(props) {
    super(props);

    this.onChangeImage = this.onChangeImage.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSlug = this.onChangeSlug.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeSummary = this.onChangeSummary.bind(this);
    this.onChangeArticle = this.onChangeArticle.bind(this);
    this.onChangePostedOn = this.onChangePostedOn.bind(this);

    this.onSubmit = this.onSubmit.bind(this);


    this.state = {
      img: '',
      title: '',
      slug: '', 
      author: '', 
      summary: '',
      article: '',
      postedOn: '',
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

  onChangeSlug(e) {
    this.setState({
        slug: e.target.value
    })
  }

  onChangeAuthor(e) {
    this.setState({
        author: e.target.value
    })
  }  
  
  onChangeSummary(e) {
    this.setState({
        summary: e.target.value
    })
  }  
  
  onChangeArticle(e) {
    this.setState({
        article: e.target.value
    })
  }  
  
  onChangePostedOn(e) {
    this.setState({
        postedOn: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const blog = {
        img: this.state.img,
        title: this.state.title,
        slug: this.state.slug,
        author: this.state.author,
        summary: this.state.summary,
        article: this.state.article,
        postedOn: this.state.postedOn,
   
    }

    console.log(blog);

    axios.post('http://localhost:5000/blog/add', blog)
      .then(res => console.log(res.data));

    window.location = '/dashboard/add-blog';
  }

  render() {
    return (
    <Container>
      <br></br>
      <br></br>
      <br></br>
      <h3>Add Blog</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>Image: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.image}
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
          <label>Slug: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.slug}
              onChange={this.onChangeSlug}
              />
        </div>
        <div className="form-group"> 
          <label>Author: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.author}
              onChange={this.onChangeAuthor}
              />
        </div>
        <div className="form-group"> 
          <label>Summary: </label>
          <textarea  type="text"
              required
              className="form-control"
              value={this.state.summary}
              onChange={this.onChangeSummary}
              />
        </div>
        <div className="form-group"> 
          <label>Article: </label>
          <textarea  type="text"
              required
              className="form-control"
              value={this.state.article}
              onChange={this.onChangeArticle}
              />
        </div>
        <div className="form-group"> 
          <label>Posted On: </label>
          <input  type="date"
              required
              className="form-control"
              value={this.state.postedOn}
              onChange={this.onChangePostedOn}
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