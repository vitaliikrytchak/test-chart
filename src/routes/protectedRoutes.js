import React from "react";
import { Navigate } from "react-router-dom";
import Dashboard from "../components/dashboard/dashboard";

export default function ProtectedRoutes({ auth }) {
  return auth ? <Dashboard /> : <Navigate to="/login" />;
}
