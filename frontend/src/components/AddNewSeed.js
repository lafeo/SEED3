import React, { useState,useEffect } from "react";
import axios from "axios";
import {BACKEND_URL} from "../constants";
import TinyMCEComponent from "./TinyMCEComponent";

export default function AddNewSeed (){
  const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhaHVAZ21haWwuY29tIiwiZmlyc3ROYW1lIjoiUmFheWFhbiIsImxhc3RuYW1lIjoiU2FodSIsInVzZXJuYW1lIjoibGFmZW8iLCJpZCI6IjYwNzA1MGRhN2Y5ZmI1MDNlNzVkNTA3ZiIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjEsImlhdCI6MTYxODAwODU2NCwiZXhwIjoxNjE4MDE5MzY0fQ.M8c5JdaZJCG4HEHK6XZ8yxeIUgE-XCo7C7iuNdA78a8';
  const [title,setTitle] = useState('Jack and the beanstalk');
  const [imageURL,setImageURL] = useState(null);
  const [description,setDescription] = useState('The classic tale');
  const [body,setBody] = useState(``);
  function tinyCallback(value){
      setBody(value);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title',title);
    formData.append('imageURL',imageURL);
    formData.append('description',description);
    formData.append('body',body);
    console.log(body);
    // axios.post('http://localhost:8010/writing-routes/add-new-seed',formData,{
    //     headers:{
    //         'Content-Type':"multipart/form-data",
    //         'Authorization':`Bearer ${TOKEN}`
    //     }
    // }).then(response=>{
    //      console.log("New seed added!");
    //      console.log(response);
    //  }).catch(err=>{
    //      console.log("Error adding new seed!");
    //      console.log(err);
    //  })

  };



  return (
      <div>
        <form>
          <input value={title} placeholder='Title' onChange={(e)=>{setTitle(e.target.value)}}  type="text"/>
          <input value={description} placeholder='Description' onChange={(e)=>{setDescription(e.target.value)}}  type="text"/>

            <TinyMCEComponent callback={tinyCallback}/>
          <input onChange={(e)=>{setImageURL(e.target.files[0])}} id="imageURL" name="imageURL" type="file" accept="image/*" />
          <button onClick={submitHandler}>Submit</button>
        </form>

      </div>
  );
};
