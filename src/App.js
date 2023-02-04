import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Coding from "./Pages/Coding";
import Hackathon from "./Pages/Hackathon";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleEvent from "./Pages/SingleEvent";
import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);

  const closeMenu = () => {
    setMenuIsOpen(false);
  };
  const openMenu = () => {
    setMenuIsOpen(true);
  };
  return (
    <>
      {!MenuIsOpen && (
        <h3 className="ham" onClick={openMenu}>
          Menu
        </h3>
      )}
      <div className="app" onClick={closeMenu}>
        {MenuIsOpen && (
          <div className="ham menu" onClick={closeMenu}>
            <ul className="list">
              <li>
                <Link className="listItem" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="listItem" to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link className="listItem" to="/login">
                  Login
                </Link>
              </li>
              <li>
                <Link className="listItem" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" exact element={<Coding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/register" element={<Register />} />
          <Route path="/singleevent/:id" element={<SingleEvent />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
