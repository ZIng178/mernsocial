import React from "react";
import "./Login.css";

const Login = () => {
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
          <div className="loginbox">
            <input placeholder="Email" className="loginInput" />
            <input placeholder="password" className="loginInput" />
            <button className="loginButton"> Login</button>
            <span className="loginForgot"> Forgot Password?</span>
            <button className="loginRegisterButton">
              {" "}
              Create a new Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
