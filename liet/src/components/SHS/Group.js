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
        width: 100%;
        padding: 20px;
      }
      
      .card { 
        border: 1px solid black;
        border-radius: .5rem;
      }

      .cardbody{
          height:100px;
      }

      img{
        border-radius: .5rem;
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
            <h2 class="section-title h1">Study Group</h2>
             <GroupGrid isLoading={isLoading} items={items}/>
        </Container>



    </Styles>
  )

}