import "./App.css";
import "./index";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Navbar, Register } from "./components";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
