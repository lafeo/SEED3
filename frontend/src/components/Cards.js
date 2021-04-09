import React,{useEffect,useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from "axios";

import {BACKEND_URL} from "../constants";


function Cards() {
  const [allSeeds,setAllSeeds] = useState([]);
  const [showSeeds,setShowSeeds] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8010/writing-routes/get-all-seeds/').then(allSeeds=>{
      console.log(allSeeds.data);
      setAllSeeds(allSeeds.data.allSeeds);
      setShowSeeds(true);
      console.log(BACKEND_URL);
    }).catch(err=>{
      console.log(err);
    })


  },[]);

  function renderFirstFive(){
    return allSeeds.splice(5).map(seed=>(
          <CardItem
              src={BACKEND_URL+seed.imageURL}
              text={seed.title}
              label={seed.author}
              path='/services'
          />
    ))
  }

  return  (
      <div className='cards'>
    <h1>Check out these EPIC Articles written by some top authors!</h1>
        {showSeeds ? ( <div className='cards__container'>
          <div className='cards__wrapper'>
            <ul className='cards__items'>
              <CardItem
                  src={BACKEND_URL + allSeeds[0].imageURL}
                  text={allSeeds[0].title}
                  label='Adventure'
                  path='/services'
              />
              <CardItem
                  src={BACKEND_URL + allSeeds[1].imageURL}
                  text={allSeeds[1].title}
                  label='Luxury'
                  path='/services'
              />
              <CardItem
                  src={BACKEND_URL+allSeeds[2].imageURL}
                  text={allSeeds[2].title}
                  label={allSeeds[2].author}
                  path='/services'
              />
            </ul>
          </div>
        </div>) : null}
  </div>)

}

export default Cards;
