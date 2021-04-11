import React, { Component } from "react";
import axiom from "../axiom.jpg";
import styled from "styled-components";

import "./pages/login.css";
import "./card2.css";

const Card = (props) => {
  return (
    <>
      <CardBody className="card-body">
        <div className="card text-center">
          <div className="overflow">
            <img
              className={"portal-cards-image"}
              src={props.imagePath}
              alt='professionals"'
            ></img>
          </div>
          <div className="text-dark">
            <h4 className="card-title">{props.title}</h4>

            {/* <a href="#" className="btn btn-outline-success">
              Go anywhere
            </a> */}
          </div>
        </div>
      </CardBody>
    </>
  );
};
export default Card;

const CardBody = styled.div`
  cursor: pointer;
  transition: 0.4s ease-out all;
  &:hover {
    transform: scale(1.1);
  }
`;
