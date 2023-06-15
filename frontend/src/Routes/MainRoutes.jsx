import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import Home from "../Pages/Home";
import {Buyproduct} from "../Pages/BuyProduct/Buyproduct"

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyproduct" element={<Buyproduct />} />
    </Routes>
  );
};
