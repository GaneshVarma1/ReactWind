import React from 'react';
import { motion } from 'framer-motion';

const texts = [
  "Beautiful React Components ✨",
  "Production Ready 🚀",
  "Fully Customizable 🎨",
  "Dark Mode Support 🌙",
  "Responsive Design 📱",
  "Modern & Clean UI 💅",
];

export const MarqueeText = () => {
  return (
    <div className="bg-gradient-to-r from-gray-50 via-white to-gray-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    py-8 overflow-hidden">
      <div className="relative h-8 overflow-hidden">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
          className="flex absolute whitespace-nowrap"
        >
          {[...texts, ...texts].map((text, index) => (
            <div
              key={index}
              className="mx-8 text-xl font-semibold text-gray-900 dark:text-white transform-gpu"
            >
              {text}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}