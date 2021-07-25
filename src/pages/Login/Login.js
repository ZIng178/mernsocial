import React, { useRef, useContext } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
import { AuthContextProvider } from "../../Context/AuthContext";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContextProvider);
  const handleClick = (e) => {
    loginCall({ email, password });
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
