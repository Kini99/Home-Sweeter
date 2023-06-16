import React from "react";
import { Route, Routes } from "react-router-dom";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import Home from "../Pages/Home";
import Property from "../admin/propertyList/Property";
import EditProperty from "../admin/propertyList/EditProperty";
import AddProperty from "../admin/add property/AddProperty";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/adminProperty" element={<Property />} />
      <Route path="/edit/:id" element={<EditProperty />} />
      <Route path="/addProperty" element={<AddProperty />} />
      {/* <Route path="/buyproduct" element={<Buyproduct />} /> */}
    </Routes>
  );
};
