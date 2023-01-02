import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Profile({ setLoginData }) {
  let [userData, setUserData] = useState({
    idToken: localStorage.getItem("idToken"),
    password: "",
    returnSecureToken: true,
  });

  function getFormValue(e) {
    console.log("gb");
    let myUserData = { ...userData };
    myUserData[e.target.name] = e.target.value;
    setUserData(myUserData);
    console.log(userData);
  }

  async function submit(e) {
    e.preventDefault();
    console.log(userData);
    let data = await axios.post(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyBZdCKiiYVIpvBc_3oEziG03bVq5Oa2M2c",
      userData
    );
    //setTokenData(true);
    console.log(data);
    if (data.status == 200) {
      console.log("success");
      console.log(data);

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
    <div className="login">

   
    <div className="signup">
      <h3>Change your password</h3>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          type="password"
          onChange={(e) => getFormValue(e)}
          name="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
        />
      </div>
<div className="change">

      <button className="submit" type="button" onClick={(e) => submit(e)}>
        Submit
      </button>
       </div>
</div>
    </div>
  );
}
