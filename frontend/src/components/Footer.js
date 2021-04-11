import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Be a part of an amazing community
        </p>
        <p className='footer-subscription-text'>
          Write stories, books, articles together with the World
        </p>

      </section>


    </div>
  );
}

export default Footer;
