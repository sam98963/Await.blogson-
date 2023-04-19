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
  console.log(comments)
  return(
    <div>
      <Comment id= {comments.id} author = {comments.author} comment = {comments.comment}/>
    </div>

  );
}

export default CommentList;
