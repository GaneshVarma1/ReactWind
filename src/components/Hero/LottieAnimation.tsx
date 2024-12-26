import React from 'react';
import Lottie from 'lottie-react';

const lottieAnimation = {
  v: "5.7.1",
  fr: 30,
  ip: 0,
  op: 180,
  w: 800,
  h: 600,
  nm: "Buildeasy Animation",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "Code Window",
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [400, 300, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: {
          a: 1,
          k: [
            {
              t: 0,
              s: [100, 100, 100],
              h: 1
            },
            {
              t: 90,
              s: [105, 105, 100],
              h: 1
            },
            {
              t: 180,
              s: [100, 100, 100],
              h: 1
            }
          ]
        }
      },
      shapes: [
        {
          ty: "gr",
          it: [
            {
              ty: "rc",
              d: 1,
              s: { a: 0, k: [300, 200] },
              p: { a: 0, k: [0, 0] },
              r: { a: 0, k: 10 }
            },
            {
              ty: "fl",
              c: { a: 0, k: [0.2, 0.4, 1, 1] },
              o: { a: 0, k: 100 }
            }
          ]
        }
      ]
    }
  ]
};

export const HeroLottie: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-3xl blur-3xl" />
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
        <div className="w-full h-auto max-w-[600px] mx-auto">
          <Lottie 
            animationData={lottieAnimation}
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
};