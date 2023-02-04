import "../Styling/Post.css";
function Comment(props) {
  return (
    <div className="comment">
      <h5>"{props.text}"</h5>
      <h6>-{props.user}</h6>
    </div>
  );
}

export default Comment;
