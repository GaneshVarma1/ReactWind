import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=400&fit=crop",
];

const ImageComponent = ({ src, alt }: { src: string; alt: string }) => (
  <motion.div
    whileHover={{ y: -10, scale: 1.02 }}
    className="flex-shrink-0 px-2 transition-all duration-300"
  >
    <img
      src={src}
      alt={alt}
      className="w-[400px] h-[250px] rounded-xl shadow-lg object-cover 
                 transition-all duration-300 dark:brightness-90 dark:hover:brightness-110
                 hover:shadow-2xl transform-gpu"
    />
  </motion.div>
);

export const MarqueeImages2 = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-50/50 via-white to-gray-50/50 
                    dark:from-gray-900/50 dark:via-gray-800 dark:to-gray-900/50 
                    py-16 overflow-hidden backdrop-blur-sm">
      <div className="flex flex-col gap-8">
        {/* First row */}
        <div className="relative h-[250px] overflow-hidden">
          <motion.div
            animate={{
              x: [0, -2400],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex absolute gap-4"
          >
            {[...images, ...images, ...images].map((image, index) => (
              <ImageComponent
                key={`row1-${index}`}
                src={image}
                alt={`Tech ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="relative h-[250px] overflow-hidden">
          <motion.div
            animate={{
              x: [-2400, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            className="flex absolute gap-4"
          >
            {[...images, ...images, ...images].map((image, index) => (
              <ImageComponent
                key={`row2-${index}`}
                src={image}
                alt={`Tech ${index + 1}`}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}