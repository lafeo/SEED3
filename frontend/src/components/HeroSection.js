import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
  <div className="container">
    <div className='hero-container left-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h2>What are you waiting for?</h2>
      <p>Start Contributing</p>
      <p>to</p>
      <h1 className="seed"><span className="right_animation">se</span>.<span className="left_animation">ed</span></h1>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}
        >
          LOGIN / SIGN UP
        </Button>
      </div>
    </div>
    <div className='middle-line'>
      <div className="line"></div>
    </div>
    <div className="right-container">
      <h1>LOGIN PAGE</h1>
    </div>
  </div>
  );
}

export default HeroSection;
