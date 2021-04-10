import React from "react";
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

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
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
