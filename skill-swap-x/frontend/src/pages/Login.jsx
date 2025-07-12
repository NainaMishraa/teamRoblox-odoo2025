import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-md mt-10 bg-gray-900 rounded shadow">
      <h2 className="text-2xl mb-4">Login</h2>
      <form onSubmit={handleLogin}>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;