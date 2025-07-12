import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (err) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md mt-10 bg-gray-900 rounded shadow">
      <h2 className="text-2xl mb-4">Register</h2>
      <form onSubmit={handleRegister}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 bg-gray-800 mb-4"
        />
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 bg-gray-800 mb-4"
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 bg-gray-800 mb-4"
        />
        <button type="submit" className="w-full bg-red-600 p-2 hover:bg-red-700">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;