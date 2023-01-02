import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
import Logout from "./Component/Logout/Logout";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import { useNavigate } from "react-router-dom";

import Protected from "./Component/Protected/Protected";
import "./App.css";
import { useState, useEffect } from "react";
import jwtDecode from "jwt-decode";

function App() {
  let [isLoginUser, setisLoginUser] = useState(false);
  let [isLogoutUser, setIsLogoutUser] = useState(false);

  function setUserDate() {
    let idToken = localStorage.getItem("idToken");
    if (idToken) {
      let decoded = jwtDecode(idToken);
      console.log(decoded);
      setisLoginUser(true);
      console.log(Date.now());
      if (decoded.exp * 1000 < Date.now()) {
        console.log("yessssssssss");
        setisLoginUser(false);
      } else {
        setisLoginUser(true);
      }
      console.log("gttrthtrh");
    } else {
      setisLoginUser(false);
    }
  }
  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      setUserDate();
    }
  }, []);

  function goToLogin() {
    localStorage.removeItem("idToken");
    // setisLoginUser(null);
    setisLoginUser(false);
    Navigate("/login");
  }

  return (
    <div className="">
      <Navbar isLoginUser={isLoginUser} logout={goToLogin} />
      <div className="container">
        <Routes>
          <Route element={<Protected loginData={isLoginUser} />}></Route>
          <Route
            path="profile"
            element={<Profile setLoginData={setisLoginUser} />}
          ></Route>

          <Route element={<Home />} path="/"></Route>

          <Route
            path="login"
            element={<Login setLoginData={setisLoginUser} />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
          <Route
            path="logout"
            element={<Logout setIsLogInUser={setisLoginUser} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
