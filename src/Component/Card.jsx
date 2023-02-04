import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/authContext";
import { Link } from "react-router-dom";
import "../Styling/Card.css";

export default function Card({ contest, start, image, site, id }) {
  const authContext = useContext(AuthContext);

  const [thedate, setThedate] = useState("");
  const Thedate = () => {
    const date = new Date(start);
    var formattedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    setThedate(formattedDate);
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
    Thedate();
  }, []);
  return (
    <div className="card">
      <div>
        <Link to={`/singleevent/${id}`} className="contestLink">
          {contest}
        </Link>
      </div>
      <div className="startDate">
        Starts on:
        <div>{thedate}</div>
      </div>
      <div>
        <a href={site} className="site">
          Visit Site
        </a>

        <div className="btn" onClick={() => addToGoal()}>
          Add to Goals
        </div>
      </div>
    </div>
  );
}
