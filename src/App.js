import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Routes/Home/home.component";
import Navigation from "./Component/Navigation/navigation.component";
import Signin from "./Routes/Sign-In/Signin.component";

const Shop = () => {
  return <h1>I'm a Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
