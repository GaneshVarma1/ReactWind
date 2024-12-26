import React from 'react';
import { motion } from 'framer-motion';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';

export const HeaderExamples = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="headers">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Headers</h2>

        {/* Header 1: Modern with Search */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div className="container mx-auto">
              <div className="flex items-center h-16 px-4">
                <div className="flex items-center flex-1">
                  <span className="text-xl font-bold text-primary-600">SRI</span>
                  <nav className="hidden md:flex ml-8 space-x-4">
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Home
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      Products
                    </a>
                    <a href="#" className="text-gray-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium">
                      About
                    </a>
                  </nav>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="relative hidden md:block">
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-64 pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                    <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                  </div>
                  <button className="p-2 text-gray-600 hover:text-primary-600">
                    <User className="h-5 w-5" />
                  </button>
                  <button className="md:hidden p-2 text-gray-600 hover:text-primary-600">
                    <Menu className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </header>
        </div>

        {/* Header 2: E-commerce Style */}
        <div className="mb-16 rounded-xl overflow-hidden shadow-lg">
          <header className="bg-white dark:bg-gray-900">
            <div className="container mx-auto">
              <div className="flex flex-col">
                <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                  <span className="text-xl font-bold text-primary-600">Yamazon</span>
                  <div className="flex items-center space-x-4">
                    <button className="p-2 text-gray-600 hover:text-primary-600">
                      <Search className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary-600">
                      <User className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-primary-600 relative">
                      <ShoppingCart className="h-5 w-5" />
                      <span className="absolute -top-1 -right-1 bg-primary-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                        3
                      </span>
                    </button>
                  </div>
                </div>
                <nav className="flex items-center justify-center h-12 space-x-8">
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">New</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Women</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Men</a>
                  <a href="#" className="text-gray-600 hover:text-primary-600 text-sm font-medium">Sale</a>
                </nav>
              </div>
            </div>
          </header>
        </div>
      </div>
    </section>
  );
};