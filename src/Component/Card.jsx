import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/authContext";
import { Link } from "react-router-dom";
import "../Styling/Card.css";

export default function Card({ contest, start, image, site, id }) {

  const [thedate, setThedate] = useState("");
  const Thedate = () => {
    const date = new Date(start);
    var formattedDate =
      date.toLocaleDateString() + " " + date.toLocaleTimeString();

    setThedate(formattedDate);
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

        
      </div>
    </div>
  );
}
