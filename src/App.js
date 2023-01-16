import { UserLogin } from "./components/login/UserLogin";
import { AdminLogin } from "./components/login/AdminLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Pages/Home";
import bg from "./Image/2RNb.gif";
import React from "react";
import { UserHome } from "./components/Pages/UserHome";
import { AdminHome } from "./components/Pages/AdminHome";
import { AddBill } from "./components/Pages/AddBill";
import AllBills from "./components/Pages/AllBills";

const App = () => {
  const myStyle = {
    backgroundImage: `url(${bg})`,
    height: "100vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div style={myStyle}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/addbill" element={<AddBill />} />
          <Route path="/allbills" element={<AllBills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

// export const App = () => {

//   return;
//   <div style={myStyle}>
//     APP
//     {/* <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/adminlogin" element={<AdminLogin />} />
//         <Route path="/userlogin" element={<UserLogin />} />
//       </Routes>
//     </Router> */}
//   </div>;
// };
