import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from "axios";
import BlogListGrid from './BlogListGrid';

const Styles = styled.div`

body{
	font-family: Arial;
	font-size: 18px;
	background-color: white;
	margin: 0;
}

.header{
	background-image: linear-gradient(to top right, rgb(241, 148, 138, 0.8), rgb(248, 196, 113, 0.8)),url('https://www.studying-in-germany.org/wp-content/uploads/2016/07/Getting-a-masters-degree-in-Germany.jpg');
	height: 450px;
	padding: 50px;
	background-size: 100% 700px;
}

.header h1{
	font-size: 70px;
	color: white;
	margin-left: 20px;
	text-align: center;
}


.media{
	background-color:#D7DBDD;
    padding: 20px;
    margin: 20px;
    border-radius: 25px;
}


.media-body{
    margin-left: 20px;
}

.media-object{
    width: 300px;
    height: 250px
}


.btn-blog {
    color: #ffffff;
    background-color: #eb891c;
    border-color: #eb891c;
    border-radius:0;
    margin-bottom:10px
}


.btn-blog:hover,
.btn-blog:focus,
.btn-blog:active,
.btn-blog.active,
.open .dropdown-toggle.btn-blog {
    color: white;
    background-color:#eb891c;
    border-color: #eb891c;
}


@media screen and (max-width: 800px) {
    .media{
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    .media-object{
        width: 300px;
        height: 200px
    }
    
  }

`;

export const BlogList = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      const fetchItems = async () => {
        const  result = await axios(
            `http://localhost:5000/blog/`
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
            <h1>LIET Blog</h1>
        </div>

        <div class="container">

            <BlogListGrid isLoading={isLoading} items={items}/>


        </div>


    </body>
    </Styles>
    )
}
    
