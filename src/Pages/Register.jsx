import React, { useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/authContext";
import "../Styling/Register.css";

function Register() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const history = useNavigate();
  const authContext = useContext(AuthContext);

  useEffect(() => {
    if (authContext.isLoggedIn) {
      history("/");
    } else {
      history("/register");
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      name: usernameRef.current.value,
      password: passwordRef.current.value,
      email: emailRef.current.value,
    };
    submitForm(formData);
  };

  const submitForm = async (formData) => {
    try {
      const response = await fetch("/users", {
        method: "POST",
        body: JSON.stringify({
          name: formData.name,
          password: formData.password,
          email: formData.email,
        }),
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      });
      const data = await response.json();
      authContext.login(data.token);

      const tokenValue = localStorage.getItem("token");
      if (tokenValue === "undefined") {
        history("/signup");
      } else {
        history("/");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="profile">
      <h1>What's Next ??</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <div className="label">Username</div>
          <input type="text" ref={usernameRef} />
        </div>

        <div>
          <div className="label">Email</div>
          <input type="email" ref={emailRef} />
        </div>

        <div>
          <div className="label">Password</div>
          <input type="password" ref={passwordRef} />
        </div>

        {/* <div>
          <div className="label">Age</div>
          <input type="number" ref={ageRef} />
        </div> */}

        <div>
          <input type="submit" />
        </div>
      </form>
    </div>
  );
}

export default Register;
