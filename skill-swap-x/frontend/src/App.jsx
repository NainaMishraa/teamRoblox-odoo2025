import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Browse from "./pages/Browse";

function App() {
  return (
    <Router>
      <div className="bg-black min-h-screen text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/browse" element={<Browse />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;