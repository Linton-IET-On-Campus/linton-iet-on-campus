import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import BlogListItem from './BlogListItem'

const BlogListGrid = ({ items, isLoading }) => {

    return isLoading ? ( 
        <Spinner animation="grow" variant="warning" /> 
    ) : (
        <div class="well">
            {items.map((item) => (
                    <BlogListItem key={item.id} item={item}></BlogListItem>
                ))}
        </div>
    )
}



export default BlogListGrid;