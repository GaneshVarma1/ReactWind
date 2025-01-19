import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Shield, Zap, BarChart } from "lucide-react";

// Import the local Lottie JSON
import featureAnimationData from "../../assets/bike.json";

export const FeatureSection = () => {
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security with end-to-end encryption and compliance.",
    },
    {
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      title: "Lightning Fast",
      description: "Optimized performance with sub-second response times.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary-500" />,
      title: "Advanced Analytics",
      description: "Deep insights with customizable dashboards and reports.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            Powerful Features for Your Business
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Everything you need to scale your business effectively
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg hover-card"
            >
              <div className="mb-4 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative">
            <Lottie
              animationData={featureAnimationData}
              style={{ width: "300px", height: "300px", margin: "0 auto" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
