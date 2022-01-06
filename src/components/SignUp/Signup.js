import React from "react";
import "./SignupStyle.css";
import candlepic from "./candle.jpg";
import weblogo from "./logo-icon.svg";
import emaillogo from "./email.svg";
import passkey from "./pass-key.svg";
import fname from "./flname.svg";
import lname from "./flname.svg";
import username from "./user.svg";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { initilizeFirebase } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import { Link } from "react-router-dom";

const Signup = () => {
  const app = initilizeFirebase();
  const db = getDatabase(app);
  const auth = getAuth();

  const onSignUp = () => {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var username = document.getElementById("username").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        set(ref(db, "Customers/" + user.uid), {
          username: username,
          email: email,
        });

        <Link to="/login" />;

        alert("user created!");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className="signup-body">
      <img className="logo" src={weblogo} alt="CraftHeaven logo" />
      <p className="logo-title">Craft Haven</p>
      <img className="candles" src={candlepic} alt="Candlepic" />
      <div className="signup-form">
        <p className="signup-title">Sign Up</p>
        <br></br>
        <p className="signup-seller">
          Do you want to become a seller? <a href="#">Register Here</a>
        </p>
        <br></br>
        <div className="signup-form-inner">
          <div className="signup-form-group">
            <img className="fname-logo" src={fname} alt="Fname-logo" />
            <input
              size="60"
              classname="signup-inputs"
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
            />
          </div>
          <br></br>
          <div className="signup-form-group">
            <img className="lname-logo" src={lname} alt="lname-logo" />
            <input
              size="60"
              classname="signup-inputs"
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
          </div>
          <br></br>
          <div className="signup-form-group">
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
          <div className="signup-form-group">
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
          <div className="signup-form-group">
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
            onClick={onSignUp}
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

export default Signup;
