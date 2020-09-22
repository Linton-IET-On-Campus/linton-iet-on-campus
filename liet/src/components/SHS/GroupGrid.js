import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import GroupItem from './GroupItem'
import CardDeck from 'react-bootstrap/Card';
import { CardColumns } from 'react-bootstrap';

const GroupGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
  
        <CardColumns>
            {items.map((item) => (
                <GroupItem key={item.id} item={item}></GroupItem>
            ))}
       </CardColumns>
    
    )
}



export default GroupGrid;