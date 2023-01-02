import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Navbar from "./../Navbar/Navbar";
import { Navigate } from "react-router-dom";
import Login from "../Login/Login";
export default function Logout({ setIsLogInUser }) {
  // let [isLogInUser,setIsLogInUser]=(false);

  function makeLogOut() {
    setIsLogInUser(false);
    localStorage.removeItem("idToken");
    goToLogin();
    let path = "/";
  }

  useEffect(() => {
    makeLogOut();
  }, []);

  // let [msgError,setMsgError]=useState("");
  let navegate = useNavigate();
  function goToLogin() {
    let path = "/";
    //  navegate(path);
  }

  return (
    <>
      <Navigate to="/login" />
    </>
  );
}
