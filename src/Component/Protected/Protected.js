import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Login/Login";

export default function Protected({ loginData}) {
  console.log(loginData);
  console.log("yeeeeeees");
  return <>{loginData ? <Outlet /> : <Navigate to="login" />}</>;
}
