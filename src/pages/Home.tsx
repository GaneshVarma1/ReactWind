import { Hero } from "../components/Hero";
import { motion } from "framer-motion";
import { Star, Users, Code2, Zap, Github, Coffee } from "lucide-react";
import { DemoSection } from "../components/sections/DemoSection";

const features = [
  {
    icon: <Star className="w-6 h-6 text-yellow-500" />,
    title: "Production Ready",
    description: "Thoroughly tested components ready for your next project",
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    icon: <Users className="w-6 h-6 text-blue-500" />,
    title: "Community Driven",
    description: "Built with feedback from developers like you",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: <Code2 className="w-6 h-6 text-purple-500" />,
    title: "Fully Customizable",
    description: "Easily modify components to match your brand",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: <Zap className="w-6 h-6 text-green-500" />,
    title: "Fast & Lightweight",
    description: "Optimized for performance and small bundle size",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
];

export const Home = () => {
  return (
    <div className="bg-[#0B0F17]">
      <Hero />
      
      {/* Demo Section */}
      <DemoSection />
      
      {/* Features Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-[#0B0F17]/80 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Why Choose ReactWind?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to build modern React applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300`} />
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 h-full">
                  <div className="mb-4 p-3 rounded-2xl bg-gray-800 w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-[#0B0F17]/80 backdrop-blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Need Help Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 h-full">
                <div className="mb-4 p-3 rounded-2xl bg-gray-800 w-fit">
                  <Code2 className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Need Help? 🤝
                </h3>
                <p className="text-gray-300 mb-6">
                  Check out our GitHub repository or join me to build more.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/GaneshVarma1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-xl hover:shadow-lg transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                    View on GitHub
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 rounded-xl hover:bg-gray-700 transition-all duration-200 text-gray-300"
                  >
                    Connect with Sri
                  </motion.a>
                </div>
              </div>
            </motion.div>

            {/* Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300" />
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-800 h-full">
                <div className="mb-4 p-3 rounded-2xl bg-gray-800 w-fit">
                  <Coffee className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  Support Project ❤️
                </h3>
                <p className="text-gray-300 mb-6">
                  Your contributions help us create more components and keep the website alive.
                </p>
                <div className="flex flex-wrap gap-4">
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://github.com/GaneshVarma1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-white rounded-xl hover:shadow-lg transition-all duration-200"
                  >
                    <Github className="w-5 h-5" />
                    Contribute
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    href="https://buymeacoffee.com/sriganeshshiram"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 border border-green-500 text-green-500 rounded-xl hover:bg-green-900/20 transition-all duration-200"
                  >
                    <Coffee className="w-5 h-5" />
                    Buy me a coffee
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
