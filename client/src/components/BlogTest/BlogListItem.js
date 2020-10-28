import React from 'react'

const BlogListItem = ({ item }) => {
  return (

      <div class="media">
      	<a class="pull-left" href="#">
            <img class="media-object" src={item.img} />
  		</a>
  		<div class="media-body">
    		<h4 class="media-heading">{item.title}</h4>
          <p class="text-right">By {item.author}</p>
          <p>{item.summary}</p>
          <ul class="list-inline list-unstyled">
  			<li><span><i class="glyphicon glyphicon-calendar"></i> {item.postedOn} </span></li>
		</ul>
        <a class="btn btn-blog pull-right marginBottom10" href={"/blog/" + item.slug} >READ MORE</a> 
       </div>
    </div>
  )
}

export default BlogListItem