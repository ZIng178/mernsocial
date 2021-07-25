import React, { useRef } from "react";
import "./Login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(email);
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
        <div className="loginRight" onClick={handleClick}>
          <form className="loginbox">
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton"> Login</button>
            <span className="loginForgot"> Forgot Password?</span>
            <button className="loginRegisterButton">
              {" "}
              Create a new Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
