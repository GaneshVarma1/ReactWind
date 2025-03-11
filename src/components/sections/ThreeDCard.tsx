import { motion } from "framer-motion";
import { useState } from "react";

export const ThreeDCardDemo = () => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const centerX = box.width / 2;
    const centerY = box.height / 2;
    const rotateX = ((y - centerY) / centerY) * 20;
    const rotateY = ((centerX - x) / centerX) * 20;

    setRotateX(rotateX);
    setRotateY(rotateY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="flex items-center justify-center min-h-[500px] w-full">
      <div className="group relative">
        {/* Animated border gradient */}
        <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 rounded-2xl blur-sm group-hover:blur opacity-0 group-hover:opacity-100 transition-all duration-500" />
        <div className="absolute -inset-1 bg-gradient-to-r from-white/0 via-white/50 to-white/0 rounded-2xl blur-sm group-hover:blur rotate-180 opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Shiny border effect */}
        <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100">
          <div className="h-full w-full rounded-2xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] bg-[0%_0%] transition-all duration-500 group-hover:bg-[100%_100%]" />
        </div>

        {/* Card content */}
        <motion.div
          className="relative w-80 h-[420px] rounded-2xl bg-[#1a1a1a] border border-white/10"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
            transition: "transform 0.2s ease-out",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-full h-full rounded-xl p-6 overflow-hidden backdrop-blur-sm backdrop-filter">
            <div className="relative h-48 rounded-lg overflow-hidden mb-5">
              <img
                src="https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80"
                alt="Northern Lights"
                className="object-cover w-full h-full"
              />
              {/* Image overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Aurora Borealis
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Experience the magical dance of the Northern Lights in this
              stunning capture of nature's most spectacular light show.
            </p>
            <div className="absolute bottom-6 right-6">
              <motion.div
                className="w-12 h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center"
                whileHover={{ scale: 1.2, rotate: 90 }}
              >
                <span className="text-white text-xl">→</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
