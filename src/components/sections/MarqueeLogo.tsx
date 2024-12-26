import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
  "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
  "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
  "https://download.logo.wine/logo/Porsche/Porsche-Logo.wine.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
  "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
  "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
  "https://download.logo.wine/logo/Porsche/Porsche-Logo.wine.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png",
  "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
  "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1971-now.png",
  "https://download.logo.wine/logo/Porsche/Porsche-Logo.wine.png",
];

const LogoComponent = ({ src, index }: { src: string; index: number }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    className="flex-shrink-0 px-8"
  >
    <img
      src={src}
      alt={`Brand logo ${index + 1}`}
      className="h-12 w-auto filter grayscale hover:grayscale-0 transition-all duration-300 
                 dark:brightness-90 dark:hover:brightness-110 hover:cursor-pointer transform-gpu"
    />
  </motion.div>
);

export const MarqueeLogo = () => {
  return (
    <div className="relative bg-gradient-to-r from-white via-gray-50 to-white 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    py-12 overflow-hidden backdrop-blur-sm">
      <div className="flex flex-col gap-12">
        {/* First row */}
        <div className="relative h-12">
          <motion.div
            animate={{
              x: [0, -2000],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex absolute"
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <LogoComponent key={`row1-${index}`} src={logo} index={index} />
            ))}
          </motion.div>
        </div>

        {/* Second row - reverse direction */}
        <div className="relative h-12">
          <motion.div
            animate={{
              x: [-2000, 0],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear",
              },
            }}
            className="flex absolute"
          >
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <LogoComponent key={`row2-${index}`} src={logo} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}