import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import GroupItem from './GroupItem'
import CardDeck from 'react-bootstrap/Card';

const GroupGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
       
        <CardDeck>
            {items.map((item) => (
                <GroupItem key={item.id} item={item}></GroupItem>
            ))}
       </CardDeck>

    )
}



export default GroupGrid;