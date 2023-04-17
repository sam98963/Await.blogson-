// Take in props of (blog), which is an object containing :
/* 
title: string
author: string
datePosted: string
content: string
imageSrc: string
imageAlt: string
*/



function BlogPost(blog) {
  return (<div>
    <h1>My First Post</h1>
    <h3>by Chris Meah</h3>
    <p>10/11/2019</p>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGokeVnr-yPUrwsGJVwy_m_AL2j--gXJ-3g&usqp=CAU" alt="A couple of coders."/>
    <p>A structure used in most apps and games. It's a way to keep doing the same. While a condition is true, Or for one to twenty-two. If endless, for errors we blame ..........Loop</p>
   
  </div>);
}

export default BlogPost;
