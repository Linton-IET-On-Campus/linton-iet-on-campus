import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import ChoosePlanItem from './ChoosePlanItem'

const ChoosePlanGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="row no-gutters">
        {items.map((item) => (
                <ChoosePlanItem key={item.id} item={item}></ChoosePlanItem>
            ))}
        </div>

    )
}

export default ChoosePlanGrid;