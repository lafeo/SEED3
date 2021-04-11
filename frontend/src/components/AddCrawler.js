import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import TinyMCEComponent from "./TinyMCEComponent";
import styled from "styled-components";
import {useHistory} from 'react-router-dom';

export default function AddCrawler(props) {
  function tinyCallback(value) {
    setBody(value);
  }
    const history = useHistory();
  const TOKEN = localStorage.getItem("TOKEN");

  const [description, setDescription] = useState(props.location.state.seed.description);
  const [body, setBody] = useState("");

  const submitHandler = async (e) => {
    const detailsToSend = {
      description: description,
      body: body,
      parentWritingId: props.location.state.seed._id,
    };
    e.preventDefault();
    console.log(detailsToSend);
    axios.post('http://localhost:8010/writing-routes/add-new-crawler',detailsToSend,{
        headers:{
            'Content-Type':"application/json",
            'Authorization':`Bearer ${TOKEN}`
        }
    }).then(response=>{

        console.log("New crawler added!");
        console.log(response);
        history.push('/');

    }).catch(err=>{
        console.log("Error adding new crawler!");
        console.log(err);
    })
  };

  return (
    <div>
      <form>
        <Inputs>
          <label htmlFor={description}>Enter Desc:</label>
          <Input
            value={description}
            placeholder="Description"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            type="text"
          />
        </Inputs>
        {/*<textarea  onChange={(e) => (setBody(e.target.value))} placeholder='Body' name="body2" id="body2"/>*/}
        <TinyMCE>
          <TinyMCEComponent body={props.location.state.body} callback={tinyCallback} />
        </TinyMCE>
        <LastLine>
          <Button onClick={submitHandler}>Submit</Button>
        </LastLine>
      </form>
    </div>
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
`;

const AddSeed = styled.div`
  background-color: #dad8d8;
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const TinyMCE = styled.div`
  margin: 1rem;
`;
