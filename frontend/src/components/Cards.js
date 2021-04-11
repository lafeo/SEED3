import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { BACKEND_URL } from "../constants";

function Cards(props) {
  const [allSeeds, setAllSeeds] = useState([]);
  const [showSeeds, setShowSeeds] = useState(false);
  useEffect(() => {
    axios
      .get("http://localhost:8010/writing-routes/get-all-seeds/")
      .then((allSeeds) => {
        console.log(allSeeds.data);
        setAllSeeds(allSeeds.data.allSeeds);
        setShowSeeds(true);
        console.log(BACKEND_URL);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function Shuffle(array) {
    let ctr = array.length,
      temp,
      index;

    while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = array[ctr];
      array[ctr] = array[index];
      array[index] = temp;
    }
    return array;
  }

  return (
    <div className="cards">
      <h1>Check out these EPIC Articles written by some top authors!</h1>
      {showSeeds ? (
        <div className="cards__container">
          {Shuffle(allSeeds)
            .splice(0, 8)
            .map((seed) => (
              <CardItem
                isLoggedIn={props.isLoggedIn}
                crawler={seed}
                key={seed._id}
              />
            ))}
        </div>
      ) : null}
      <AddLinks>
        <Link
          to="/all-seeds"
          style={{
            color: "white",
            textDecoration: "none",
            borderBottom: "2px solid white",
          }}
        >
          Show all
        </Link>
      </AddLinks>
    </div>
  );
}

const AddLinks = styled.div`
  text-decoration: none;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease-out all;
  &:hover {
    transform: scale(1.1);
  }
`;

export default Cards;
