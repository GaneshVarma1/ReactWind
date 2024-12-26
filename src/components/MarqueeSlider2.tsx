import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeSlider2Props {
  items: React.ReactNode[];
  direction?: 'left' | 'right';
  speed?: number;
}

export const MarqueeSlider2: React.FC<MarqueeSlider2Props> = ({
  items,
  direction = 'left',
  speed = 25,
}) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, -1035],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 50/speed,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      <motion.div 
        className="flex whitespace-nowrap"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
};