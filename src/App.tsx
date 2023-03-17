import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Tool from "./components/Tool";
import Result from "./components/Result";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tool" element={<Tool />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
