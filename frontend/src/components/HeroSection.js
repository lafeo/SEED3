import React, { useState } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import SignUpComponent from "./SignUp";
import SignInComponent from "./SignIn";

function HeroSection() {
  const [showSignUpForm, setShowSignUpForm] = useState(true);
  function callbackForShowSignUpForm(value) {
    console.log(`Callback called for ${value}`);
    setShowSignUpForm(value);
  }
  return (
    <div className="container">
      <div className="hero-container left-container">
        <video src="/videos/video-1.mp4" autoPlay loop muted />
        <div className="inside-video">
          <h2>What are you waiting for?</h2>
          <p>Start Contributing</p>
          <p>to</p>
          <h1 className="seed">
            <span className="right_animation">se</span>.
            <span className="left_animation">ed</span>
          </h1>
        </div>
      </div>
      <div className="middle-line">
        <div className="line"></div>
      </div>
      <div className="right-container" id="overrule">
        <h1>{showSignUpForm ? "Sign Up" : "Log In"}</h1>
        <br></br>
        <br></br>
        {showSignUpForm ? (
          <SignUpComponent callback={callbackForShowSignUpForm} />
        ) : (
          <SignInComponent callback={callbackForShowSignUpForm} />
        )}
      </div>
    </div>
  );
}

export default HeroSection;
