import React from "react";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
      </Routes>
    </div>
  );
}

export default App;
