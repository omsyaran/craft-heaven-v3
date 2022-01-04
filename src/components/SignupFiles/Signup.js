import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import candlepic from "./candle.jpg";
import weblogo from "./logo-icon.svg";
import emaillogo from "./email.svg";
import passkey from "./pass-key.svg";
import fname from "./flname.svg";
import lname from "./flname.svg";
import username from "./user.svg";
import "./SignupStyle.css";
import React from "react";
import { useEffect } from "react";
import { getAuth } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";

const Signup = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      history.push("/dashboard");
    }
  }, []);

  const onSignup = () => {
    setLoading(true);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(() => history.push("/"))
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };
  return (
    <div className="signup-body">
      <img className="logo" src={weblogo} alt="CraftHeaven logo" />
      <img className="candles" src={candlepic} alt="Candlepic" />
      <div className="signup-form">
        <p className="signup-title">Customer Sign Up</p>
        <br></br>
        <div className="signup-form-inner">
          <div className="signup-form-group">
            <img className="fname-logo" src={fname} alt="Fname-logo" />
            <input
              size="47"
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
              size="47"
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
              size="47"
              className="signup-inputs"
              type="text"
              name="name"
              id="username"
              value={name}
              placeholder="Username"
              onChange={(e) => {
                setName(e.target.value);
              }}
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
              size="47"
              className="signup-inputs"
              type="text"
              name="email"
              id="login-email"
              value={email}
              placeholder="Email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
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
              size="47"
              className="signup-inputs"
              type="password"
              name="password"
              id="login-password"
              value={password}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br></br>
          <button
            className="signup-btn"
            onClick={onSignup}
            value="Register Account"
          >
            {loading ? "Signing" : "Sign up"}{" "}
          </button>
          <br></br>
          <div className="login-link">
            <Link to="/" style={{ textDecoration: "none" }}>
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
