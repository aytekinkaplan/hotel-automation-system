import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hotels from "./pages/Hotels";
import Users from "./pages/Users";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/users" element={<Users />} />
        {/* Diğer rotalar */}
      </Routes>
    </Router>
  );
}

export default App;
