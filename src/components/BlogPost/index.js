// Take in props of (blog), which is an object containing :
/* 
title: string
author: string
datePosted: string
content: string
imageSrc: string
imageAlt: string
*/
import "./BlogPost.css"

function BlogPost({blog}) {
  return (<div className="blog-post">
    <div className="content-div">
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <div className="blog-author-date">
      <p><span>Blog Author: </span>{blog.author}</p>
      <p><span>Date Posted: </span>{blog.datePosted}</p>
      </div>
    </div>
    <div className="img-div">
      <img src={blog.imageSrc} alt={blog.imageAlt}/>
    </div>
    
   
  </div>);
}

export default BlogPost;
