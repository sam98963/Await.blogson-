// Declare two states, one for author and one for comment - have them update to recieve what the user has typed.✅
// Import UseState from react✅
// Handle functions for each useState✅
// Make a default name for Author "Anon Author"
// Do not allow submit if comment is empty.
import { useState } from "react";
import "./CommentForm.css";

function CommentForm({ handleSubmit }) {
  const [author, setAuthor] = useState("Anon Author");
  const [comment, setContent] = useState("");

  function handleAuthor(e) {
    setAuthor(e.target.value);
  }

  function handleContent(e) {
    setContent(e.target.value);
  }

  function checkHandleSubmit(author, comment) {
    if (comment !== "") {
      handleSubmit(author, comment);
    }
    setContent("");
  }

  return (
    <div className="comment-form">
      <div className="comment-box">
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          type="text"
          value={author}
          onChange={handleAuthor}
        />
      </div>
      <div className="comment-box" id="comment-input">
        <label htmlFor="comment-textarea">Add your comment here:</label>
        <textarea
          id="comment-textarea"
          value={comment}
          onChange={handleContent}
          rows={10}
        />
      </div>
      <button type="submit" onClick={() => checkHandleSubmit(author, comment)}>
        Submit
      </button>
    </div>
  );
}

export default CommentForm;
