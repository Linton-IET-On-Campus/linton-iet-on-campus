import React, { Component } from 'react';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

export default class CreateProduct extends Component {
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

//   componentDidMount() {
//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           this.setState({
//             users: response.data.map(user => user.username),
//             username: response.data[0].username
//           })
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   }

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

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/dashboard/shop/create-product';
  }

  render() {
    return (
        <Styles>
        <br />
        <br />
        <br />
      <Container>
    <div>
      <h3>Create New Product</h3>
      <form onSubmit={this.onSubmit}>
        {/* <div className="form-group"> 
          <label>Username: </label>
          <select ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
              {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              }
          </select>
        </div> */}
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
          <label>Description: </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
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
          <input type="submit" value="Create Product Log" className="btn btn-primary" />
        </div>
      </form>
    </div>
    </Container>
      </Styles>

    )
  }
}