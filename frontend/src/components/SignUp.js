import React, { useState,useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import {BACKEND_URL} from "../constants";
import './SignUp.css'


export default function SignUpComponent (){
    const [email,setEmail] = useState('');
    const [username,setUsername]  = useState('');
    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [password,setPassword] = useState('');

    function onSubmit(e){
        e.preventDefault();
        axios.post(BACKEND_URL+'user-routes/sign-up',{
            email:email,
            username:username,
            firstName:firstName,
            lastName:lastName,
            password:password,
        },{
            headers:{
                'Content-Type':"application/json"
            }
        }).then(result=>{
            console.log("New user made!!");
            console.log(result);
        }).catch(err=>{
            console.log("Error making user!!");
            console.log(err);
        })
    }

    return (
        <div className="login-form">
            <form >
                <input className="input-br" type="text" placeholder='Username' onChange={(e)=>{setUsername(e.target.value)}}/>
                <input className="input-br" type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                <input className="input-br" type="text" placeholder='First Name' onChange={(e)=>{setFirstName(e.target.value)}}/>
                <input className="input-br" type="text" placeholder='Last Name' onChange={(e)=>{setLastName(e.target.value)}}/>
                <input className="input-br" type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
                <p className="login-target"><Link className="already" onClick=""> Already Register? Login!</Link></p>
                <button className="input-button" onClick={onSubmit}>Submit</button>
            </form>

        </div>
    );
};
