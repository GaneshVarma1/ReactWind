import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <div 
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <div className="absolute inset-0 mouse-gradient pointer-events-none"></div>
      <div className="container mx-auto px-4 py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Beautiful React Components
              <span className="gradient-text"> Made Easy ✨</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Production-ready components for your next React project. Free, open-source, and fully customizable. 🚀
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/components')}
              className="fancy-button px-8 py-4 shadow-lg"
            >
              Get Free Components 🎁
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
              <Player
                autoplay
                loop
                src="https://lottie.host/0d5addb9-d995-446b-b38f-c6bfe79abd1e/lwlERW6itQ.json"
                style={{ width: '100%', height: 'auto', maxWidth: '600px', margin: '0 auto' }}
                className="dark:brightness-90"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};