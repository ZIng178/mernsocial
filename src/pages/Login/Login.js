import React, { useRef, useContext } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../Context/AuthContext";
import { CircularProgress } from "@material-ui/core";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  console.log(user);
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
            <button className="loginButton">
              {" "}
              {isFetching ? <CircularProgress color="white" /> : "Login"}
            </button>
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
