import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tool from "./components/Tool";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  // hook (state hook: has data/states that will change over time)
  const [currency1, setcurrency1] = useState("USD"); // creates am array with [variable (selected Page), updater function]
  const [currency2, setcurrency2] = useState("CAD"); // creates am array with [variable (selected Page), updater function]
  const [amount, setamount] = useState(100); // creates am array with [variable (selected Page), updater function]

  const handleInput = (input1 : string, input2 : string, input3 : number) => {
    alert("hi");
    setcurrency1(input1);
    setcurrency2(input2);
    setamount(input3);
    console.log(currency1, currency2, amount);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool" element={<Tool onInput={handleInput}/>} />
        <Route path="/result" element={<Result currency1={currency1} currency2={currency2} amount={amount}/>} />
      </Routes>
    </>
  );
}

export default App;
