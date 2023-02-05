import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Coding from "./Pages/Coding";
import Hackathon from "./Pages/Hackathon";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleEvent from "./Pages/SingleEvent";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Profile from "./Pages/Profile";
import AuthContext from "./context/authContext";

function App() {
  const [MenuIsOpen, setMenuIsOpen] = useState(false);
  const authContext = useContext(AuthContext);

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
          <i className="fas fa-bars"></i>
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
              <li>
                <Link
                  to="/login"
                  className="listItem"
                  onClick={authContext.logout}
                >
                  Log Out
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
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
