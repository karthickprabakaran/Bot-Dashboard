import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !password) {
      return setError("All fields are required");
    }

    try {
      await signup(email, password, name);
      setSuccess("Signup successful!");
      
      setTimeout(() => navigate("/dashboard"), 800);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Signup
        </h2>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Name</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

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

        {error && <p className="text-red-500 text-center text-sm">{error}</p>}
        {success && <p className="text-green-600 text-center text-sm">{success}</p>}

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
          >
            Signup
          </button>
        </div>

        <p className="text-center text-sm text-gray-700">
          Already have an account?
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="text-red-500 ml-1 underline hover:text-red-600"
          >
            Login here
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;