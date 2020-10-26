import React from 'react'

const BlogListItem = ({ item }) => {
  return (

      <div class="media">
      	<a class="pull-left" href="#">
    		<img class="media-object" src="" />
  		</a>
  		<div class="media-body">
    		<h4 class="media-heading">{item.blogTitle}</h4>
          <p class="text-right">By {item.author}</p>
          <p>{item.blogText}</p>
          <ul class="list-inline list-unstyled">
  			<li><span><i class="glyphicon glyphicon-calendar"></i> {item.postedOn} </span></li>
		</ul>
        <a class="btn btn-blog pull-right marginBottom10" href="http://bootsnipp.com/user/snippets/2RoQ">READ MORE</a> 

       </div>
    </div>
  )
}

export default BlogListItem