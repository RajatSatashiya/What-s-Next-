import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Coding from "./Pages/Coding";
import Hackathon from "./Pages/Hackathon";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import SingleEvent from "./Pages/SingleEvent";

function App() {
  return (
    <div className="app">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Coding />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/singleevent/:id" element={<SingleEvent />} />
      </Routes>
    </div>
  );
}

export default App;
