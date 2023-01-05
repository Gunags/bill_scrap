import React from "react";
import { UserLogin } from "./components/login/UserLogin";
import { AdminLogin } from "./components/login/AdminLogin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import bg from "./Image/2RNb.gif";
export const App = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="App" style={myStyle}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
};
