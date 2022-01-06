import React from "react";
import "./SellerSignupStyle.css";
import candlepic from "./candle.jpg";
import weblogo from "./logo-icon.svg";
import emaillogo from "./email.svg";
import passkey from "./pass-key.svg";
import username from "./user.svg";
import phonenum from "./phone-logo.svg";
import storelogo from "./store-logo.svg";
import { Link } from "react-router-dom";

const SellerSignup = () => {
  const onSellerSignup = () => {}; // haven't define yet

  return (
    <div className="seller-signup-body">
      <img className="logo" src={weblogo} alt="CraftHeaven logo" />
      <p className="logo-title">Craft Haven</p>
      <img className="candles" src={candlepic} alt="Candlepic" />
      <div className="seller-signup-form">
        <p className="signup-title">Start your bussiness on Craft Haven now!</p>
        <br></br>
        <p className="seller-signup-desc">
          Please make sure that you have active bussiness license and
          registration in order to sell on this Craft Haven platform.
        </p>
        <br></br>
        <br></br>
        <p className="signup-seller">
          Sign up as customer instead? <a href="#">Signup Here</a>
        </p>
        <br></br>
        <div className="seller-signup-form-inner">
          <div className="seller-signup-form-group">
            <img className="username-logo" src={username} alt="username-logo" />
            <input
              size="60"
              className="signup-inputs"
              type="text"
              name="name"
              id="username"
              placeholder="Username"
            />
          </div>
          <br></br>
          <div className="seller-signup-form-group">
            <img
              className="signup-email-logo"
              src={emaillogo}
              alt="Email logo"
            />
            <input
              size="60"
              className="signup-inputs"
              type="text"
              name="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <br></br>
          <div className="seller-signup-form-group">
            <img
              className="signup-passkey-logo"
              src={passkey}
              alt="Password logo"
            />
            <input
              size="60"
              className="signup-inputs"
              type="password"
              name="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <br></br>
          <div className="seller-signup-form-group">
            <img
              className="signup-phonenum-logo"
              src={phonenum}
              alt="phone logo"
            />
            <input
              size="60"
              className="signup-inputs"
              type="tel"
              name="phonenum"
              id="phonenum"
              placeholder="Phone number"
              pattern="^(\+?6?01)[0-46-9]-*[0-9]{7,8}$"
            />
          </div>
          <br></br>
          <div className="seller-signup-form-group">
            <img
              className="signup-store-logo"
              src={storelogo}
              alt="Store logo"
            />
            <input
              size="60"
              className="signup-inputs"
              type="text"
              name="store-name"
              id="store-name"
              placeholder="Store Name"
            />
          </div>
          <p className="signup-seller">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              Log In
            </Link>
          </p>
          <br></br>
          <button
            className="signup-btn"
            value="Register Account"
            onClick={onSellerSignup}
          >
            {" "}
            Sign Up
          </button>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default SellerSignup;
