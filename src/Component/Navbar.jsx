import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styling/Navbar.css";

function Navbar() {
  const navbar = useRef();

  return (
    <nav ref={navbar} className="nav2">
      <h3>Whats Next??</h3>
      <ul className="nav-list">
        <Link to="/">
          <li>Coding Contests</li>
        </Link>

        <Link to="/hackathon">
          <li>Hackathons</li>
        </Link>

        <Link to="/register">
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navbar;
