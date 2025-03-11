import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const WavyBackground = () => {
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

    const drawWave = (
      offset: number,
      amplitude: number,
      frequency: number,
      color: string,
      blur: number = 4
    ) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2);

      // Create more complex wave pattern
      for (let x = 0; x < canvas.width; x++) {
        const mainWave =
          Math.sin((x * frequency + time + offset) * 0.02) * amplitude;
        const secondaryWave =
          Math.sin((x * frequency * 2 + time) * 0.01) * (amplitude * 0.3);
        const y = mainWave + secondaryWave + canvas.height / 2;
        ctx.lineTo(x, y);
      }

      // Main wave
      ctx.strokeStyle = color;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Glow effect
      ctx.save();
      ctx.filter = `blur(${blur}px)`;
      ctx.globalAlpha = 0.2;
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Additional glow layer
      ctx.globalAlpha = 0.1;
      ctx.filter = `blur(${blur * 2}px)`;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      time += 0.3; // Slower, more graceful movement
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background waves (subtle)
      drawWave(0, 40, 1.2, "rgba(255, 255, 255, 0.03)", 8);
      drawWave(3, 35, 1.3, "rgba(255, 255, 255, 0.04)", 7);

      // Middle layer waves
      drawWave(2, 30, 1.5, "rgba(255, 255, 255, 0.08)", 6);
      drawWave(4, 25, 1.7, "rgba(255, 255, 255, 0.12)", 5);

      // Foreground waves (more prominent)
      drawWave(6, 20, 2.0, "rgba(255, 255, 255, 0.16)", 4);
      drawWave(8, 15, 2.2, "rgba(255, 255, 255, 0.20)", 3);

      // Highlight waves
      drawWave(10, 10, 2.5, "rgba(255, 255, 255, 0.25)", 2);

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
    <div className="relative min-h-[500px] w-full overflow-hidden rounded-lg bg-[#0a0118]">
      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10" />

      {/* Subtle radial gradient for center focus */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,rgba(0,0,0,0.3)_100%)]" />

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/70"
        >
          Wavy Background
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-gray-300/90 text-center max-w-2xl"
        >
          A beautiful animated background effect that adds depth and movement to
          your designs
        </motion.p>
      </div>
    </div>
  );
};
