// Take in props of author and content to display the comment
// write a function to take in author and return capitalised initials


// Remove hard coding of author and content when input works!
function firstInitials ({author}) {
  let words = author.split(" ");
let initials = "";

for (let i = 0; i < words.length; i++) {
  let initial = words[i].charAt(0).toUpperCase();
  initials += initial;
}
return initials;
} 

function Comment({author, comment}) {
    const initials = firstInitials(author);
  return (<div>
    <div>
      <p>{initials}</p>
    </div>
    <h3>{author}</h3>
    <p>{comment}</p>
  </div>)
}

export default Comment;



// Maybe start with an initial comment and then add more with input?