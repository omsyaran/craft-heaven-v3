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
import { initilizeFirebase } from "../SignUp/firebase";
import { getDatabase, set, ref } from "firebase/database";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getDownloadURL, getStorage, uploadBytes } from "firebase/storage";
import { useState } from "react";

const SellerSignup = () => {
  const app = initilizeFirebase();
  const db = getDatabase(app);
  const auth = getAuth();
  const storage = getStorage();

  async function upload(file, seller) {
    const fileRef = ref(storage, "StorePhoto/" + seller.uid + ".jpg"); // the ref over here is from the database one. not the storage one
    const snapshot = await uploadBytes(fileRef, file);
    alert("Photo uploaded!");
  }

  const onSellerSignup = () => {
    var seller_username = document.getElementById("seller-username").value;
    var seller_email = document.getElementById("seller-email").value;
    var seller_password = document.getElementById("seller-password").value;
    var seller_phonenum = document.getElementById("seller-phonenum").value;
    var store_name = document.getElementById("store-name").value;
    var store_pic = document.getElementById("store-pic").files[0];

    createUserWithEmailAndPassword(auth, seller_email, seller_password)
      .then((userCredential) => {
        // Seller signs in
        const seller = userCredential.user;

        //upload(store_pic, seller);

        set(ref(db, "Sellers/" + seller.uid), {
          seller_username: seller_username,
          seller_email: seller_email,
          seller_phonenum: seller_phonenum,
          store_name: store_name,
        });
        <Link to="/login" />;
        alert("Seller information is created!");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.Message;
        alert(errorMessage);
        alert(errorCode);
      });
  }; // end of the onSellerSignup function

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
          Sign up as customer instead?{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Sign Up Here
          </a>
        </p>
        <div className="seller-signup-form-inner">
          <div className="seller-signup-form-group">
            <img className="username-logo" src={username} alt="username-logo" />
            <input
              size="60"
              className="signup-inputs"
              type="text"
              name="name"
              id="seller-username"
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
              id="seller-email"
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
              id="seller-password"
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
              id="seller-phonenum"
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
          <br></br>
          <div className="seller-signup-form-group">
            <input
              size="60"
              className="signup-inputs"
              type="file"
              name="store-pic"
              id="store-pic"
            />
          </div>
          <br></br>
          <p className="signup-seller2">
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
