import React from "react";
import Homepage from "./components/Homepage/Homepge";
import DashboardItem from "./components/DashboardItem/DashboardItem";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} exact />
        <Route path="/dashboarditem" element={<DashboardItem />} exact/>
      </Routes>
    </>
  );
};

export default App;
