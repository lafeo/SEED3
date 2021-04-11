import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";
// import { Button } from "./Button";
import "./HeroSection.css";
import SignUpComponent from "./SignUp";
import SignInComponent from "./SignIn";
// import CheckUserTokenValidity from "./shared/LoginChecker";
import styled from "styled-components";

function HeroSection(props) {
  const [showSignUpForm, setShowSignUpForm] = useState(!props.isLoggedIn);
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);
  const [userDetails, setUserDetails] = useState(props.userDetails);

  function callbackForShowSignUpForm(value) {
    setShowSignUpForm(value);
  }
  function callbackToSetSignInState(value, userDetails) {
    setIsLoggedIn(value);
    setUserDetails(userDetails);
    console.log("SIGNED IN " + value);
    props.setIsUserLoggedIn(value, userDetails);
  }
  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);
    setUserDetails(props.userDetails);
    setShowSignUpForm(!props.isLoggedIn);
  }, []);

  const showLoggingInForms = () =>
    showSignUpForm ? (
      <SignUpComponent callback={callbackForShowSignUpForm} />
    ) : (
      <SignInComponent
        signInCallBack={callbackToSetSignInState}
        callback={callbackForShowSignUpForm}
      />
    );

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
        {isLoggedIn ? (
          <MainHeading>Seed Details</MainHeading>
        ) : (
          <h1>{showSignUpForm ? "Sign Up" : "Log In"}</h1>
        )}
        <br></br>
        <Line></Line>
        <br></br>
        {isLoggedIn ? (
          <HeroContainer>
            <DetailsHero>
              <HeadingContainer>
                <h2>Number of seeds : {userDetails.numberOfSeedsWritten}</h2>
              </HeadingContainer>
              <HeadingContainer>
                <h2>Number of crawls : {userDetails.numberOfCrawlsWritten}</h2>
                <br />
                <Line></Line>
              </HeadingContainer>
              <HeadingContainer>
                <br />
              </HeadingContainer>

              <Link to="/add-new-seed">
                <Button>Add Seed! </Button>
              </Link>
            </DetailsHero>
          </HeroContainer>
        ) : (
          showLoggingInForms()
        )}
      </div>
    </div>
  );
}

const MainHeading = styled.h1`
  background-image: linear-gradient(to top, #a35dff 50%, #fbc2eb 60%);
  background-size: 100%;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

const Button = styled.button`
  padding: 0.9rem 2rem;
  border-radius: 5px;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.3s all ease-out;
  font-size: 1rem;
  font-weight: bolder;
  &:hover {
    background-color: #100828;
    color: white;
  }
`;

const HeroContainer = styled.div``;

const DetailsHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;

const HeadingContainer = styled.div`
  padding: 1rem 0rem;
`;

const Line = styled.div`
  background: white;
  height: 0.1rem;
  width: 80%;
  text-align: center;
  align-content: center;
  margin: auto;
`;

export default HeroSection;
