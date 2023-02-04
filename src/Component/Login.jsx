import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const authContext = useContext(AuthContext);
  const history = useNavigate();

  useEffect(() => {
    if (authContext.isLoggedIn) {
      history("/");
    } else {
      history("/login");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    submitForm({ email, password });
  };

  const submitForm = async ({ email, password }) => {
    try {
      const response = await fetch("/users/login", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      authContext.login(data.message.token);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="profile">
      <form onSubmit={handleSubmit}>
        <div>
          <div className="label">Email</div>
          <input
            type="text"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="johndoe@gmail.com"
          />
        </div>

        <div>
          <div className="label">Password</div>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
          />
        </div>
        <input type="submit" value="Login"></input>
      </form>
    </div>
  );
}

export default Login;
