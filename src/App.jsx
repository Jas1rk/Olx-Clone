import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/Signup";
import LoginPage from "./Pages/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signup" element={ <SignupPage/>} />
          <Route exact path="/login" element={<LoginPage/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
