import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Tool from "./components/Tool";
import Result from "./components/Result";
import Navbar from "./components/Navbar";
import React, { useState } from "react";

function App() {
  // hook (state hook: has data/states that will change over time)
  const [currency1, setcurrency1] = useState(""); // creates am array with [variable (selected Page), updater function]
  const [currency2, setcurrency2] = useState(""); // creates am array with [variable (selected Page), updater function]
  const [amount, setamount] = useState(0); // creates am array with [variable (selected Page), updater function]
  const [compareDate, setCompareDate] = useState("");

  const handleInput = (input1 : string, input2 : string, input3 : number, input4 : string) => {
    setcurrency1(input1);
    setcurrency2(input2);
    setamount(input3);
    setCompareDate(input4);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool" element={<Tool onInput={handleInput}/>} />
        <Route path="/result" element={<Result currency1={currency1} currency2={currency2} amount={amount} compareDate={compareDate}/>} />
      </Routes>
    </>
  );
}

export default App;
