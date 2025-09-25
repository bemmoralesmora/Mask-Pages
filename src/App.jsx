import { useState, useEffect } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import "./App.css";
import { LandingPage } from "./page/Landing/landing.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
}

export default App;
