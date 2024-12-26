import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export const PricingTables = () => {
  return (
    <section className="py-16" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Pricing Tables</h2>

        {/* Modern Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Basic Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-lg font-semibold mb-4">Basic</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['5 Projects', '10GB Storage', 'Basic Support'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-primary-600 text-white rounded-xl shadow-lg p-8 relative"
          >
            <div className="absolute -top-4 right-4 bg-secondary-500 text-white text-sm font-medium px-3 py-1 rounded-full">
              Popular
            </div>
            <h3 className="text-lg font-semibold mb-4">Pro</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-primary-200">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['15 Projects', '50GB Storage', 'Priority Support', 'Advanced Features'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary-300" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-4 bg-white text-primary-600 rounded-lg font-medium hover:bg-primary-50 transition-colors">
              Get Started
            </button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
          >
            <h3 className="text-lg font-semibold mb-4">Enterprise</h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-gray-600 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {['Unlimited Projects', 'Unlimited Storage', '24/7 Support', 'Custom Features'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};