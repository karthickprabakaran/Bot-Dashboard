import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";  

const Login = () => {
  const { loginUser } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const user = await loginUser(email, password);
      alert("Login successful!");
      console.log("Logged in user:", user);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleLogin} className="w-full max-w-md space-y-6">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Password</label>
          <input
            type="password"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;