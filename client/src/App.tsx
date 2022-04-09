import React from "react";
import SignIn from "./pages/signIn/SignIn";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;
