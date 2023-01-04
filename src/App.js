import React from "react";
import { NavigationBar } from "./components/Navbar/NavigationBar";
import { AddBill } from "./components/Pages/AddBill";
import { AllBills } from "./components/Pages/AllBills";
import { UserLogin } from "./components/login/UserLogin";
import { AdminLogin } from "./components/login/AdminLogin";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <UserLogin />
      <AdminLogin />
      <AddBill />
      <AllBills />
    </div>
  );
}

export default App;
