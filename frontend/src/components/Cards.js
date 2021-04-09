import React,{useEffect,useState} from 'react';
import './Cards.css';
import CardItem from './CardItem';
import axios from "axios";
import {BACKEND_URL} from '../constants'

function Cards() {
  const [allSeeds,setAllSeeds] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8010/writing-routes/get-all-seeds/').then(allSeeds=>{
      console.log(allSeeds.data);
      setAllSeeds(allSeeds.data.allSeeds);
    }).catch(err=>{
      console.log(err);
    })


  },[]);



  return (
    <div className='cards'>
      <h1>Check out these EPIC Articles written by some top authors!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={BACKEND_URL+allSeeds[0].imageURL}
              text={allSeeds[0].description}
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text={allSeeds[1].description}
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
