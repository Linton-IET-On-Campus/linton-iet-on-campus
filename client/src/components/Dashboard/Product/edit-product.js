import React, { Component } from 'react';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

export default class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeImageOne = this.onChangeImageOne.bind(this);
    this.onChangeImageTwo = this.onChangeImageTwo.bind(this);
    this.onChangeLabel = this.onChangeLabel.bind(this);
    this.onChangeDiscount = this.onChangeDiscount.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDiscountPrice = this.onChangeDiscountPrice.bind(this);
    this.onChangeOriginalPrice = this.onChangeOriginalPrice.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDetails = this.onChangeDetails.bind(this);
    this.onChangeStock = this.onChangeStock.bind(this);
    this.onChangeSeller = this.onChangeSeller.bind(this);
    this.onChangeWhatsapp = this.onChangeWhatsapp.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        imgOne: '',
        imgTwo: '',
        label: '',
        discount: '',
        title: '',
        discountPrice: '',
        originalPrice: '',
        description: '',
        details: '',
        stock: '',
        seller: '',
        whatsapp: '',
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/'+this.props.match.params.id)
      .then(response => {
        this.setState({
            imgOne: response.data.imgOne,
            imgTwo: response.data.imgTwo,
            label: response.data.label,
            discount: response.data.discount,
            title: response.data.title,
            discountPrice: response.data.discountPrice,
            originalPrice: response.data.originalPrice,
            description: response.data.description,
            details: response.data.details,
            stock: response.data.stock,
            seller: response.data.seller,
            whatsapp: response.data.whatsapp
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


  }

  onChangeImageOne(e) {
    this.setState({
        imgOne: e.target.value
    })
  }

  onChangeImageTwo(e) {
    this.setState({
        imgTwo: e.target.value
    })
  }

  onChangeLabel(e) {
    this.setState({
        label: e.target.value
    })
  }

  onChangeDiscount(e) {
    this.setState({
        discount: e.target.value
    })
  }

  onChangeTitle(e) {
    this.setState({
        title: e.target.value
    })
  }

  onChangeDiscountPrice(e) {
    this.setState({
        discountPrice: e.target.value
    })
  }

  onChangeOriginalPrice(e) {
    this.setState({
        originalPrice: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
        description: e.target.value
    })
  }
 
  onChangeDetails(e) {
    this.setState({
        details: e.target.value
    })
  }

  onChangeStock(e) {
    this.setState({
        stock: e.target.value
    })
  }


  onChangeSeller(e) {
    this.setState({
        seller: e.target.value
    })
  }

  onChangeWhatsapp(e) {
    this.setState({
        whatsapp: e.target.value
    })
  }


  onSubmit(e) {
    e.preventDefault();

    const product = {
        imgOne: this.state.imgOne,
        imgTwo: this.state.imgTwo,
        label: this.state.label,
        discount: this.state.discount,
        title: this.state.title,
        discountPrice: this.state.discountPrice,
        originalPrice: this.state.originalPrice,
        description: this.state.description,
        details: this.state.details,
        stock: this.state.stock,
        seller: this.state.seller,
        whatsapp: this.state.whatsapp
    }

    console.log(product);

    axios.post('http://localhost:5000/products/update/' + this.props.match.params.id, product)
      .then(res => console.log(res.data));

    window.location = '/dashboard/shop/product-list';
  }

  render() {
    return (
        <Styles>
        <br />
        <br />
        <br />
      <Container>
    <div>
      <h3>Edit Product Log</h3>
      <form onSubmit={this.onSubmit}>
      <div className="form-group"> 
          <label>Image One: </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.imgOne}
              onChange={this.onChangeImageOne}
              />
        </div>
        <div className="form-group">
          <label>Image Two: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.imgTwo}
              onChange={this.onChangeImageTwo}
              />
        </div>
        <div className="form-group">
          <label>Label: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.label}
              onChange={this.onChangeLabel}
              />
        </div>
        <div className="form-group">
          <label>Discount: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.discount}
              onChange={this.onChangeDiscount}
              />
        </div>
        <div className="form-group">
          <label>Product Name: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.title}
              onChange={this.onChangeTitle}
              />
        </div>
        <div className="form-group">
          <label>Discount Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.discountPrice}
              onChange={this.onChangeDiscountPrice}
              />
        </div>
        <div className="form-group">
          <label>Original Price: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.originalPrice}
              onChange={this.onChangeOriginalPrice}
              />
        </div>
        <div className="form-group">
          <label>Details: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.details}
              onChange={this.onChangeDetails}
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
          <label>Stock: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.stock}
              onChange={this.onChangeStock}
              />
        </div>
        <div className="form-group">
          <label>Seller: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.seller}
              onChange={this.onChangeSeller}
              />
        </div>
        <div className="form-group">
          <label>Whatsapp: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.whatsapp}
              onChange={this.onChangeWhatsapp}
              />
        </div>
        <div className="form-group">
          <input type="submit" value="Update" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </Container>
      </Styles>

    )
  }
}