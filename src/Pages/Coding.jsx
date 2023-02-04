import React, { useEffect, useState } from "react";
import "../Styling/Coding.css";
import Card from "../Component/Card";
import CircularLoader from "../Component/CircularLoader";

function Coding() {
  const [events, setEvents] = useState([]);
  const getAllEvents = async () => {
    try {
      const response = await fetch("/allevents");
      const data = await response.json();
      setEvents(data);
      data.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  const displayEvents = events.map((item, index) => {
    return <Card contest={item.name} key={index} start={item.time} />;
  });

  useEffect(() => {
    getAllEvents();
  }, []);
  return (
    <div>
      <CircularLoader />
      <div className="cardHolder">
        <h3>Upcoming Events...</h3>
        {/* <Card
          contest="Codeforces Round #850 (Div. 1, based on VK Cup 2022 - Final Round)"
          image="./images/codeforces.png"
          site="https://codeforces.com/contests"
        />
        <Card
          contest="Codeforces Round #850 (Div. 1, based on VK Cup 2022 - Final Round)"
          image="./images/codeforces.png"
          site="https://codeforces.com/contests"
        />

        <Card
          contest="Codeforces Round #850 (Div. 2, based on VK Cup 2022 - Final Round)"
          site="https://www.codechef.com/contests"
        />
        <Card contest="Codeforces Round (Div. 2)" />
        <Card contest="SWERC 2022-2023 - Online Mirror (Unrated, ICPC Rules, Teams Preferred)" /> */}
        {displayEvents}
      </div>
    </div>
  );
}

export default Coding;
