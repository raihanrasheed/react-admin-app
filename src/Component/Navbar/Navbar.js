import React from "react";

import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar({ isLoginUser, logout }) {
  console.log("navbar", isLoginUser);
  return (
    <>
      <div>
        <div className="navbar">
          <li>
            <h2 className="navbarr1">React Auth </h2>
          </li>
        </div>

  

        <div className="collapse navbar-collapse" id="navbarNav">
          {isLoginUser ? (
            <>
            <ul>
              <li className="nav-item">
                <NavLink className="navbarr2" to="profile">
                  Profile
                </NavLink>
              </li>

              <li className="nav-item active">
                <a className="navbarr3" href="logout">
                  Logout
                </a>
              </li></ul>
            </>
          ) : (
            < div className="">
            
                <ul >
                  <li className="nav-item">
                    <a className="navbarr2" href="login">
                      Login
                    </a>
                  </li>
                </ul>
             
            </div>
          )}

        </div>
      </div>
    </>
  );
}
