import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import {useState} from "react"
import {blog} from "../../data/blogs"
import "./App.css"

function App() {
  const [comments, setComments] = useState([{author: "Sam Williamson", comment: "Wow this is so cool", id: "1"}])
  function handleSubmit(author, comment){
    // create an object for the comment
    // add it to the array of comments
    const newComment = {
      id: Math.random().toString(30),
      author: author,
      comment: comment,
    }
    setComments([...comments, newComment])
  }
  return (<>
  <nav>
    <h1>Await.blogson()</h1>
    <div className = "nav-bar-list">
      <ul>
        <div className="nav-list-item">
        <li>Blog</li>
        
        <li>Comments</li>

        <li>Add a Comment!</li></div>
      </ul>
    </div>
  </nav>
  <section className="blog-section">
    <div className="blog-section-title">
    <h1>Our Latest Blog!</h1>
    </div>
  <BlogPost blog = {blog}/>
  </section>
  <CommentList comments = {comments}/>
  <CommentForm handleSubmit = {handleSubmit}></CommentForm>
  </>)
}

export default App;
