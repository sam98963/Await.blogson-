// Declare two states, one for author and one for comment - have them update to recieve what the user has typed.✅
// Import UseState from react✅
// Handle functions for each useState✅
// Make a default name for Author "Anon Author"
// Do not allow submit if comment is empty.
import {useState} from "react"
import "./CommentForm.css"




function CommentForm({handleSubmit}) {
  const [author,setAuthor] = useState("Anon Author")
  const [comment,setContent] = useState("")
  
  function handleAuthor(e) {
    setAuthor(e.target.value)
  }

  function handleContent(e) {
    setContent(e.target.value)
  }

  // On click call another function (to be written) => check if content is empty if it isn't, call submit function, and reset content.

  function checkHandleSubmit (author, comment) {
    if(comment !== ""){
      handleSubmit(author, comment)
    }
    setContent("")

  }

  return (<div className="comment-form">
      <div class="comment-box"><label>Name:<input type="text" onChange={(e)=>handleAuthor(e)}></input></label></div>
      <div class="comment-box" id="comment-input"><label>Add your comment here:<input value={comment} lable="Comment:" type="text"  onChange={(e)=>handleContent(e)}></input></label></div>
      <button type="submit" onClick={()=>checkHandleSubmit(author, comment)}>Submit</button>
    </div>);
}

export default CommentForm;
