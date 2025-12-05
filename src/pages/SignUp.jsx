import React from "react";

const Signup= () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <form className="w-full max-w-md space-y-6">
        
        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Name</label>
          <input
            type="text"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium text-gray-800 mb-1">Password</label>
          <input
            type="password"
            className="w-full bg-gray-100 p-3 rounded-lg outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-red-400 text-white px-6 py-2 rounded-lg hover:bg-red-500 transition"
          >
            Signup
          </button>
        </div>

      </form>
    </div>
  );
};

export default Signup;