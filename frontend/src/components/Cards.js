import React, { useEffect, useState } from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import axios from "axios";

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
              <CardItem isLoggedIn={props.isLoggedIn} crawler={seed} key={seed._id} />
            ))}
        </div>
      ) : null}
    </div>
  );
}

export default Cards;

/* <CardItem
                src={BACKEND_URL + allSeeds[0].imageURL}
                text={allSeeds[0].title}
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={BACKEND_URL + allSeeds[1].imageURL}
                text={allSeeds[1].title}
                label="Luxury"
                path="/services"
              />
              <CardItem
                src={BACKEND_URL + allSeeds[2].imageURL}
                text={allSeeds[2].title}
                label={allSeeds[2].author}
                path="/services"
              /> */
