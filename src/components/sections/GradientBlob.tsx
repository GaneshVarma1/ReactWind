import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const GradientBlob = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const drawBlob = (x: number, y: number, radius: number, color: string) => {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    };

    const animate = () => {
      time += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Primary blob (white)
      drawBlob(
        centerX + Math.sin(time) * 50,
        centerY + Math.cos(time * 0.8) * 50,
        150,
        "rgba(255, 255, 255, 0.15)"
      );

      // Secondary blob (light grey)
      drawBlob(
        centerX + Math.cos(time * 1.2) * 60,
        centerY + Math.sin(time * 0.9) * 60,
        120,
        "rgba(229, 229, 229, 0.12)"
      );

      // Tertiary blob (medium grey)
      drawBlob(
        centerX + Math.sin(time * 0.7) * 70,
        centerY + Math.cos(time * 1.1) * 70,
        100,
        "rgba(212, 212, 212, 0.1)"
      );

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-[500px] w-full overflow-hidden rounded-lg bg-black">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#0f0f0f]/50 backdrop-blur-[1px]" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400"
        >
          Gradient Blobs
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-2xl"
        >
          Smooth animated gradient blobs that create an organic, fluid
          background effect
        </motion.p>
      </div>
    </div>
  );
};
