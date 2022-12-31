import "./App.css";
import React from "react";
import { NavigationBar } from "./components/Navbar/NavigationBar";
import { AddBill } from "./components/Pages/AddBill";
import { AllBills } from "./components/Pages/AllBills";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <AddBill />
      <AllBills />
    </div>
  );
}

export default App;
