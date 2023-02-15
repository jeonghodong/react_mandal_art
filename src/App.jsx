import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BigTable from "../Routers/BigTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BigTable />} />
      </Routes>
    </Router>
  );
}

export default App;
