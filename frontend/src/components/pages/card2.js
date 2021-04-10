import React, { Component } from 'react'
import axiom from '../../axiom.jpg';
import './login.css';

const Card = props => {
    return(
        <>
    <div className="body">
    <h1 className='login'>OUR PORTALS</h1>
    <div className="card text-center">
      <div className="overflow">
        <img src={axiom}></img>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">nfkjdnfjdwkkwdbfwfbwjbff nkdwnkjwnvkwdnv inwinvkwnv niwnvnwivnw
        </p>
        <a href="#" className="btn btn-outline-success">Go anywhere</a>
      </div>
    </div>
    </div>
    </>
    );
}
export default Card;

