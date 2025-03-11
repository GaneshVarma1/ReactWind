import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Sparkles = ({ children }: { children: React.ReactNode }) => {
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; x: number; y: number }>
  >([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setSparkles((prev) => [...prev, sparkle]);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSparkles((prev) => prev.slice(1));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [sparkles]);

  return (
    <span className="relative inline-block">
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute inline-block w-1 h-1 bg-yellow-300 rounded-full"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          initial={{ scale: 0, opacity: 1 }}
          animate={{ scale: 1, opacity: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      {children}
    </span>
  );
};

export const SparklesPreview = () => {
  return (
    <div className="flex min-h-[400px] w-full items-center justify-center bg-black/20 rounded-lg">
      <h1 className="text-4xl md:text-6xl font-bold text-center">
        <Sparkles>
          <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Magical Text ✨
          </span>
        </Sparkles>
      </h1>
    </div>
  );
};
