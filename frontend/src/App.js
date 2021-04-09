import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' exact component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/log-in' component={Login} />
          <Route exact path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
