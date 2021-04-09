import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Cookies from "js-cookie";

const Login = () => {
  const [user, setUser] = useState();
  const [err, setErr] = useState("");

  //   const refresh = (refreshToken) => {
  //     console.log("Refreshing Token");

  //     return new Promise((resolve, reject) => {
  //       axios
  //         .post("http://localhost:8010/writing-routes/sign-in", {
  //           token: refreshToken,
  //         })
  //         .then((data) => {
  //           if (data.data.success === false) {
  //             setErr("Login Again");
  //             alert("Login Again");
  //             resolve(false);
  //           } else {
  //             const { accessToken } = data.data;
  //             Cookies.set("access", accessToken);
  //             resolve(accessToken);
  //           }
  //         });
  //     });
  //   };

  //   const requestLogin = async (accessToken, refreshToken) => {
  //     console.log(accessToken, refreshToken);
  //     return new Promise((resolve, reject) => {
  //       axios
  //         .post(
  //           "http://localhost:8010/writing-routes/sign-in",
  //           {},
  //           { headers: { authorization: `Bearer ${accessToken}` } }
  //         )
  //         .then(async (data) => {
  //           if (data.data.success === false) {
  //             if (data.data.message === "User not Authenticated") {
  //               setErr("Login Again");
  //               alert("Login Again");
  //               // Set error msg to login again
  //             } else if (data.data.message === "Access Token Expired") {
  //               const accessToken = await refresh(refreshToken);
  //               return await requestLogin(accessToken, refreshToken);
  //             }

  //             resolve(false);
  //           } else {
  //             // Protected route has been accessed, response can be used
  //             setErr("You are logged in");
  //             alert("You are logged in");
  //             resolve(true);
  //           }
  //         });
  //     });
  //   };

  const changeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  //   const protect = async (e) => {
  //     let accessToken = Cookies.get("access");
  //     let refreshToken = Cookies.get("refresh");

  //     accessToken = await hasAccess(accessToken, refreshToken);

  //     if (!accessToken) {
  //     } else {
  //       await requestLogin(accessToken, refreshToken);
  //     }
  //   };

  //   const hasAccess = async (accessToken, refreshToken) => {
  //     if (!refreshToken) return null;

  //     //   Cookie expires
  //     if (accessToken === undefined) {
  //       accessToken = await refresh(refreshToken);
  //       return accessToken;
  //     }

  //     return accessToken;
  //   };

  const submitHandler = async (e) => {
    //   We don't want the page to reload.
    e.preventDefault();
    axios
      .post("http://localhost:8010/user-routes/sign-in", user)
      .then((data) => {
        // const { accessToken, refreshToken } = data.data;

        // Cookies.set("access", accessToken);
        // Cookies.set("refresh", refreshToken);
        console.log(data);
        console.log(user);
      })
      .catch((event) => console.log(event.message));
  };

  console.log(err);
  return (
    <div>
      <form action="" onChange={changeHandler} onSubmit={submitHandler}>
        <div>
          <Label>Email: </Label>
          <Input
            name="email"
            type="email"
            placeholder="Enter your Email Address"
          />
        </div>
        <div>
          <Label>Password: </Label>
          <Input
            name="password"
            type="password"
            placeholder="Enter a password"
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
