import React, { useEffect, useState, useContext } from "react";
import "../Styling/Coding.css";
import Card from "../Component/Card";
import CircularLoader from "../Component/CircularLoader";

function Coding() {
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    try {
      const response = await fetch("/allevents");
      const data = await response.json();
      data.sort(function (a, b) {
        return new Date(a.time) - new Date(b.time);
      });
      setEvents(data);
    } catch (e) {
      console.log(e);
    }
  };

  const displayEvents = events.map((item, index) => {
    const arr = ["COOK", "CodeChef", "Starters"];
    var site = "";

    for (var i = 0; i < arr.length; i++) {
      if (item.name.includes(arr[i])) {
        site = "https://www.codechef.com/contests";
        break;
      } else {
        site = "https://codeforces.com/contests";
      }
    }
    return (
      <Card
        contest={item.name}
        key={index}
        start={item.time}
        site={site}
        id={item._id}
      />
    );
  });

  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <div>
      <CircularLoader />
      <div className="cardHolder">
        <h3>Upcoming Events...</h3>
        {displayEvents}
      </div>
    </div>
  );
}

export default Coding;
