
import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../Resources/Images/withward_icon_rainbow.png";

const NavBar = () => {
  var userLogin = JSON.parse(sessionStorage.getItem("user"));
  console.log(userLogin);
  return (
    <header>
      <nav id='navbar'>
        <div className='my-container'>
          <h1 className='logo'>
            <img id='withward-logo' src={logo} alt="Withward Logo"></img>Withward
          </h1>
          <ul>
            <li>
                <NavLink exact to='/' activeClassName='selected'>Profile</NavLink>
            </li>
            <li>
                <NavLink exact to='/withlists' activeClassName='selected'>Withlists</NavLink>
            </li>
            <li>
                <NavLink exact to='/destinations' activeClassName='selected'>Destinations</NavLink>
            </li>
            {userLogin && userLogin.user.isAdmin ? 
            <li>
              <NavLink exact to='/admin' activeClassName='selected'>Admin</NavLink>
            </li> : null }
            <li>
                <NavLink exact to='/login' activeClassName='selected' onClick= {()=> {sessionStorage.removeItem("user")}}>Logout</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;