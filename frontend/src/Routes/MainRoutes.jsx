import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../Components/Home/TopPartOfHomePage/Navbar";
import Footer from "../Components/Home/LastPartofHomePage/Footer";
import HomePage from "../Pages/HomePage";
import { Signin } from "../Pages/Signin";
import { Signup } from "../Pages/Signup";
import { Buyproduct } from "../Pages/BuyProduct/Buyproduct";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import Calculator from "../Pages/Calculator";
import Payment from "../Pages/Payment";

import { AdminSignin } from "../admin/suraj/AdminSignin";
import { AdminSignup } from "../admin/suraj/AdminSignup";
import Property from "../admin/propertyList/Property";
import AddProperty from "../admin/add property/AddProperty";
import EditProperty from "../admin/propertyList/EditProperty";
import User from "../admin/user list/User";
import Admin from "../admin/user list/Admin";

export const MainRoutes = () => {
  const PageRoutes = [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
    {
      path: "/buyproduct",
      element: <Buyproduct />,
    },
    {
      path: "/buyproduct/:id",
      element: <SingleProduct />,
    },
    {
      path: "/calculator",
      element: <Calculator />,
    },
    {
      path: "/payment",
      element: <Payment />,
    },
    {
      path: "*",
      element: <h1>404 Page Not Found</h1>,
    },
  ];

  const AdminPath = [
    {
      path: "/adminsignin",
      element: <AdminSignin />,
    },
    {
      path: "/adminsignup",
      element: <AdminSignup />,
    },
    {
      path: "/adminProperty",
      element: <Property />,
    },
    {
      path: "/addProperty",
      element: <AddProperty />,
    },
    {},
    {
      path: "/editProperty/:id",
      element: <EditProperty />,
    },
    {
      path: "/userlist",
      element: <User />,
    },
    {
      path: "/adminlist",
      element: <Admin />,
    },
  ];

  return (
    <Routes>
      {PageRoutes.map((ele, key) => (
        <Route
          key={key}
          path={ele.path}
          element={
            <>
              <Navbar /> {ele.element} <Footer />
              {/* {ele.element}  */}
            </>
          }
        />
      ))}

      {AdminPath.map((ele, key) => (
        <Route key={key} path={ele.path} element={<>{ele.element}</>} />
      ))}

      {/* <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/buyproduct" element={<Buyproduct />} />
      <Route path="/buyproduct/:id" element={<SingleProduct />} />
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/payment" element={<Payment />} />

      <Route path="/adminsignin" element={<AdminSignin />} />
      <Route path="/adminsignup" element={<AdminSignup />} />
      <Route path="/adminProperty" element={<Property />} />
      <Route path="/addProperty" element={<AddProperty />} />
      <Route path="/editProperty/:id" element={<EditProperty />} /> */}
    </Routes>
  );
};
