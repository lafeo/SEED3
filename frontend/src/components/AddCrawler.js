import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import TinyMCEComponent from "./TinyMCEComponent";

export default function AddCrawler() {

    function tinyCallback(value){
        setBody(value);
    }

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFsYmhhdGlhQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ikt1bmFsIiwibGFzdG5hbWUiOiJCaGF0aWEiLCJ1c2VybmFtZSI6IktCaGF0aWEiLCJpZCI6IjYwNzA1MGYyN2Y5ZmI1MDNlNzVkNTA4MCIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjAsImlhdCI6MTYxODAxMzgzNiwiZXhwIjoxNjE4MDI0NjM2fQ.UrvgUTlwXoUcIBVY9ZIP8dx4pODVGRwNsBeBObZ1VVk";

  const [description, setDescription] = useState("The classic tale");
  const [
    body,
    setBody
  ] = useState('');


    const submitHandler = async (e) => {
        const detailsToSend = {
            description:description,
            body:body,
            parentWritingId:'6070da14ad26c886066c8c81'
        }
        e.preventDefault();
        console.log(detailsToSend);
        // axios.post('http://localhost:8010/writing-routes/add-new-crawler',detailsToSend,{
        //     headers:{
        //         'Content-Type':"application/json",
        //         'Authorization':`Bearer ${TOKEN}`
        //     }
        // }).then(response=>{
        //     console.log("New crawler added!");
        //     console.log(response);
        // }).catch(err=>{
        //     console.log("Error adding new crawler!");
        //     console.log(err);
        // })

    };



    return (
        
        <div>
            <form>

                <input value={description} placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}  type="text"/>
                {/*<textarea  onChange={(e) => (setBody(e.target.value))} placeholder='Body' name="body2" id="body2"/>*/}
                <TinyMCEComponent  callback={tinyCallback}/>

                <button onClick={submitHandler}>Submit</button>
            </form>

        </div>
    );
};


