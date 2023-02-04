function Post(props) {
  return (
    <div className="post">
      <p>{props.msg}</p>
      <h6>By: {props.user}</h6>
    </div>
  );
}
