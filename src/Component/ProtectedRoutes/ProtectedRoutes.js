import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "../Login/Login";

export default function ProtectedRoutes({ loginData }) {
  console.log(loginData);
  return <>{loginData ? <Outlet /> : <Navigate to="login" />}</>;
}
