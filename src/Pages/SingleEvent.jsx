import "../Styling/SingleEvent.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleEvent() {
  const { id } = useParams();
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

  useEffect(() => {
    getEvent();
  }, []);

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
      </div>
      <div className="eventThread">
        <div className="post">
          <h2>{eventdata.name}</h2>
        </div>
      </div>
    </>
  );
}

export default SingleEvent;
