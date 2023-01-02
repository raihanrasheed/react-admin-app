import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

import Navbar from "../Navbar/Navbar";
import { jwtDecode } from "jwt-decode";
export const UserContext = React.createContext;
export default function Login({ setLoginData }) {
  // let [tokenData,setTokenData] =false;

  let [userData, setUserData] = useState({
    email: "",
    password: "",
    returnSecureToken: true,
  });

  function getFormValue(e) {
    let myUserData = { ...userData };
    myUserData[e.target.name] = e.target.value;
    setUserData(myUserData);
    console.log(userData);
  }

  async function submit(e) {
    e.preventDefault();

    let data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZdCKiiYVIpvBc_3oEziG03bVq5Oa2M2c",
      userData
    );
    //setTokenData(true);
    console.log(data);
    if (data.status == 200) {
      console.log("success");
      console.log(data);
      localStorage.setItem("idToken", data.data.idToken);
      //console.log(isloginUser);
      // <UserContext.Provider value={isLoginUser}>
      // <Navbar />
      //   </UserContext.Provider>
      setLoginData(true);
      goToHomePage();
    }
  }
  let navigate = useNavigate();
  function goToHomePage() {
    let path = "/";
    navigate(path);
  }

  return (
    <>
      <form onSubmit={submit}>
        <div className="login">
          <div className="signup">
            <label htmlFor="name">Login</label>
          </div>
          <div className="form-group my-3">
            <label htmlFor="name">Name</label>
          </div>
          <div>
            <input
              onChange={getFormValue}
              placeholder="name"
              type="text"
              name="name"
              id="name"
              min="2"
              max="22"
              className="form-control"
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <div>
              <input
                type="email"
                name="email"
                required
                onChange={getFormValue}
                className="form-control"
                id="email"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="form-group mt-1">
            <label htmlFor="exampleInputPassword1">Password</label>
            <div>
              <input
                type="password"
                name="password"
                required
                onChange={getFormValue}
                className="form-control"
                id="Password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="form-check mt-5">
            <button type="submit" className="submit">
              Login
            </button>
          </div>
          <div>
            <li className="nav-item">
              <a className="createnewaccount" href="register">
                Create new account
              </a>
            </li>
          </div>{" "}
        </div>
      </form>
    </>
  );
}
