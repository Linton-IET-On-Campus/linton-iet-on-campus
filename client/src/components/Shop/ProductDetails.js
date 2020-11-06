import React, { Component } from 'react';
import { withRouter } from 'react-router';

import styled from 'styled-components';
import axios from "axios";

const Styles = styled.div`
.container{
    margin-top: 100px;
    margin-bottom: 100px;

}

img {
  max-width: 80%; 
  max-height: 400px;
}

.preview {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }
  @media screen and (max-width: 996px) {
    .preview {
      margin-bottom: 20px; } }

.preview-pic {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.preview-thumbnail.nav-tabs {
  border: none;
  margin-top: 15px; }
  .preview-thumbnail.nav-tabs li {
    width: 18%;
    margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
      max-width: 100%;
      display: block; }
    .preview-thumbnail.nav-tabs li a {
      padding: 0;
      margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
      margin-right: 0; }

.tab-content {
  overflow: hidden; }
  .tab-content img {
    width: 100%;
    -webkit-animation-name: opacity;
            animation-name: opacity;
    -webkit-animation-duration: .3s;
            animation-duration: .3s; }

.card {
  margin-top: 50px;
  background: #eee;
  padding: 3em;
  line-height: 1.5em; }

@media screen and (min-width: 997px) {
  .wrapper {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex; } }

.details {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column; }

.colors {
  -webkit-box-flex: 1;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1; }

.product-title, .price, .sizes, .colors {
  text-transform: UPPERCASE;
  font-weight: bold; }

.checked, .price span {
  color: #ff9f1a; }

.product-title, .rating, .product-description, .price, .vote, .sizes {
  margin-bottom: 15px; }

.product-title {
  margin-top: 0; }

.size {
  margin-right: 10px; }
  .size:first-of-type {
    margin-left: 40px; }

.color {
  display: inline-block;
  vertical-align: middle;
  margin-right: 10px;
  height: 2em;
  width: 2em;
  border-radius: 2px; }
  .color:first-of-type {
    margin-left: 20px; }

.add-to-cart, .like {
  background: #ff9f1a;
  padding: 1.2em 1.5em;
  border: none;
  text-transform: UPPERCASE;
  font-weight: bold;
  color: #fff;
  -webkit-transition: background .3s ease;
          transition: background .3s ease; }
  .add-to-cart:hover, .like:hover {
    background: #b36800;
    color: #fff; }

.not-available {
  text-align: center;
  line-height: 2em; }
  .not-available:before {
    font-family: fontawesome;
    content: "\f00d";
    color: #fff; }

.orange {
  background: #ff9f1a; }

.green {
  background: #85ad00; }

.blue {
  background: #0076ad; }

.tooltip-inner {
  padding: 1.3em; }

@-webkit-keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }

@keyframes opacity {
  0% {
    opacity: 0;
    -webkit-transform: scale(3);
            transform: scale(3); }
  100% {
    opacity: 1;
    -webkit-transform: scale(1);
            transform: scale(1); } }


`;
 class ProductDetails extends Component  {

  constructor(props) {
    super(props);

    this.state = {
        imgOne: '',
        imgTwo: '',
        label: '',
        discount: '',
        title: '',
        discountPrice: '',
        originalPrice: '',
        details: '',
        description: '',
        stock: '',
        seller: '',
        whatsapp: ''
    }
  }

   componentDidMount() {
    axios.get('http://localhost:5000/products/' + this.props.match.params.id )
      .then(response => {
        this.setState({
            imgOne: response.data.imgOne,
            imgTwo: response.data.imgTwo,
            label: response.data.label,
            discount: response.data.discount,
            title: response.data.title,
            discountPrice: response.data.discountPrice,
            originalPrice: response.data.originalPrice,
            details: response.data.details,
            description: response.data.description,
            stock: response.data.stock,
            seller: response.data.seller,
            whatsapp: response.data.whatsapp,
        })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }


   render() {
    return(
    <Styles>
    <div class="container">
		<div class="card">
			<div class="container-fliud">
				<div class="wrapper row">
					<div class="preview col-md-6">
						
						<div class="preview-pic tab-content">
						  <div class="tab-pane active" id="pic-1"><img src={this.state.imgOne} /></div>
						  <div class="tab-pane" id="pic-2"><img src={this.state.imgTwo} /></div>
						 
						</div>
						<ul class="preview-thumbnail nav nav-tabs">
						  <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src={this.state.imgOne} /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src={this.state.imgTwo} /></a></li>
				
						</ul>
						
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{this.state.title}</h3>
						<div class="rating">
						
							<span class="review-no"><strong>Seller: {this.state.seller}</strong></span>
						</div>
						<p class="product-description">{this.state.description}</p>
						<h4 class="price">current price: <span>{this.state.discountPrice}</span></h4>
            <h5 class="sizes">Stock: 
							<span class="size" data-toggle="tooltip">{this.state.stock}</span>
						</h5>						
            <h5 class="sizes">detail:
							<span class="size" data-toggle="tooltip">{this.state.details}</span>
						</h5>
						<div class="action">
							<a href={this.state.whatsapp} class="add-to-cart btn btn-default" type="button">📞 Contact Seller</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
    </Styles>
    )
   }
}

export default withRouter(ProductDetails)
