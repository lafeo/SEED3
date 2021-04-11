import React, { useState, useEffect } from "react";
import {useHistory}from 'react-router-dom';
import axios from "axios";
import { BACKEND_URL } from "../constants";
import TinyMCEComponent from "./TinyMCEComponent";
import styled from "styled-components";
export default function AddNewSeed() {
  const TOKEN = localStorage.getItem('TOKEN')
  const history = useHistory();
  const [title, setTitle] = useState("Jack and the beanstalk");
  const [imageURL, setImageURL] = useState(null);
  const [description, setDescription] = useState("The classic tale");
  const [body, setBody] = useState(``);




  function tinyCallback(value) {
    setBody(value);
  }
  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("imageURL", imageURL);
    formData.append("description", description);
    formData.append("body", body);
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
    <AddSeed>
      <form>
        <Inputs>
          <label htmlFor={title}>Enter Title: </label>
          <Input
            value={title}
            placeholder="Title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
          />
          <label htmlFor={title}>Enter Desc: </label>
          <Input
            value={description}
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
          />
        </Inputs>
        <TinyMCE>
          <TinyMCEComponent
            style={{ margin: "10rem" }}
            callback={tinyCallback}
          />
        </TinyMCE>
        <LastLine>
          <InputImage
            onChange={(e) => {
              setImageURL(e.target.files[0]);
            }}
            id="imageURL"
            name="imageURL"
            type="file"
            accept="image/*"
            style={{ margin: "2rem", color: "#100828" }}
          />
          <Button onClick={submitHandler}>Submit</Button>
        </LastLine>
      </form>
    </AddSeed>
  );
}

const Button = styled.button`
  padding: 0.3rem 2rem;
  border-radius: 5px;
  margin: 1rem;
  text-align: center;
  cursor: pointer;
  transition: 0.3s all ease-out;
  font-size: 1rem;
  font-weight: bolder;
  &:hover {
    background-color: #100828;
    color: whitesmoke;
  }
`;

const LastLine = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 0.5rem 3rem;
  margin: 1rem;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #100828;
  color: white;
`;

const Inputs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputImage = styled.input`
  padding: 0.5rem 3rem;
  margin: 1rem;
  font-size: 1rem;
  #file-upload-button {
    background-color: black;
  }
`;

const AddSeed = styled.div`
  background: linear-gradient(to top, #100828, whitesmoke);
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
`;

const TinyMCE = styled.div`
  margin: 1rem;
`;
