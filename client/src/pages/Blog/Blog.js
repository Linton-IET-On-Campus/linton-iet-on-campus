import React from 'react';
import styled from 'styled-components';

import { Footer } from '../../components/Footer';
import { BlogList } from '../../components/Blog/BlogList';
import { NavigationBar } from '../../components/NavigationBar';

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
  text-shadow: 5px 5px #fff;
font-size: 70px;
color: black;
margin-left: 20px;
text-align: center;
}

.header h2{
  text-shadow: 5px 5px #fff;
font-size: 50px;
color: black;
margin-left: 20px;
text-align: center;
}

@media only screen and (max-width: 600px){
  .header p{
      font-size: 20px;
     
  }

  .header h1{
      font-size: 50px;
     
  }
  
  .header h2{
      font-size: 30px;
     
  }
}
`;

export const Blog = () => (
    <Styles>

           <NavigationBar />

        <br></br>

        <body>

          <div class="header">
              <h1>LIET Blog</h1>
              <h2>Engineering · Life · Sharing · Knowledge </h2>

          </div>

          <div class="container">

            <BlogList />

          </div>

          </body>


        <Footer />

  </Styles>

)