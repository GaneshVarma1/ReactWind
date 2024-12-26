import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';

// Import Lottie JSON
import lottieAnimation from '../assets/lwlERW6itQ.json';

export const Hero = () => {
  const navigate = useNavigate();

  // Mouse gradient effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = document.getElementById('hero-section');
      if (hero) {
        const { clientX: x, clientY: y } = e;
        hero.style.setProperty('--mouse-x', `${x}px`);
        hero.style.setProperty('--mouse-y', `${y}px`);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      id="hero-section"
      className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 
                 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      style={{ '--gradient-color': '129, 140, 248' } as React.CSSProperties}
    >
      {/* Mouse Gradient Effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(300px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.15), transparent)',
          zIndex: 0,
          filter: 'blur(80px)', // Smooth effect
        }}
      ></div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
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
            
            {/* Technology Logos */}
            <div className="flex items-center justify-start gap-4 mt-6">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg"
                alt="JSX"
                className="w-8 h-8"
              />
              <img
                src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
                alt="TailwindCSS"
                className="w-8 h-8"
              />
              <img
                src="https://vite.dev/logo.svg"
                alt="Vite"
                className="w-8 h-8"
              />
              <img
                 src="https://www.svgrepo.com/show/306070/framer.svg"
                 alt="Framer Motion"
                 className="w-8 h-8 filter dark:invert"
              />
              <img
                 src="https://lucide.dev/logo.svg"
                 alt="Lucide Icons"
                 className="w-8 h-8 block dark:hidden"
              />
              <img
                src="https://lucide.dev/logo.dark.svg"
                alt="Lucide Icons Dark"
                className="w-8 h-8 hidden dark:block"
              />
            </div>
          </motion.div>

          {/* Right Side Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl z-0" />
            <div className="relative z-10">
              <Lottie animationData={lottieAnimation} loop autoplay style={{ width: '100%', height: 'auto' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
