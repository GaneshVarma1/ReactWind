import React from "react";
import { motion } from "framer-motion";
import { Menu, Moon, Sun, CircleUser } from "lucide-react";

const Header: React.FC = () => {
  return (
    <div className="relative">
      {/* Gradient Border Wrapper */}
      <div className="p-[0.5px] rounded-full bg-gradient-to-r from-white via-white-500 to-gray-500 animate-spin-gradient">
        <div className="bg-white dark:bg-black backdrop-blur-md rounded-full shadow-lg">
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo (Centered) */}
              <div className="flex-1 flex justify-center">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                  className="flex items-center space-x-2"
                >
                  {/* Image */}
                  <img
                    src="src/icon.png"
                    alt="Logo"
                    className="w-auto h-6 rounded-full border border-gray-300 dark:border-gray-700"
                  />
                  {/* Text */}
                  <span className="font-bold text-gray-900 dark:text-white text-xl">
                    ReactWind
                  </span>
                </motion.div>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex space-x-6 absolute left-6">
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
              <div className="flex items-center space-x-4 absolute right-6">
                {/* Dark/Light Mode Toggle */}
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition"
                >
                  <Moon className="dark:hidden w-5 h-5 text-black" />
                  <Sun className="hidden dark:block w-5 h-5 text-white" />
                </motion.button>

                {/* Login Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="flex items-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-medium shadow-md transition"
                >
                  Login
                  <CircleUser className="ml-2 w-4 h-4" />
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
