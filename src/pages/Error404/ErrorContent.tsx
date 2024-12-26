import { motion } from 'framer-motion';

export const ErrorContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center lg:text-left"
    >
      <h1 className="text-8xl font-bold text-primary-600 dark:text-primary-400 mb-4">
        404
      </h1>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300">
        Oops! The page you're looking for seems to have wandered off into the digital wilderness. 🌲
      </p>
    </motion.div>
  );
};