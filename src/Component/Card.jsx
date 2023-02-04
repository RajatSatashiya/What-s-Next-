import React from "react";
import "../Styling/Card.css";

export default function Card({ contest, start, image, site }) {
  return (
    <div className="card">
      <div>{contest}</div>
      <div className="startDate">
        Starts on:
        <div>5th Feb, 2023 (17:35 UTC)</div>
      </div>
      <div>
        {/* <img src={image} className="images" alt="comptetion logo"></img> */}
        <div className="site">
          <a href={site}>Visit Site</a>
        </div>
      </div>
    </div>
  );
}
