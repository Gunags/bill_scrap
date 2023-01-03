import React from "react";
import { NavigationBar } from "./components/Navbar/NavigationBar";
import { AddBill } from "./components/Pages/AddBill";
import { AllBills } from "./components/Pages/AllBills";
import { Form } from "./components/Pages/Form";
function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Form />
    </div>
  );
}

export default App;
