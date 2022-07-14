import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard";

export default function ProtectedRoutes({ auth }) {
  console.log(auth, "from protected route");
  return auth ? <Dashboard /> : <Navigate to="/login" />;
}
