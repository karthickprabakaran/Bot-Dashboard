import React from "react";
import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { isLoggedIn, currentUser, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-orange-600 font-bold text-lg">
              Delhivery <br /> Dashboard
            </span>
          </div>

          {isLoggedIn ? (
            <>
              <nav className="flex space-x-6">
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  Dashboard
                </button>
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  Bots Status 
                </button>
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  Task Allocation
                </button>
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  Task Queue
                </button>
              </nav>

              <div className="flex items-center space-x-2">
                <img
                  src="https://via.placeholder.com/32"
                  alt="User Avatar"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-gray-700">{currentUser?.name}</span>
                <button
                  onClick={logout}
                  className="text-red-500 hover:text-red-600 ml-2"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <nav className="flex space-x-6">
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                  Login
                </button>
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
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