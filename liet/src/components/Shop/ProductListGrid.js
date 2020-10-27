import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ProductListItem from './ProductListItem'

const ProductListGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="row">
        {items.map((item) => (
                <ProductListItem key={item.id} item={item}></ProductListItem>
            ))}
    </div>
    )
}



export default ProductListGrid;