import React from "react";
import Cars from "./pages/Cars";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="cars" element={<Cars />} />
        <Route path="detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
