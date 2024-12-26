import React from 'react';
import { motion } from 'framer-motion';

interface ErrorActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  primary?: boolean;
}

export const ErrorActionButton = ({ icon, label, onClick, primary }: ErrorActionButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        inline-flex items-center px-6 py-3 rounded-lg font-medium
        transition-colors duration-200
        ${primary 
          ? 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600' 
          : 'bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700'}
      `}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </motion.button>
  );
};