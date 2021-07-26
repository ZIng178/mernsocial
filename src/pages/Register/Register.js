import axios from "axios";
import React, { useRef } from "react";
import { useHistory } from "react-router";
import "./Register.css";

const Register = () => {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      password.current.setCustomValidity("passwords don't match ");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginlogo"> TibetSocial</h3>
          <span className="loginDesc">
            Connect with Tibetans all around the World.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginbox" onSubmit={handleClick}>
            <input
              placeholder="UserName"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="password"
              required
              ref={password}
              className="loginInput"
              type="password"
            />
            <input
              placeholder="Re-type password"
              required
              ref={passwordAgain}
              className="loginInput"
              type="password"
              minlength="6"
            />
            <button className="loginButton"> Sign Up </button>

            <button className="loginRegisterButton"> Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
