import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '../Header/Logo';

export const FooterSimple = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center space-y-4">
          <Logo />
          <p className="text-gray-600 dark:text-gray-300 text-center max-w-md">
            Beautiful React components made with ✨ love ✨ for your next project
          </p>
          <div className="flex space-x-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/buildeasy"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://twitter.com/buildeasy"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Twitter className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/company/buildeasy"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 mx-1 text-red-500" />
            <span>by Buildeasy Team</span>
          </div>
        </div>
      </div>
    </footer>
  );
};