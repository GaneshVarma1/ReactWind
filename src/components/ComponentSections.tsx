import React, { useState } from 'react';
import { Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ComponentSectionProps {
  title: string;
  children: React.ReactNode;
  code: string;
}

export const ComponentSection = ({ title, children, code }: ComponentSectionProps) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className="mb-16">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{title}</h2>
        <button
          onClick={() => setShowCode(!showCode)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <Code2 className="w-4 h-4" />
          <span>{showCode ? 'Hide Code' : 'View Code'}</span>
        </button>
      </div>

      <AnimatePresence>
        {showCode ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mb-6 overflow-hidden"
          >
            <pre className="p-4 bg-gray-900 rounded-lg overflow-x-auto">
              <code className="text-sm text-gray-100">{code}</code>
            </pre>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {children}
    </div>
  );
};