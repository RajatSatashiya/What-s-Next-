import "../Styling/SingleEvent.css";
import AuthContext from "../context/authContext";
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Post from "../Component/Post";

function SingleEvent() {
  const { id } = useParams();
  const authContext = useContext(AuthContext);

  const [eventdata, setEventdata] = useState({
    code: "",
    name: "",
    time: null,
  });
  const Thedate = () => {
    const date = new Date(eventdata.time);
    var formattedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    // setThedate(formattedDate);
  };

  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  currentDate.setHours(14, 30, 0, 0);

  let event = {
    name: "Starters 69",
    time: currentDate,
    startsIn: "5 Hours",
  };

  const timeRemaining = () => {
    const currentTime = new Date();
    const diffTime = eventdata.time - currentTime;
    const diffHours = diffTime / (1000 * 60 * 60);
    return Math.floor(diffHours);
  };

  const getEvent = async () => {
    try {
      const response = await fetch(`/event/${id}`);
      const data = await response.json();
      console.log(data);
      setEventdata((prev) => ({
        ...prev,
        code: data.code,
        name: data.name,
        time: new Date(data.time),
      }));
    } catch (e) {
      console.log(e);
    }
  };

  const addToGoal = async () => {
    try {
      const events = [{ id: id, completed: false }];
      const response = await fetch("/users/me", {
        method: "PATCH",
        body: JSON.stringify({ events }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${authContext.token}`,
        },
      });
      const data = await response.json();
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getEvent();
  }, []);

  const posts = [
    {
      msg: "This event is amazing",
      user: "source404",
      comments: [
        { text: "yes i loved it last year", user: "Boom360" },
        { text: "The organisers were really friendly", user: "NotBoom" },
      ],
    },
    {
      msg: "What do i need for this Event",
      user: "Rajat",
      comments: [],
    },
    {
      msg: "Will travel Expenses be Covered",
      user: "mansiii13",
      comments: [],
    },
  ];

  return (
    <>
      <div className="eventInfo">
        <h2>
          <span>What:</span> {eventdata.name}
        </h2>

        <h2>
          <span>When:</span>
          {eventdata.time && eventdata.time.toLocaleDateString()}{" "}
          {eventdata.time && eventdata.time.toLocaleTimeString()}
        </h2>
        <h2>
          <span>Starts In:</span> {eventdata.time && timeRemaining()} hours
        </h2>
        <div className="btn" onClick={() => addToGoal()}>
          Add to Goals
        </div>
      </div>
      <div className="eventThread">
        <div className="post">
          <h2>Discussions</h2>
        </div>

        {posts.map((post, index) => (
          <Post
            key={post.user}
            index={index}
            msg={post.msg}
            user={post.user}
            comments={post.comments}
          ></Post>
        ))}
      </div>
    </>
  );
}

export default SingleEvent;
