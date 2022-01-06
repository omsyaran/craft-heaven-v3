import React from "react";
import "./LoginFormStyle.css";
import weblogo from "./logo-icon.svg";
import candlepic from "./candle.jpg";
import emaillogo from "./email.svg";
import passkey from "./pass-key.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login-body">
      <img className="logo" src={weblogo} alt="CraftHeaven logo" />
      <p className="logo-title">Craft Haven</p>
      <img className="candles" src={candlepic} alt="Candlepic" />
      <div>
        <button className="cust-form">Customer</button>
        <button className="seller-form">Seller</button>
      </div>
      <div className="login-form">
        <p className="login-title">Login</p>
        <div className="login-form-inner">
          <div className="login-form-group">
            <img className="email-logo" src={emaillogo} alt="Email logo" />
            <input
              size="60"
              className="login-inputs"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <br></br>
          <div className="login-form-group">
            <img className="passkey-logo" src={passkey} alt="Password logo" />
            <input
              size="60"
              className="login-inputs"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <p className="login-seller">
            Do not have an account?{" "}
            <Link to="/" style={{ textDecoration: "none" }}>
              Sign Up Here
            </Link>
          </p>
          <br></br>
          <button className="login-btn" value="Sign In">
            Sign In
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Login;

// registered account : pavi@gmail.com      pword:123456
// <button onClick={logout}>Sign out</button>
