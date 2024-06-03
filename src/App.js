import React, { useContext, useEffect, useState } from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import BackToTop from "./components/BackToTop";
import { Route, Routes } from "react-router-dom";
import RulesDetailPage from "./pages/RulesDetailPage";
import AboutUs from "./pages/AboutUs";
import TenseVerbs from "./pages/TenseVerbs";
import FunSentencesPage from "./pages/FunSentencesPage";
import Login from "./pages/Login";
import LoginBtn from "./components/LoginBtn";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import { LoginContext } from "./context/LoginContext";

function App() {
const {showLogBtn}=useContext(LoginContext);
  return (
    <div>
      <Header />
      {(showLogBtn)&& (<LoginBtn />)}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/rules-details/:category" element={<RulesDetailPage />} />
        <Route path="/tense-Verbs" element={<TenseVerbs />} />
        <Route path="/functional-sentences/:category" element={<FunSentencesPage />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
      <BackToTop />
    </div>
  );
}

export default App;
