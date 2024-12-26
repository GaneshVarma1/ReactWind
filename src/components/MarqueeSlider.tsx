import React from 'react';

interface MarqueeSliderProps {
  items: React.ReactNode[];
  reverse?: boolean;
}

export const MarqueeSlider = ({ items, reverse = false }: MarqueeSliderProps) => {
  const content = [...items, ...items]; // Duplicate items for seamless loop

  return (
    <div className="relative overflow-hidden">
      <div className={`flex ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`}>
        {content.map((item, index) => (
          <div key={index} className="flex-shrink-0">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};