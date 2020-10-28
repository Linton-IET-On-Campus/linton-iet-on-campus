import React from "react";
import { useParams } from "react-router";
import styled from 'styled-components';

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

  h3{
      font-size: 20px;
  }
  
`;

const postsData = require("./_posts.json");

export const Post = () =>  {
  var { slug } = useParams(),
  blog = findPostBySlug(slug);

  return (
    <Styles>
 
    <body>
       
    <div class="header">
              <h1>LIET Blog</h1>
              <h2>Engineering · Life · Sharing · Knowledge </h2>

          </div>

        <div id="container">

              <article>

                <h2>{blog.title}</h2>

                <h3>✍️ {blog.author}</h3>

                <p>Posted on <time>{blog.postedOn} {blog.time}</time></p>

                <p>{blog.paragraphOne}</p>

                <p>{blog.paragraphTwo}</p>

                    
                <p>
                    <img src={blog.img}/>
                </p>


                <ol>
                    <li><strong>{blog.pointOne}</strong></li>
                    <p>{blog.pointOneEla}</p>
                    <li><strong>{blog.pointTwo}</strong></li>
                    <p>{blog.pointTwoEla}</p>
                    <li><strong>{blog.pointThree}</strong></li>
                    <p>{blog.pointThreeEla}</p>
                    <li><strong>{blog.pointFour}</strong></li>
                    <p>{blog.pointFourEla}</p>
                    <li><strong>{blog.pointFive}</strong></li>
                    <p>{blog.pointFiveEla}</p>
                    <li><strong>{blog.pointSix}</strong></li>
                    <p>{blog.pointSixEla}</p>
            
                </ol>

         

              </article>

        </div>

    </body>
    </Styles>


  
  );
}

function findPostBySlug(slug) {
  return postsData.find(o => o.slug === slug);
}
