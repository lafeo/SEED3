import React, { Component } from 'react'
import axiom from '../axiom.jpg';

import './pages/login.css';
import './card2.css';

const Card = props => {
    return(
        <>
    <div className="card-body">

    <div className="card text-center">
      <div className="overflow">
        <img className={'portal-cards-image'} src={props.imagePath}></img>
      </div>
      <div className="text-dark">
        <h4 className="card-title">{props.title}</h4>

        {/*<a href="#" className="btn btn-outline-success">Go anywhere</a>*/}
      </div>
    </div>
    </div>
    </>
    );
}
export default Card;

