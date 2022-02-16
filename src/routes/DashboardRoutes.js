import React, { Suspense } from "react"
import { Route, Router } from "react-router-dom"
import { PATH } from "../constants/path"
import Loading from "../Loading/Loading"
import Dashboard from "../pages/Dashboard"

export default function DashboardRoutes() {
  return (
    <Router>
      <Route
        path={PATH.DASHBOARD}
        element={<Dashboard />}
      />
    </Router>
  );
};
