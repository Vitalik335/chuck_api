import React from "react";
import './App.css';
import './Scrollbar.css';
import './List.css';
import Jokes from "./Components/Jokes";
import Home from "./Components/Home";
import Favorite from "./Components/Favorite";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="jokes" element={<Jokes />} />
        <Route path="favorite" element={<Favorite />} />
      </Routes>
    </div>
  );
}

export default App;
