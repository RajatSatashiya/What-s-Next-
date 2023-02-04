import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Coding from "./Component/Coding";
import Hackathon from "./Component/Hackathon";
import Profile from "./Component/Profile";
import Login from "./Component/Login";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Coding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/register" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
