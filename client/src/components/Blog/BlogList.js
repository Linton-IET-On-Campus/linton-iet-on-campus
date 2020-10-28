import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Styles = styled.div`

.media{
	background-color:#D7DBDD;
    padding: 20px;
    margin: 20px;
    border-radius: 25px;
}


.media-body{
    margin-left: 20px;
}

h4{
  font-weight: bold;
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


const postsData = require("./_posts.json");

/**
 * This page includes navigation (nested Routers)
 */
export const BlogList = () => {
  const blogs = postsData.map(blog => {
    return (

      <Styles>
      <div class="media">
      <a class="pull-left" href="#">
          <img class="media-object" src={blog.img} />
    </a>
    <div class="media-body">
      <h4 class="media-heading">{blog.title}</h4>
        <p>{blog.author} ✍️ </p>
        <p>{blog.summary}</p>
        <ul class="list-inline list-unstyled">
        <li><span>📅 {blog.postedOn} </span> &nbsp; <span>⌚ {blog.time} </span></li>
        </ul>
      <Link to={"/blog/" + blog.slug} key={blog.slug} class="btn btn-blog pull-right marginBottom10">Read More
      </Link>
     </div>
  </div>

  </Styles>
    );
  });

  return <div className="blog">{blogs}</div>;
}
