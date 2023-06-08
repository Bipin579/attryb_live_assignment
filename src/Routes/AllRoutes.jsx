import React from "react";
import { Route, Routes } from "react-router-dom";
import Domains from "../Components/Domains";
import Dashboard from "../Pages/Dashboard";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/domains" element={<Domains />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
