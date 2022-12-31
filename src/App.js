
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Login from "./Component/Login/Login";
import Register from "./Component/Register/Register";
//import Logout from "./Component/Logout/Logout";
import { Navigate, Route, Routes } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import ProtectedRoutes from "./Component/ProtectedRoutes/ProtectedRoutes";
import "./App.css";
import { useState, useEffect } from "react";
//import { jwtDecode } from 'jwt-decode';


function App() {
  let [isLoginUser, setisLoginUser] = useState(false);
  let [isLogoutUser, setIsLogoutUser] = useState(false);

  function setUserDate() {
    let idToken = localStorage.getItem("idToken");
    if (idToken) {
      //let decoded = jwtDecode(idToken);
    //  console.log(decoded);
      setisLoginUser(true);
      console.log(Date.now())
    //   if(decoded.exp * 1000 <  Date.now()){
       // console.log('yessssssssss');
        setisLoginUser(false);
       }
      //  else
      //   { setisLoginUser(true)}
      // }
      // else {
        setisLoginUser(false)
      //}

     // console.log("hjghjhj");
      //setLoginData(decoded);

      //console.log(loginData);
    
  }
  useEffect(() => {
    if (localStorage.getItem("idToken")) {
      setUserDate();
      //setisLoginUser(true);
    }
  }, []);

  function goToLogin() {
    localStorage.removeItem("idToken");
   // setisLoginUser(null);
   setisLoginUser(false)
    Navigate("/login");
  }

  // let navigate=useNavigate();
  //  function goToLogin(){
  //   let path= '/login';
  //   navigate(path);
  // }

  return (
    <div className="">
      <Navbar isLoginUser={isLoginUser} logout={goToLogin} />
      <div className="container">
        <Routes>

          <Route element={<ProtectedRoutes loginData={isLoginUser} />}>
            
            <Route path="profile" element={<Profile setLoginData={setisLoginUser}  />}></Route>
           
 </Route>

          <Route
            path="login"
            element={<Login setLoginData={setisLoginUser} />}
          ></Route>
             <Route path="register" element={<Register />}></Route>
          {/* <Route path="login" element={<Logout />}></Route> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;