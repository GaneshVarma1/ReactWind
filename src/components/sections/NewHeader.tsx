import React from "react";
import { motion } from "framer-motion";
import { Menu, ChevronDown, Moon, Sun, Download } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Border Wrapper */}
      <div className="p-[0.5px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-spin-gradient">
        <div className="bg-white dark:bg-black backdrop-blur-md rounded-full shadow-lg">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="flex items-center"
                ></motion.div>
                <span className="font-bold text-gray-900 dark:text-white text-xl">
                  ReactWind
                </span>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6">
                {["Resources", "Pricing", "Documentation", "GitHub"].map(
                  (item) => (
                    <motion.a
                      key={item}
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white text-sm transition-all"
                    >
                      {item}
                    </motion.a>
                  )
                )}
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center space-x-4">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                >
                  <Moon className="dark:hidden w-5 h-5 text-black" />
                  <Sun className="hidden dark:block w-5 h-5 text-white" />
                </motion.button>

                {/* Profile Avatar */}
                <motion.div whileHover={{ scale: 1.1 }}>
                  <img
                    src="https://via.placeholder.com/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
                  />
                </motion.div>

                {/* Dropdown Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
                >
                  Dashboard
                  <ChevronDown className="ml-2 w-4 h-4" />
                </motion.button>

                {/* Hamburger Menu for Mobile */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  className="md:hidden p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full"
                >
                  <Menu className="text-gray-700 dark:text-gray-300 w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
