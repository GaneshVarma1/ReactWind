import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
// Import Lottie JSON
import lottieAnimation from '../../assets/lwlERW6itQ.json';
export const ErrorAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />
        <div className="relative">
        <Lottie animationData={lottieAnimation} loop autoplay style={{ width: '100%', height: 'auto' }} />
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-8 bg-gradient-to-t from-primary-500/20 to-transparent rounded-full blur-xl"
          />
        </div>
      </div>
    </motion.div>
  );
};