import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import MemoryItem from './MemoryItem'

const MemoryGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="container">
        {items.map((item) => (
                <MemoryItem key={item.id} item={item}></MemoryItem>
            ))}
    </div>
    )
}



export default MemoryGrid;