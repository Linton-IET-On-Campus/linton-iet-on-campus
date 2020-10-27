import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from "react-router";
import axios from "axios";

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


  article {
    margin: 50px;
    font: 400 18px 'Lora', Georgia, serif;
    line-height: 2;
    color: #505050;
  }

  article h2 {
    color: #2b2b2b;
    font: 40px 'Droid Sans', sans-serif;
  }

  article p {
    padding-bottom: 25px;
  }

  article img {
    max-width: 100%;
  }
  

`;


export const Post = () => {




    return(
    <Styles>

    <body>
        <div class="header">
            <h1>LIET Blog</h1>
        </div>

        <div id="container">

              <article>

                <h2>hahah</h2>
                <p>Written By</p>
                <time>24 Apr 2016</time>

                <p>
                    Cred actually pour-over typewriter. Cronut man braid butcher brunch, ennui mixtape skateboard gastropub tacos keffiyeh vegan polaroid. Aesthetic sriracha vinyl, yr semiotics mlkshk vice iPhone sartorial 90's bitters forage. Chicharrones pop-up echo park truffaut ugh. Knausgaard vice kale chips street art, health goth heirloom etsy master cleanse lumbersexual mlkshk pug. Small batch lumbersexual flannel, typewriter chartreuse truffaut thundercats. Marfa tattooed mustache roof party gochujang blog.
                    
                </p><img src="https://www.dropbox.com/s/edxzwj40g01n1ie/inspiration.jpg?raw=1"/>
                <p>
                    DIY deep v skateboard chillwave polaroid salvia, raw denim distillery bitters craft beer kickstarter. Twee chambray blue bottle, poutine ramps helvetica cornhole ethical quinoa plaid put a bird on it tousled drinking vinegar humblebrag. Selvage mixtape gentrify tilde listicle. Lomo meditation art party chartreuse, bushwick health goth cold-pressed hashtag fap. Butcher swag ugh, ennui vegan cold-pressed photo booth sustainable portland umami.
                    
                </p>
                <ul>
                    <li>Une puce</li>
                    <li>Une autre puce</li>
                    <li>Et encore une autre puce !</li>
                </ul>

              </article>

        </div>

    </body>
    </Styles>
    )
}

