import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { SocialLink } from '../../types';

const socialLinks: SocialLink[] = [
  {
    platform: 'GitHub',
    href: 'https://github.com/buildeasy/components',
    icon: Github,
  },
  {
    platform: 'Twitter',
    href: 'https://twitter.com/buildeasy',
    icon: Twitter,
  },
  {
    platform: 'LinkedIn',
    href: 'https://linkedin.com/company/buildeasy',
    icon: Linkedin,
  },
];

export const SocialLinks = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <br></br>
      {socialLinks.map(({ platform, href, icon: Icon }) => (
        <a
          key={platform}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
          aria-label={platform}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
};
