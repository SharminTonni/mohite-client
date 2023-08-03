import React from "react";
import Home from "../components/Home/Home";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Home></Home>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
