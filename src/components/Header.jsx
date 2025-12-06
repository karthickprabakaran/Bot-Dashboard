import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { isLoggedIn, currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

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

          <button
            className="lg:hidden text-gray-700 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          <nav className="hidden lg:flex space-x-6">
            {isLoggedIn ? (
              <>
                <button onClick={() => navigate("/dashboard")} className="nav-btn">Dashboard</button>
                <button onClick={() => navigate("/bots")} className="nav-btn">Bots Status</button>
                <button onClick={() => navigate("/tasks")} className="nav-btn">Task Allocation</button>
                <button onClick={() => navigate("/taskqueue")} className="nav-btn">Task Queue</button>
                <button onClick={() => navigate("/analytics")} className="nav-btn">Analytics</button>
              </>
            ) : (
              <>
                <button onClick={() => navigate("/login")} className="nav-btn">Login</button>
                <button onClick={() => navigate("/signup")} className="nav-btn">Signup</button>
              </>
            )}
          </nav>

          {isLoggedIn && (
            <div className="hidden lg:flex items-center space-x-2">
              <img
                src="https://img.icons8.com/?size=100&id=108639&format=png&color=000000"
                alt="User Avatar"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-gray-700">{currentUser?.name}</span>
              <button onClick={handleLogout} className="text-red-500 hover:text-red-600 ml-2">
                Logout
              </button>
            </div>
          )}
        </div>

        {menuOpen && (
          <div className="lg:hidden mt-2 pb-4 border-t">
            <nav className="flex flex-col space-y-3 pt-3">

              {isLoggedIn ? (
                <>
                  <button onClick={() => navigate("/dashboard")} className="mobile-nav-btn">Dashboard</button>
                  <button onClick={() => navigate("/bots")} className="mobile-nav-btn">Bots Status</button>
                  <button onClick={() => navigate("/tasks")} className="mobile-nav-btn">Task Allocation</button>
                  <button onClick={() => navigate("/taskqueue")} className="mobile-nav-btn">Task Queue</button>
                  <button onClick={() => navigate("/analytics")} className="mobile-nav-btn">Analytics</button>

                  <div className="flex items-center space-x-3 mt-4">
                    <img
                      src="https://img.icons8.com/?size=100&id=108639&format=png&color=000000"
                      alt="User Avatar"
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-gray-700">{currentUser?.name}</span>
                  </div>

                  <button onClick={handleLogout} className="text-red-600 font-medium text-left mt-2">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button onClick={() => navigate("/login")} className="mobile-nav-btn">Login</button>
                  <button onClick={() => navigate("/signup")} className="mobile-nav-btn">Signup</button>
                </>
              )}

            </nav>
          </div>
        )}
      </div>

      <style>
        {`
          .nav-btn {
            @apply text-gray-700 hover:text-gray-900;
          }
          .mobile-nav-btn {
            @apply text-gray-700 hover:text-gray-900 text-left;
          }
        `}
      </style>
    </header>
  );
};

export default Header;