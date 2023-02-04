import React, { useState } from "react";
import "../Styling/Loader.css";

const CircularLoader = () => {
  const [finished, setFinished] = useState(6);
  const [total, setTotal] = useState(10);
  const [value, setValue] = useState(finished / total);

  const circumference = 2 * Math.PI * 45;
  const offset = circumference - value * circumference;

  return (
    <>
      <div className="loaderContainer">
        <div className="loader">
          <svg viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#E6E6E6"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#01AF96"
              strokeWidth="10"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              fill="transparent"
            />
            <text x="50" y="50" textAnchor="middle" dy="7" stroke="#fff">
              {`${finished + "/" + total}`}
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default CircularLoader;
