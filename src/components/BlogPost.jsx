import React from 'react';


const BlogPost = ({title, url}) => {
    return (
       <div>
         {console.log(title, url)}
           <li><a href={url}>{title}</a></li>
       
        </div>
    );
};

export default BlogPost;