import React from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = ({ item }) => {
  return (
    
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#">
                    <img class="pic-1" src={item.imgOne} />
                    <img class="pic-2" src={item.imgTwo} />
                </a>
                <span class="product-new-label">{item.label}</span>
                <span class="product-discount-label">{item.discount}</span>
            </div>
        
            <div class="product-content">
                <h3 class="title"><a href="#">{item.title}</a></h3>
                <div class="price">{item.discountPrice}
                    <span>{item.originalPrice}</span>
                </div>
                <Link className="btn btn-warning" key={item._id} to={"/product/" + item._id}>View Product</Link>
            </div>
        </div>
    </div>

  )
}

export default ProductListItem