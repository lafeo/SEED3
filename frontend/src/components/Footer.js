import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (

    <Main>
      <div className="footer-container">
        <section className="footer-subscription" style={{ fontSize: "3rem" }}>
          <p
            className="footer-subscription-heading"
            style={{ fontSize: "2rem" }}
          >
            Be a part of an amazing community
          </p>
          <p
            className="footer-subscription-text"
            style={{ fontSize: "1.5rem" }}
          >
            Write stories, books, articles together with the World
          </p>
        </section>
        <Names>
          <p className="footer-subscription-text" style={{ fontSize: "2rem" }}>
            Made with love by:{"  "}
            <br />
            <Line></Line>
          </p>
          <div style={{ fontSize: "1.2rem", fontFamily: "Quicksand" }}>
            <p style={{ fontSize: "1.2rem", fontFamily: "Quicksand" }}>
              Aryamann Ningombam
            </p>
          </div>
          <br />
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ fontFamily: "Quicksand" }}>Chirag Rao</p>
          </div>
          <br />
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ fontFamily: "Quicksand" }}>Raayaan Sahu</p>
          </div>
          <br />
          <div style={{ fontSize: "1.2rem" }}>
            <p style={{ fontFamily: "Quicksand" }}>Kunal Bhatia</p>
          </div>
          <br />
        </Names>
      </div>
    </Main>

  );
}

const Names = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding: 24px;
  color: rgb(226, 226, 226);
  flex-direction: column;
`;

const Main = styled.div`
  font-size: 2rem;
`;

const Line = styled.div`
  background: white;
  height: 0.1rem;
  width: 80%;
  text-align: center;
  align-content: center;
  margin: auto;
  margin-top: 0.5rem;
`;

export default Footer;
