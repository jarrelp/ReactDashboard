import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { PATH } from "../constants/path"
import Loading from "../Loading/Loading"
import Home from "../pages/Home";


export default function HomeRoutes() {
  return (
    <Routes>
      <Route
        path={PATH.Home}
        element={<Home />}
      />
    </Routes>
  );
};
