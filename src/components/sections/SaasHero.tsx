import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { ArrowRight, CheckCircle } from "lucide-react";

// Import Lottie JSON locally
import analyticsAnimationLight from "../../assets/saas.json";
import analyticsAnimationDark from "../../assets/saasdark.json";

export const SaasHero = () => {
  const features = [
    "Real-time analytics dashboard",
    "Team collaboration tools",
    "Advanced reporting features",
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-primary-100/80 via-white to-secondary-100/80 dark:from-gray-950 dark:via-gray-900/90 dark:to-gray-800 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 text-sm font-medium mb-6">
              New Features Available
            </span>
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Transform Your Business with{" "}
              <span className="gradient-text">Advanced Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get actionable insights and make data-driven decisions with our
              powerful analytics platform.
            </p>
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-semibold inline-flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <button className="px-8 py-4 border border-gray-300 dark:border-gray-600 hover:border-primary-600 dark:hover:border-primary-500 rounded-lg font-semibold">
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Side Lottie Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Lottie Animation */}
            <div className="relative">
              {/* Light mode Lottie */}
              <div className="block dark:hidden">
                <Lottie
                  animationData={analyticsAnimationLight}
                  className="w-full h-auto"
                />
              </div>

              {/* Dark mode Lottie */}
              <div className="hidden dark:block">
                <Lottie
                  animationData={analyticsAnimationDark}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
