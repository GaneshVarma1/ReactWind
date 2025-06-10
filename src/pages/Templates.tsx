import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useComponentTheme } from '../context/ThemeContext';
import { ThemeToggle } from '../components/ThemeToggle';
import { Github, ExternalLink } from 'lucide-react';

interface Template {
  title: string;
  description: string;
  videoUrl: string;
  githubUrl: string;
  demoUrl: string;
  tags: string[];
}

const templates: Template[] = [
  {
    title: "Portfolio Template",
    description: "A modern, responsive portfolio template built with Next.js, TypeScript, and Tailwind CSS. Perfect for showcasing your work and skills.",
    videoUrl: "/Demo1.gif",
    githubUrl: "https://github.com/GaneshVarma1/Design1",
    demoUrl: "https://design1-ivory.vercel.app",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Flappy Bird Portfolio",
    description: "A fun and interactive portfolio template inspired by the classic Flappy Bird game. Features retro-style animations, game-like interactions, and a unique scrolling experience.",
    videoUrl: "/Demo2.gif",
    githubUrl: "https://github.com/GaneshVarma1/Design2",
    demoUrl: "https://design-2-amber.vercel.app",
    tags: ["Vite.js", "Tailwind CSS", "Game Theme", "Interactive"]
  }
];

export const Templates = () => {
  const { theme, toggleTheme } = useComponentTheme();

  // Force dark mode
  useEffect(() => {
    if (theme !== 'dark') {
      toggleTheme();
    }
  }, [theme, toggleTheme]);

  return (
    <div className="min-h-screen bg-[#0B0F17]">
      <ThemeToggle />
      
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[#0B0F17]/90 backdrop-blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative py-24">
          <div className="absolute inset-0 bg-gradient-to-b from-primary-400/10 to-secondary-400/10" />
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium">
                  ✨ Beautiful Templates
                </span>
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">
                Ready-to-Use Templates
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Start your next project with our professionally designed templates
              </p>
            </motion.div>
          </div>
        </section>

        {/* Templates Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {templates.map((template, index) => (
                <motion.div
                  key={template.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  {/* Media Container */}
                  <div className="relative aspect-video overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      src={template.videoUrl}
                      alt={template.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {template.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {template.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {template.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-primary-500/10 text-primary-500 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-4">
                      <a
                        href={template.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        GitHub
                      </a>
                      <a
                        href={template.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}; 