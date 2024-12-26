import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeContainerProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  duration?: number;
  className?: string;
}

export const MarqueeContainer = ({
  children,
  direction = 'left',
  duration = 25,
  className = '',
}: MarqueeContainerProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        animate={{
          x: direction === 'left' ? [-2000, 0] : [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration,
            ease: "linear",
          },
        }}
        className="flex absolute"
      >
        {children}
      </motion.div>
    </div>
  );
};