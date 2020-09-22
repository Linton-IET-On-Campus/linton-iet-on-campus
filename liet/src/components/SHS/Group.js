import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import GroupGrid from './GroupGrid';
import { Container } from 'react-bootstrap';

const Styles = styled.div`

    h2{
        text-align: center;
    }

    .container {
        display: block;
        width: 100%;
      }
      
      .card { 
        border: 1px solid black;
        margin: 1px;
        padding: 10px 3px;
        /*setting width for each and every card element as well as -10px for removing the margin width for 5 elements*/
      }
      
      
      /*first element*/
      
      .container .card:first-child {
        margin-left: 0;
      }
      
      
      /*last element of the first row*/
      
      .container .card:nth-child(5n) {
        margin-right: 0;
      }
      
      
      /*first-element of the 2nd row*/
      
      .container .card:nth-child(5n+1) {
        margin-left: 0;
      }
      
      
      /*last element*/
      
      .container .card:last-child {
        margin-right: 0;
      }
 
`;


export const Group = () => {

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchItems = async () => {
      const  result = await axios(
          `https://linton-iet-on-campus.github.io/linton-iet-on-campus/backend/data/join-group/index.json`
        )
        console.log(result.data)

        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems()
    },[])

  return(
    <Styles>

        <Container>
            <h2 class="section-title h1">Studies Group</h2>
             <GroupGrid isLoading={isLoading} items={items}/>
        </Container>



    </Styles>
  )

}