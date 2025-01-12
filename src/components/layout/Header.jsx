import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const path = location.pathname.split("/")[1] || "cryptocurrencies";

  const navItems = [
    { name: "Crypto Taxes", path: "/crypto-taxes" },
    { name: "Free Tools", path: "/tools" },
    { name: "Resource Center", path: "/resources" },
  ];

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-28 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-blue-600 font-bold text-xl">
              <img src="logo.svg" alt="" />
            </Link>
            <nav className="hidden md:flex items-center space-x-2">
              <Link
                to="/cryptocurrencies"
                className="text-sm text-gray-500 hover:text-gray-900"
              >
                Cryptocurrencies
              </Link>
              <span className="text-gray-300">/</span>
              <span className="text-sm text-gray-900 capitalize">{path}</span>
            </nav>
          </div>

          {/* Navigation */}
          <div className="flex items-center space-x-6">
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-700 hover:text-gray-900"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>

            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 hover:text-gray-900">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
