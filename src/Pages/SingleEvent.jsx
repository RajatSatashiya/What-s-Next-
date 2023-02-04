import "../Styling/SingleEvent.css";

function SingleEvent() {
  var currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 5);
  currentDate.setHours(14, 30, 0, 0);

  let event = {
    name: "Starters 69",
    time: currentDate,
    startsIn: "5 Hours",
  };

  console.log(currentDate);
  console.log(event.time.toString());

  return (
    <>
      <div className="eventInfo">
        <h2>What: {event.name}</h2>
        <h2>
          When:{" "}
          {event.time.toLocaleDateString() +
            " " +
            event.time.toLocaleTimeString()}
        </h2>
        <h2>Starts In: {event.startsIn}</h2>
      </div>
      <div className="eventThread">
        <div className="post">
          <h2>Post 1</h2>
        </div>
        <div className="post">
          <h2>Post 2</h2>
        </div>
        <div className="post">
          <h2>Post 3</h2>
        </div>
      </div>
    </>
  );
}

export default SingleEvent;
