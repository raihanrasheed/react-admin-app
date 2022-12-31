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
        <ul className=" ">
          <li >
            <h2 className="navbarr1">React Auth </h2>
          </li>
         </ul>
       

          <div>
          <ul className="navbarr2">
                  <li >
                    <a className="navbarr1" href="login">
                      Login
                    </a>
                  </li>
                  </ul>
              </div>      
 </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
          ></button> */}

          <div className="collapse navbar-collapse" id="navbarNav">
            {isLoginUser ? (
              <>
                <li className="nav-item">
                  <NavLink className="navbarr" to="profile">
                    Profile
                  </NavLink>
                </li>

                <li className="nav-item active">
                  <a className="navbarr" href="logout">
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <></>
            )}
            {/* 
            // {!isLoginUser ? (
            //   <>
            //     {" "}
            //     <ul className="navbar-nav ms-auto">
            //       <li className="nav-item">
            //         <a className="navbarr" href="login">
            //           Login
            //         </a>
            //       </li>
            //       <li className="nav-item">
            //         <a className="navbarr" href="register">
            //           Register
            //         </a>
            //       </li>
            //     </ul>
            //   </>
            // ) : (
            //   <>
            //     <ul>
            //       <li className="nav-item">
            //         <a className="l" href="login" onClick={logout}>
            //           Logout
            //         </a>
            //       </li>
            //     </ul>
            //   </>
            // )} */}
          </div>
     
      </div>
    </>
  );
}
