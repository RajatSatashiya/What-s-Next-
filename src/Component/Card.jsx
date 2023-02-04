import React, { useState, useEffect } from "react";
import "../Styling/Card.css";

export default function Card({ contest, start, image, site }) {
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
      <div>{contest}</div>
      <div className="startDate">
        Starts on:
        <div>{thedate}</div>
      </div>
      <div>
        {/* <img src={image} className="images" alt="comptetion logo"></img> */}
        <a href={site} className="site">
          Visit Site
        </a>
      </div>
    </div>
  );
}
