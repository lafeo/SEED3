import React, { useEffect, useState } from "react";
import "../../App.css";
import CardItem from "../CardItem";
import axios from "axios";

import { BACKEND_URL } from "../../constants";

export default function Services() {
  const [allSeeds, setAllSeeds] = useState([]);
  const [showSeeds, setShowSeeds] = useState(false);
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}writing-routes/get-all-seeds/`)
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
    // <div  className='services'>
    <div className="cards" id="cards">
      <h1 style={{ padding: "2rem", marginTop: "1rem" }}>All Seeds</h1>
      {showSeeds ? (
        <div className="cards__container">
          {Shuffle(allSeeds)
            .splice(0, 21)
            .map((seed) => (
              <CardItem crawler={seed} key={seed._id} />
            ))}
        </div>
      ) : null}
    </div>
  );
}
