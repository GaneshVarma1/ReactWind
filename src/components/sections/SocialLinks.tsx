import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export const SocialLinks = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/buildeasy', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com/buildeasy', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/buildeasy', label: 'LinkedIn' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, href, label }) => (
        <motion.a
          key={label}
          whileHover={{ scale: 1.1 }}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </motion.a>
      ))}
    </div>
  );
};