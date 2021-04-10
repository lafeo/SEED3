import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {BACKEND_URL} from "../constants";
import './SignUp.css'


export default function SignInComponent (props){
    const [username,setUsername]  = useState('');
    const [password,setPassword] = useState('');

    function onSubmit(e){
        console.log(username);
        console.log(password);
        // e.preventDefault();
        axios.post(BACKEND_URL+'user-routes/sign-in',{
            username:username,
            password:password,
        },{
            headers:{
                'Content-Type':"application/json"
            }
        }).then(result=>{
            console.log("User signed in!");
            console.log(result);
        }).catch(err=>{
            console.log("Error signing user in!");
            console.log(err);
        })
    }

    return (
        <div className="login-form">
            <form >
                <input className="input-br" type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
                <input className="input-br alag" type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <p className="login-target"><Link className="already" onClick={e=>{props.callback(true)}}> Not Registered? Sign Up!</Link></p>
                <button className="input-button" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    );
};