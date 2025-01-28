import { Hero } from "../components/Hero";
import { motion } from "framer-motion";
import { Star, Users, Code2, Zap } from "lucide-react";
import { BackgroundGradient } from "../components/ui/background-gradient.tsx";

const features = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Production Ready",
    description: "Thoroughly tested components ready for your next project",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Community Driven",
    description: "Built with feedback from developers like you",
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    title: "Fully Customizable",
    description: "Easily modify components to match your brand",
  },
  {
    icon: <Zap className="w-6 h-6 text-green-500" />,
    title: "Fast & Lightweight",
    description: "Optimized for performance and small bundle size",
  },
];

export const Home = () => {
  return (
    <div>
      <Hero />
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose ReactWind?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to build modern React applications
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Full Width Help and Support Section */}
      <div className="w-full bg-gradient-to-r bg-gray-50 dark:bg-gray-800 py-12">
        <div className="max-w-screen-lg mx-auto px-6">
          <BackgroundGradient>
            <div className="p-6 bg-white dark:bg-gray-700 rounded-3xl shadow-md">
              {/* Need Help Section */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Code2 className="w-6 h-6 text-primary-500" />
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Need Help 🤝
                  </h2>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Check out our GitHub repository or join me to build more.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/GaneshVarma1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    View on GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                    className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    Connect with Sri - Main Cook of Components
                  </a>
                </div>
              </div>

              {/* Support Our Project Section */}

              <div className="p-6 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  Support Our Project
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                  Your contributions help us create more components like this
                  and keep the website alive. Support us to motivate developers
                  and expand the project! Leave a Heart ❤️
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/GaneshVarma1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Contribute on GitHub
                  </a>
                  <a
                    href="https://buymeacoffee.com/sriganeshshiram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-green-600 text-green-600 dark:border-green-400 dark:text-green-400 rounded-lg hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors"
                  >
                    Make a Donation
                  </a>
                </div>
              </div>
            </div>
          </BackgroundGradient>
        </div>
      </div>
    </div>
  );
};
