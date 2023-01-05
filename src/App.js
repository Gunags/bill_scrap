import React from "react";
import { UserLogin } from "./components/login/UserLogin";
import { AdminLogin } from "./components/login/AdminLogin";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import bg from "./Image/2RNb.gif";
function App() {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="App" style={myStyle}>
      <Router basename="/bill_scrap">
        <Routes>
          <Route path="/bill_scrap" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
