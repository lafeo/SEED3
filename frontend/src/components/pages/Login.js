import React from 'react';
import '../../App.css';
import './login.css';
import Card from './card2'

export default function Login() {
  return(
    <div className="container-fluid">
      <div className="row">
          <div className="col-md-4">
            <Card/>
          </div>
          <div className="col-md-4">
          <Card/>
          </div>
      </div>
    </div>
  );
}
