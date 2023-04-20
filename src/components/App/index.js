import BlogPost from "../BlogPost";
import CommentList from "../CommentList";
import CommentForm from "../CommentForm";
import {useState} from "react"
import {blog} from "../../data/blogs"
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
  <BlogPost blog = {blog}/>
  <CommentList comments = {comments}/>
  <CommentForm handleSubmit = {handleSubmit}></CommentForm>
  </>)
}

export default App;
