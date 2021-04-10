import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../constants";
import TinyMCEComponent from "./TinyMCEComponent";
import styled from "styled-components";

export default function AddCrawler() {
  function tinyCallback(value) {
    setBody(value);
  }

  const TOKEN =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imt1bmFsYmhhdGlhQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ikt1bmFsIiwibGFzdG5hbWUiOiJCaGF0aWEiLCJ1c2VybmFtZSI6IktCaGF0aWEiLCJpZCI6IjYwNzA1MGYyN2Y5ZmI1MDNlNzVkNTA4MCIsIm51bWJlck9mU2VlZHNXcml0dGVuIjo1LCJudW1iZXJPZkNyYXdsc1dyaXR0ZW4iOjAsImlhdCI6MTYxODAxMzgzNiwiZXhwIjoxNjE4MDI0NjM2fQ.UrvgUTlwXoUcIBVY9ZIP8dx4pODVGRwNsBeBObZ1VVk";

  const [description, setDescription] = useState("The classic tale");
  const [body, setBody] = useState("");

  const submitHandler = async (e) => {
    const detailsToSend = {
      description: description,
      body: body,
      parentWritingId: "6070da14ad26c886066c8c81",
    };
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
          <TinyMCEComponent callback={tinyCallback} />
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
