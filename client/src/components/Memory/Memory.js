import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
import MemoryGrid from './MemoryGrid';

const Styles = styled.div`
body{
	font-family: Arial;
	font-size: 18px;
	background-color: white;
	margin: 0;
}

.header{
	background-image: linear-gradient(to top right, rgb(241, 148, 138, 0.6), rgb(0, 255, 255, 0.6)), url('https://st3.depositphotos.com/1022914/12909/v/600/depositphotos_129091942-stock-video-colorful-sticky-notes-on-the.jpg');
	height: 450px;
	padding: 100px;
	background-size: 100% 700px;
}

.header h1{
	font-size: 70px;
	color: white;
	margin-left: 20px;
	text-align: center;
}

.container{
	display: grid;
	grid-template-columns: 31% 31% 31%;
	grid-gap: 30px;
	margin-top: 30px;
	margin-bottom: 30px;
}

@media only screen and (max-width: 500px) {
    .container{
        grid-template-columns: 100%;
    }
    .header h1{
      font-size:60px;
      color: white;
      margin-left: 0px;
      text-align: center;
    }
    
  }

.container> div{
	background-color:#D7DBDD;
	padding: 15px;
}

.column:hover{
	filter: drop-shadow(8px 8px 10px gray);
}

`;


export const Memory = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const fetchItems = async () => {
        const  result = await axios(
            `http://localhost:5000/memory-wall/`
          )
          console.log(result.data)
  
          setItems(result.data)
          setIsLoading(false)
        }
        fetchItems()
      },[])
  
    return(
        <Styles>

            <body>

                <div class="header">
                    <h1>LIET Memory Wall</h1>
                </div>
            
                <MemoryGrid isLoading={isLoading} items={items}/>
        
            </body>

         </Styles>
    )
  
  }
