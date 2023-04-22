import "./Comment.css"

// Take in props of author and content to display the comment
// write a function to take in author and return capitalised initials


// Remove hard coding of author and content when input works!
function firstInitials (name) {
// Split the name by space to get individual names
console.log(name)
const names = name.split(" ");

// Extract the first letter of each name
const initials = names.map((name) => name[0]);

// Join the initials to create a string
return initials.join("");
} 





function Comment({author, comment}) {
    const initials = firstInitials(author);
  return (<div className="comment-div">
    <div className="initials-circle">
      <p>{initials}</p>
    </div>
    <div className="author-comment">
    <h3>{author}</h3>
    <p>{comment}</p>
    </div>
  </div>)
}

export default Comment;


// function getInitials(name) {
//   // Split the name by space to get individual names
//   const names = name.split(" ");

//   // Extract the first letter of each name
//   const initials = names.map((name) => name[0]);

//   // Join the initials to create a string
//   return initials.join("");
// }



// Maybe start with an initial comment and then add more with input?