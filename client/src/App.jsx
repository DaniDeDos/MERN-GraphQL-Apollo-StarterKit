import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// imports components
import Home from "./Components/Home/Home.jsx";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
