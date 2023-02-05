import React, { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import "../Styling/Coding.css";
import Card from "../Component/Card";
import CircularLoader from "../Component/CircularLoader";

function Coding() {
  const [events, setEvents] = useState([]);
  const authContext = useContext(AuthContext);
  const history = useNavigate();

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
    var site = "";

    if ("location" in item) {
      site = "https://mlh.io/seasons/2023/events";
    } else {
      if ("code" in item) {
        site = "https://www.codechef.com/contests";
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
    if (!authContext.isLoggedIn) {
      history("/login");
    }
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
