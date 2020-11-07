import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import InternItem from './InternItem'

const InternGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="row">
            {items.map((item) => (
                    <InternItem key={item.id} item={item}></InternItem>
                ))}
        </div>
    )
}



export default InternGrid;