import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import SignInPage from "./pages/signin";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          {/* <Route path="/signin" element={<SignInPage />} exact /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
