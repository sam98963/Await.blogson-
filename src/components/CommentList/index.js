import Comment from "../Comment"

// Take in comments as an array of objects from comment Form.
// import Comment from ../Comment
/*
{
  id : string
  author: string
  content: string
}

*/

function CommentList({comments}) {
  return(
    <div>
    {console.log(comments)}
    {comments.map((comment) =>(
      <Comment id= {comment.id} author = {comment.author} comment = {comment.comment}/>

    ))
    }
    </div>

  );
}

export default CommentList;
