import React ,{useState,useEffect} from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import CheckUserTokenValidity from "../shared/LoginChecker";
import Navbar from "../Navbar";
function Home(props) {

  return (
    <>
        {props.userDetailsLoaded ?
            (<>
                <HeroSection userDetails={props.userDetails} isLoggedIn={props.isLoggedIn} setIsUserLoggedIn={props.setIsUserLoggedIn}/>
            <Cards isLoggedIn={props.isLoggedIn}/>
            <Footer />
            </>)
            :null}
    </>
  );
}

export default Home;
