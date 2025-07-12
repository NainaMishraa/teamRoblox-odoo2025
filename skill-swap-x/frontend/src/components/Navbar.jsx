import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black border-b border-gray-800 py-4 px-6 flex justify-between items-center">
      <h1 className="text-xl font-bold">SkillSwapX</h1>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to="/profile">Profile</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;