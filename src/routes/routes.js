import React from "react"
import { Router } from "react-router-dom"
import DashboardRoutes from "./DashboardRoutes"
import HomeRoutes from "./HomeRoutes"

export default function Routes() {
  return (
    <Router>
      <HomeRoutes />
      <DashboardRoutes />
    </Router>
  );
};
