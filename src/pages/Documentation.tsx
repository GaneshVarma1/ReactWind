import { motion } from 'framer-motion';
import React from 'react';
import Lottie from 'lottie-react';
import { Book, Code2, Palette, Zap, Layout, Heart } from 'lucide-react';

export const Documentation = () => {
  const sections = [
    {
      title: 'Getting Started 🚀',
      icon: <Zap className="w-6 h-6 text-primary-500" />,
      items: [
        {
          title: 'Copy Code & Install Packages',
          description: (
            <>
              <p className="mb-2">
                Follow these steps to set up the environment for your project:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md text-sm">
                <p className="font-semibold mb-1">1. Install Lottie Files:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                  <code>npm install lottie-react</code>
                </pre>
                <p className="mt-3 font-semibold mb-1">2. Install Lucid Icons:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                  <code>npm install lucide-react</code>
                </pre>
                <p className="mt-3 font-semibold mb-1">3. Install TailwindCSS:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                  <code>
                    {`npm install -D tailwindcss 
postcss autoprefixer
npx tailwindcss init`}
                  </code>
                </pre>
                <p className="mt-3 font-semibold mb-1">4. Install Framer Motion:</p>
                <pre className="bg-gray-200 dark:bg-gray-700 p-3 rounded-md">
                  <code>npm install framer-motion</code>
                </pre>
              </div>
            </>
          ),
        },
        { title: 'Make React Easy' },
        { title: 'Easy Project Structure' },
      ],
    },
    {
      title: 'Components Available 🎨',
      icon: <Layout className="w-6 h-6 text-primary-500" />,
      items: [
        { title: 'Hero Sections' },
        { title: 'Headers' },
        { title: 'Footers' },
        { title: 'Pricing Tables' },
        { title: 'Galleries' },
        { title: 'Marquee Sliders' },
        { title: 'More Coming Soon...' },
      ],
    },
    {
      title: 'Customization 💅',
      icon: <Palette className="w-6 h-6 text-primary-500" />,
      items: [
        { title: 'Theming' },
        { title: 'Dark Mode' },
        { title: 'Styling' },
      ],
    },
    {
      title: 'API Reference 📚',
      icon: <Book className="w-6 h-6 text-primary-500" />,
      items: [
        { title: 'Component Props' },
        { title: 'Hooks' },
        { title: 'Utilities' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              Documentation 📖
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to build amazing React applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {section.title}
                  </h2>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx}>
                      <a
                        className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        {item.title}
                      </a>
                      {item.description && (
                        <div className="mt-2">{item.description}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 p-6 bg-primary-50 dark:bg-gray-800 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <Code2 className="w-6 h-6 text-primary-500" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Need Help? 🤝
              </h2>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Check out our GitHub repository or join me to build more.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/buildeasy/components"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                View on GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/sriganeshshiramshetty/"
                target="_blank"
                className="inline-flex items-center px-4 py-2 border border-primary-600 text-primary-600 dark:border-primary-400 dark:text-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
              >
                Connect with Sri - Main Cook of Components
              </a>
            </div>
            <div className="mt-8 p-6 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Support Our Project
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex items-center">
                Your contributions help us create more components like this and
                keep the website alive. Support us to motivate developers and
                expand the project! Leave a Heart ❤️
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/buildeasy/components#contribute"
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
        </div>
      </div>
    </div>
  );
};
