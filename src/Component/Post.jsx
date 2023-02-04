import "../Styling/Post.css";
import Comment from "./comment";

function Post(props) {
  return (
    <div className="post">
      <p>{props.msg}</p>
      <h6>Author: {props.user}</h6>

      <hr></hr>

      {props.comments.map((comment) => (
        <Comment text={comment.text} user={comment.user}></Comment>
      ))}
    </div>
  );
}

export default Post;
