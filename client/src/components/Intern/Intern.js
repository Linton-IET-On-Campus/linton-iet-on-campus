import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import InternGrid from './InternGrid';

const Styles = styled.div`

body{
    font-family: Arial;
    color: white;
    padding: 50px;
}

.container{
    display: grid;
    grid-template: auto/100%;
    grid-gap: 40px;
    left: 0;
    right: 0;
    width: 100%;
    margin: auto;

}

.container > div{
}
/*container settings for description box*/


img{
    border: 1px solid;
    border-radius: 10px;
    margin: 10px;
    width: 350px;
    height: 240px;
   }

   @media only screen and (max-width: 500px) {
    img{
        text-align: center;
        min-width:180px;
        max-width: 150px;
       }
  }

h1{
    font-size: 40px;
    text-align: center;
}

/* unvisited link */
.a:link, .a:visited{
background-color: rgba(235.0, 137.0, 28.0, 1.0);
color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  float: right;
}

/* mouse over link */
.a:hover {
  color: white;
  background-color: rgb(244, 154, 58) ;
}

/* selected link */
.a:active {
 color: white;
 background-color: rgb(0,255,0);
}


p{
    word-wrap: break-word;
}




.border{
  padding: 30px;
  margin: 20px;
  border-radius: 20px;
  background-color: rgb(0,0,0,0.7);

}


`;



export const Intern = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const fetchItems = async () => {
        const  result = await axios(
            `http://localhost:5000/intern-job-opportunity/`
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

        <h1 style={{color: "#eb891c"}}>
            Intership/Job Oppurtunities
            <hr />
        </h1>

        <div class="container">

        <InternGrid isLoading={isLoading} items={items}/>


            
        
        </div>

    </body>

    </Styles>
    )
}