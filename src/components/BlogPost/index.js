// Take in props of (blog), which is an object containing :
/* 
title: string
author: string
datePosted: string
content: string
imageSrc: string
imageAlt: string
*/



function BlogPost() {
  let blog = {
    title: "My First Post",
    author: "by Chris Meah",
    datePosted: "10/11/2019",
    content: "A structure used in most apps and games. It's a way to keep doing the same. While a condition is true, Or for one to twenty-two. If endless, for errors we blame ..........Loop",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGokeVnr-yPUrwsGJVwy_m_AL2j--gXJ-3g&usqp=CAU",
    imageAlt: "A couple of coders.",
  }
  return (<div>
    <h1>{blog.title}</h1>
    <h3>{blog.author}</h3>
    <p>{blog.datePosted}</p>
    <img src={blog.imageSrc} alt={blog.imageAlt}/>
    <p>{blog.content}</p>
   
  </div>);
}

export default BlogPost;
