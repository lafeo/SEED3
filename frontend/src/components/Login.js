import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { BACKEND_URL } from "../constants";

const Login = () => {
  const [email, setEmail] = useState("aryamannsingh9@gmail.com");
  const [password, setPassword] = useState("15052002");

  const submitHandler = async (e) => {
    const dataToSend = { email: email, password: password };
    e.preventDefault();
    console.log(dataToSend);

    axios
      .post(`${BACKEND_URL}/user-routes/sign-in/`, dataToSend, {
        headers: { "Content-Type": "application/json" },
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((event) => console.log(event.message));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <Label>Email: </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <Label>Password: </Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <Input type="submit" value="Login" />
        {/* <Button onClick={protect}>Get Crawling!</Button> */}
      </form>
    </div>
  );
};

const Label = styled.label`
  font-size: 2rem;
  padding: 2rem;
  border-radius: 20%;
`;

const Input = styled.input`
  padding: 0.5rem 2rem;
  margin: 1rem;
`;

const Button = styled.button`
  padding: 0.5rem 2rem;
  margin: 1rem;
`;

export default Login;
