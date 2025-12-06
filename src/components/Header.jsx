import React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");  
  };

  return (
    <header className="bg-white shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <span className="text-orange-600 font-bold text-lg leading-tight">
              Delhivery <br /> Dashboard
            </span>
          </div>

          {isLoggedIn ? (
            <>
              <nav className="flex space-x-6">
                <button
                  onClick={() => navigate("/dashboard")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Dashboard
                </button>

                <button
                  onClick={() => navigate("/bots")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Bots Status
                </button>

                <button
                  onClick={() => navigate("/tasks")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Task Allocation
                </button>

                <button
                  onClick={() => navigate("/taskqueue")} 
                  className="text-gray-700 hover:text-gray-900"
                >
                  Task Queue
                </button>
              </nav>

              <div className="flex items-center space-x-2">
                <img
                  src="https://img.icons8.com/?size=100&id=108639&format=png&color=000000"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />

                <span className="text-gray-700">{currentUser?.name}</span>

                <button
                  onClick={handleLogout}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <nav className="flex space-x-6">
                <button
                  onClick={() => navigate("/login")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Login
                </button>

                <button
                  onClick={() => navigate("/signup")}
                  className="text-gray-700 hover:text-gray-900"
                >
                  Signup
                </button>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;