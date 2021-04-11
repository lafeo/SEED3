import React, {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Login from "./components/pages/Login";
import SignUp from "./components/SignUp";
import AddCrawler from "./components/AddCrawler";
import AddNewSeed from "./components/AddNewSeed";
import SeedDetailsComponent from "./components/pages/SeedDetails";
import CheckUserTokenValidity from "./components/shared/LoginChecker";



function App() {

  const TOKEN = localStorage.getItem('TOKEN');
  const [isLoggedIn,setIsLoggedIn]  = useState(false);
  const [userDetails,setUserDetails] = useState({});
  const [userDetailsLoaded,setUserDetailsLoaded] = useState(false);
  function setIsUserLoggedIn(bool,userDetails){
    setUserDetailsLoaded(false);
    console.log("Set is user logged in called!" + bool);
    setUserDetails(userDetails);
    setIsLoggedIn(bool);
    setUserDetailsLoaded(true);
  }

  useEffect(()=>{
    CheckUserTokenValidity(TOKEN).then(response=>response.data).then(response=>{
      setIsLoggedIn(response.success);
      setUserDetails(response.userData);
      setUserDetailsLoaded(true);
      console.log(isLoggedIn);
      console.log(response.userData);


    }).catch(err=>{
          console.log(err);
          setUserDetailsLoaded(true);
        }


    );
  },[])

  return (
    <>
      <Router>
        {userDetailsLoaded ? <Navbar isLoggedIn={isLoggedIn}
                                     loggedInCallback={setIsUserLoggedIn}/>:null}

        <Switch>
          <Route exact path="/" component={()=><Home setIsUserLoggedIn={setIsUserLoggedIn} isLoggedIn={isLoggedIn} userDetails={userDetails}
                                                     userDetailsLoaded={userDetails}/>}  />
          <Route exact path="/services" component={Services} />
          <Route exact path="/log-in" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/add-new-seed" component={AddNewSeed} />
          <Route exact path="/add-new-crawler" component={AddCrawler} />
          <Route exact path="/seed-details" component={SeedDetailsComponent}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
