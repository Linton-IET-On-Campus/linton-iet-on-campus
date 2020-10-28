import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import OurTeamItem from './OurTeamItem'

const OurTeamGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="row">
        {items.map((item) => (
                <OurTeamItem key={item.id} item={item}></OurTeamItem>
            ))}
    </div>
    )
}



export default OurTeamGrid;