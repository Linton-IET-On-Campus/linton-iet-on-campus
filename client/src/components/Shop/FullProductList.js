
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Styles = styled.div`

body{
	font-family: Arial;
	font-size: 18px;
	background-color: white;
	margin: 0;
}

.header{
	background-image: linear-gradient(to top right, rgb(241, 148, 138, 0.8), rgb(248, 196, 113, 0.8)),url('https://www.uowmkdu.edu.my/wp-content/uploads/2020/06/parcel-paper-cartons-with-shopping-cart-logo-trolley-laptop-keyboard_9635-3215.jpg');
	height: 600px;
	padding: 20px;
	background-size: 100% 700px;
}

.header h1{
    text-shadow: 5px 5px #fff;
	font-size: 70px;
	color: black;
	margin-left: 20px;
	text-align: center;
}

.header h2{
    text-shadow: 5px 5px #fff;
	font-size: 50px;
	color: black;
	margin-left: 20px;
	text-align: center;
}


.header p{
	font-size: 30px;
	color: black;
	margin-left: 80px;
	text-align: left;
}

.header ol{
	font-size: 20px;
    color: black;
    margin-left: 50px;
	text-align: left;
}

.header h1{
	font-size: 70px;
	color: black;
	padding-top: 50px;
    text-align: center;
   
}

.container{
    height:auto;
	margin-top: 30px;
	margin-bottom: 30px;

}

@media only screen and (max-width: 600px){
    .header p{
        font-size: 20px;
       
    }

    .header h1{
        font-size: 50px;
       
    }
    
    .header h2{
        font-size: 30px;
       
    }

    .header ol{
        font-size: 14px;
        margin-left: 20px;
    }
}

/********************* shopping Demo-1 **********************/
.product-grid{font-family:Raleway,sans-serif;text-align:center;padding:0 0 72px;border:1px solid rgba(0,0,0,.1);overflow:hidden;position:relative;z-index:1}
.product-grid .product-image{position:relative;transition:all .3s ease 0s}
.product-grid .product-image a{display:block}
.product-grid .product-image img{width:100%;height:auto}
.product-grid .pic-1{opacity:1;transition:all .3s ease-out 0s}
.product-grid:hover .pic-1{opacity:1}
.product-grid .pic-2{opacity:0;position:absolute;top:0;left:0;transition:all .3s ease-out 0s}
.product-grid:hover .pic-2{opacity:1}
.product-grid .social{width:150px;padding:0;margin:0;list-style:none;opacity:0;transform:translateY(-50%) translateX(-50%);position:absolute;top:60%;left:50%;z-index:1;transition:all .3s ease 0s}
.product-grid:hover .social{opacity:1;top:50%}
.product-grid .social li{display:inline-block}
.product-grid .social li a{color:#fff;background-color:#333;font-size:16px;line-height:40px;text-align:center;height:40px;width:40px;margin:0 2px;display:block;position:relative;transition:all .3s ease-in-out}
.product-grid .social li a:hover{color:#fff;background-color:#ef5777}
.product-grid .social li a:after,.product-grid .social li a:before{content:attr(data-tip);color:#fff;background-color:#000;font-size:12px;letter-spacing:1px;line-height:20px;padding:1px 5px;white-space:nowrap;opacity:0;transform:translateX(-50%);position:absolute;left:50%;top:-30px}
.product-grid .social li a:after{content:'';height:15px;width:15px;border-radius:0;transform:translateX(-50%) rotate(45deg);top:-20px;z-index:-1}
.product-grid .social li a:hover:after,.product-grid .social li a:hover:before{opacity:1}
.product-grid .product-discount-label,.product-grid .product-new-label{color:#fff;background-color:#ef5777;font-size:12px;text-transform:uppercase;padding:2px 7px;display:block;position:absolute;top:10px;left:0}
.product-grid .product-discount-label{background-color:#333;left:auto;right:0}
.product-grid .rating{color:#FFD200;font-size:12px;padding:12px 0 0;margin:0;list-style:none;position:relative;z-index:-1}
.product-grid .rating li.disable{color:rgba(0,0,0,.2)}
.product-grid .product-content{background-color:#fff;text-align:center;padding:12px 0;margin:0 auto;position:absolute;left:0;right:0;bottom:-27px;z-index:1;transition:all .3s}
.product-grid:hover .product-content{bottom:0}
.product-grid .title{font-size:13px;font-weight:400;letter-spacing:.5px;text-transform:capitalize;margin:0 0 10px;transition:all .3s ease 0s}
.product-grid .title a{color:#828282}
.product-grid .title a:hover,.product-grid:hover .title a{color:#ef5777}
.product-grid .price{color:#333;font-size:17px;font-family:Montserrat,sans-serif;font-weight:700;letter-spacing:.6px;margin-bottom:8px;text-align:center;transition:all .3s}
.product-grid .price span{color:#999;font-size:13px;font-weight:400;text-decoration:line-through;margin-left:3px;display:inline-block}
.product-grid .add-to-cart{color:#000;font-size:13px;font-weight:600}
@media only screen and (max-width:990px){.product-grid{margin-bottom:30px}
}

.menu ul li.icon-mobile {
    background-image: url("http://www.entypo.com/images//mobile.svg");
  }

  .pic-1{
    width: 300px !important;
    height:  350px !important;
  }
  .pic-2{
    width: 300px !important;
    height:  350px !important;
  }
 

`;

const Product = props => (

<div class="col-md-3 col-sm-6">
    <div class="product-grid">
        <div class="product-image">
            <a href="#">
                <img class="pic-1" src={props.product.imgOne} />
                <img class="pic-2" src={props.product.imgTwo} />
            </a>
            <span class="product-new-label">{props.product.label}</span>
            <span class="product-discount-label">{props.product.discount}</span>
        </div>
    
        <div class="product-content">
            <h3 class="title"><a href="#">{props.product.title}</a></h3>
            <div class="price">{props.product.discountPrice}
                <span>{props.product.originalPrice}</span>
            </div>
            <Link to={"/product/"+props.product._id} className="btn btn-warning" >View Product</Link>    
        </div>
    </div>
</div>

)
  

    
export default class FullProductList extends Component {

    constructor(props) {
        super(props);
    
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


      productList() {
        return this.state.products.map(currentproduct => {
          return <Product product={currentproduct} key={currentproduct._id}/>;
        })

        
      }

      render() {
        return (
            <Styles>

            <body>
                <div class="header">
                    <h1><u>LIET Shop</u></h1>
                    <h2>Second Hand · Accessories · Furniture </h2>
                    <br/>
                    <p><u>Term and Condition</u></p>
                    <ol>
                        <li>We only provide online platform for you to post your product.</li>
                        <li>We will not meddle and are not responsible for your deals with buyers.</li>
                        <li>We do not provide delivery. You have to send the item to the buyer yourself.</li>
                        <li>We will charge you RM 3 if you want us to help you send the item within Linton University College area. </li>
                        <li><strong>Take note, we only help seller delivering item within Linton University College area only</strong>.</li>

                    </ol>

                </div>


            <div class="container">
                <div class="row">
                    { this.productList() }
                </div>
            </div>

            </body>
        </Styles>

        )
    }
  }
  