import React from "react";
import "../Styling/Coding.css";
import Card from "./Card";

function Coding() {
  return (
    <div>
      <h3 className="upcoming">Upcoming Contests</h3>
      <div className="cardHolder">
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
        <Card contest="SWERC 2022-2023 - Online Mirror (Unrated, ICPC Rules, Teams Preferred)" />
      </div>
    </div>
  );
}

export default Coding;
