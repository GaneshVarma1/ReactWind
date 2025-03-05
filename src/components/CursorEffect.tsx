import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const CursorEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{
    x: number;
    y: number;
    angle: number;
    speed: number;
    id: number;
  }>>([]);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      createParticles(e.clientX, e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const createParticles = (x: number, y: number) => {
    const newParticles = Array.from({ length: 3 }).map(() => ({
      x,
      y,
      angle: Math.random() * Math.PI * 2,
      speed: Math.random() * 2 + 1,
      id: Date.now() + Math.random(),
    }));

    setParticles((prev) => [...prev.slice(-25), ...newParticles]);
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Outer glow */}
      <motion.div
        className="fixed rounded-full"
        animate={{
          x: mousePosition.x - 32,
          y: mousePosition.y - 32,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
        style={{
          width: "64px",
          height: "64px",
          background: `radial-gradient(
            circle at center,
            rgba(147, 51, 234, 0.3) 0%,
            rgba(79, 70, 229, 0.1) 50%,
            transparent 70%
          )`,
          filter: "blur(5px)",
        }}
      />

      {/* Main cursor ring */}
      <motion.div
        className="fixed rounded-full border-2 border-purple-500 dark:border-purple-400"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
          mass: 0.2,
        }}
        style={{
          width: "40px",
          height: "40px",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Inner cursor dot */}
      <motion.div
        className="fixed bg-indigo-500 dark:bg-indigo-400 rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 20,
          mass: 0.1,
        }}
        style={{
          width: "8px",
          height: "8px",
        }}
      />

      {/* Particle effects */}
      <AnimatePresence mode="popLayout">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            initial={{
              x: particle.x,
              y: particle.y,
              scale: 1,
              opacity: 1,
            }}
            animate={{
              x: particle.x + Math.cos(particle.angle) * (particle.speed * 50),
              y: particle.y + Math.sin(particle.angle) * (particle.speed * 50),
              scale: 0,
              opacity: 0,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="fixed w-2 h-2 rounded-full"
            style={{
              background: `radial-gradient(
                circle at center,
                rgba(99, 102, 241, 0.8),
                rgba(147, 51, 234, 0.4)
              )`,
              filter: "blur(1px)",
            }}
          />
        ))}
      </AnimatePresence>

      {/* Magnetic field effect */}
      <motion.div
        className="fixed rounded-full mix-blend-screen"
        animate={{
          x: mousePosition.x - 150,
          y: mousePosition.y - 150,
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          },
          x: {
            type: "spring",
            stiffness: 50,
            damping: 20,
          },
          y: {
            type: "spring",
            stiffness: 50,
            damping: 20,
          },
        }}
        style={{
          width: "300px",
          height: "300px",
          background: `
            conic-gradient(
              from 0deg,
              transparent,
              rgba(139, 92, 246, 0.05),
              rgba(147, 51, 234, 0.1),
              transparent
            )
          `,
          filter: "blur(10px)",
        }}
      />
    </div>
  );
}; 