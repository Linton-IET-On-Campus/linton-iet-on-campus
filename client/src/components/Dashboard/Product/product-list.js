import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {  Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`

`;

const Product = props => (

  <tr>
    
    <td>{props.product.imgOne}</td>
    <td>{props.product.imgTwo}</td>
    <td>{props.product.label}</td>
    <td>{props.product.discount}</td>
    <td>{props.product.title}</td>
    <td>{props.product.discountPrice}</td>
    <td>{props.product.originalPrice}</td>
    <td>{props.product.description}</td>
    <td>{props.product.details}</td>
    <td>{props.product.stock}</td>
    <td>{props.product.seller}</td>
    <td>{props.product.whatsapp}</td>

    <td>
      <Link to={"/dashboard/shop/edit/"+props.product._id}>edit</Link> | <a href="#" onClick={() => { props.deleteProduct(props.product._id) }}>delete</a>
    </td>
  </tr>
)

export default class ProductsList extends Component {
  constructor(props) {
    super(props);

    this.deleteProduct = this.deleteProduct.bind(this)

    this.state = {products: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/products/')
      .then(response => {
        this.setState({ products: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      products: this.state.products.filter(el => el._id !== id)
    })
  }

  productList() {
    return this.state.products.map(currentproduct => {
      return <Product product={currentproduct} deleteProduct={this.deleteProduct} key={currentproduct._id}/>;
    })
  }

  render() {
    return (
      <Styles>
      <br />
      <br />
      <br />
    <Container>
      
    <Link className="btn btn-primary" to="/dashboard/shop/create-product">➕ ADD PRODUCT</Link>
      <br /> <br />
      <div>
        <h3>List of the Products</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>First Image</th>
              <th>Second Image</th>
              <th>Label</th>
              <th>Discount</th>
              <th>Title</th>
              <th>Discount Price</th>
              <th>Original Price</th>
              <th>Description</th>
              <th>Details</th>
              <th>Stock</th>
              <th>Seller</th>
              <th>WhatsApp</th>

            </tr>
          </thead>
          <tbody>
            { this.productList() }
          </tbody>
        </table>
      </div>

      </Container>
      </Styles>

    )
  }
}