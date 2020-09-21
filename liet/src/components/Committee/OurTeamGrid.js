import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import WhyJoinUsItem from './WhyJoinUsItem'

const OurTeamGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
    <div class="row our-offer-items less-carousel">
            {items.map((item) => (
                <WhyJoinUsItem key={item.id} item={item}></WhyJoinUsItem>
            ))}
    </div>
    )
}



export default OurTeamGrid;