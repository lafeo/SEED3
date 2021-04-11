import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link,useHistory } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios'
import {BACKEND_URL} from "../constants";
import CheckUserTokenValidity from "./shared/LoginChecker";
function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [isLoggedIn,setIsLoggedIn] = useState(props.isLoggedIn);
  const history  = useHistory();
  const TOKEN = localStorage.getItem('TOKEN');
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    setIsLoggedIn(props.isLoggedIn);



    showButton();
  },[]);

  function onLogOut(){
    localStorage.removeItem('TOKEN');
    console.log("Logged out!");
    setIsLoggedIn(false);

    props.loggedInCallback(false,{});
    history.push('/');

  }


  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <div className="navbar-logo">
            <Link to='/' onClick={closeMobileMenu}>
              <img src="/MAIN_LOGO.png" id={'main-logo-navbar'}/>
            </Link>
          </div>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
              All Seeds
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/log-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Our Portals
              </Link>
            </li>


          </ul>
          {isLoggedIn ?<Button onClick={onLogOut} buttonStyle='btn--outline'>Log Out</Button>:null}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
