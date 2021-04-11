import React, { useState,useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";
import SignUpComponent from "./SignUp";
import SignInComponent from "./SignIn";
import CheckUserTokenValidity from "./shared/LoginChecker";

function HeroSection(props) {
  const [showSignUpForm, setShowSignUpForm] = useState(!(props.isLoggedIn));
  const [isLoggedIn,setIsLoggedIn] = useState(props.isLoggedIn);
  const [userDetails,setUserDetails] = useState(props.userDetails);
  const TOKEN = localStorage.getItem('TOKEN');
  function callbackForShowSignUpForm(value) {
    setShowSignUpForm(value);
  };
    function callbackToSetSignInState(value,userDetails){

        setIsLoggedIn(value);
        setUserDetails(userDetails);
        console.log("SIGNED IN " + value);
        props.setIsUserLoggedIn(value,userDetails);
    }
    useEffect(()=>{
        setIsLoggedIn(props.isLoggedIn);
        setUserDetails(props.userDetails);
        setShowSignUpForm(!props.isLoggedIn);

    },[])

  const  showUserDetails = ()=>(
      <>
          Welcome, {userDetails.username}!
          No. of seeds : {userDetails.numberOfSeedsWritten}
          No. of crawls : {userDetails.numberOfCrawlsWritten}

      </>
    )
    const showLoggingInForms = ()=>(
        showSignUpForm ? (
                <SignUpComponent  callback={callbackForShowSignUpForm} />
            ) : (
                <SignInComponent signInCallBack={callbackToSetSignInState} callback={callbackForShowSignUpForm} />
            )
    )

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
        {isLoggedIn ? showUserDetails():showLoggingInForms()}
      </div>
    </div>
  );
}

export default HeroSection;
