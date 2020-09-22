import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import GroupGrid from './GroupGrid';
import { Container, Row } from 'react-bootstrap';

const Styles = styled.div`

    h2{
        text-align: center;
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