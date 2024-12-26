import React from 'react';
import { MarqueeImages2 } from './MarqueeImages2';
import { MarqueeText } from './MarqueeText';
import { MarqueeLogo } from './MarqueeLogo';

export const MarqueeExamples = () => {
  return (
    <section className="py-16" id="marquee">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Marquee Examples ✨
        </h2>

        {/* Text Marquee */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Text Marquee 📝
          </h3>
          <MarqueeText />
        </div>

        {/* Logo Marquee */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Logo Marquee 🎯
          </h3>
          <MarqueeLogo />
        </div>

        {/* Image Marquee */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
            Image Marquee 🖼️
          </h3>
          <MarqueeImages2 />
        </div>
      </div>
    </section>
  );
};