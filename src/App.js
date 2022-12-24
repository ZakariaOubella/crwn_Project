import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home/home.component";
import Navigation from "./Component/Navigation/navigation.component";
import Authentication from "./Routes/Authentication/authentication.component";

const Shop = () => {
  return <h1>I'm a Shop Page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
