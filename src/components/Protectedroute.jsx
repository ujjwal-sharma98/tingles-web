import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const getCookie = (name) => {
  const cookies = document.cookie.split("; ");
  const cookie = cookies.find((c) => c.startsWith(name + "="));
  return cookie ? cookie.split("=")[1] : null;
};

const ProtectedRoute = () => {
  const token = getCookie("token");

  return token ? <Outlet /> : <Navigate to="/signup" replace />;
};

export default ProtectedRoute;
