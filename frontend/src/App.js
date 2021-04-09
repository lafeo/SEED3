import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import AddNewSeed from './components/AddSeed';
import SignUpComponent from "./components/SignUp";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/log-in' component={Login} />
          {/*<Route exact path='/sign-up' component={SignUp} />*/}
          <Route exact path='/add-new-seed' component={AddNewSeed}/>
          <Route exact path='/sign-up' component={SignUpComponent}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
