import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';
import { Logo } from '../Header/Logo';

export const FooterMinimal = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <Logo />
            <span
             className="text-sm text-gray-600 dark:text-gray-400">
            Made with <Heart className="inline w-4 h-4 text-red-500" /> by {' '}
            <a 
              href="https://linkedin.com/in/sriganeshshiramshetty" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline dark:text-blue-400"
            >
            Sri Shiramshetty
            </a>
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://github.com/GaneshVarma1"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://www.instagram.com/varmaaa.x_/"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="https://linkedin.com/in/sriganeshshiramshetty"
              className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-5 h-5" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};