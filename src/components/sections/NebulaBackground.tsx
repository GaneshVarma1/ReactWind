import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Update the star interface
interface Star {
  x: number;
  y: number;
  z: number; // For parallax effect
  size: number;
  twinkleSpeed: number;
  brightness: number;
  drift: {
    x: number;
    y: number;
  };
}

export const NebulaBackground = () => {
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

    const drawNebula = (
      x: number,
      y: number,
      radius: number,
      color: string,
      rotation: number
    ) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(rotation);

      // Create multiple layered gradients for depth
      for (let i = 0; i < 5; i++) {
        const currentRadius = radius * (1 - i * 0.15);

        // Main nebula gradient
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, currentRadius);
        const opacity1 = (50 - i * 8).toString(16).padStart(2, "0");
        const opacity2 = (30 - i * 5).toString(16).padStart(2, "0");

        gradient.addColorStop(0, `${color}${opacity1}`);
        gradient.addColorStop(0.5, `${color}${opacity2}`);
        gradient.addColorStop(1, "transparent");

        // Draw main layer
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(0, 0, currentRadius, 0, Math.PI * 2);
        ctx.fill();

        // Add subtle glow effect
        ctx.save();
        ctx.filter = `blur(${8 + i * 2}px)`;
        ctx.globalAlpha = 0.1;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(0, 0, currentRadius * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Add detail layers
        if (i < 3) {
          // Turbulence effect
          const detailGradient = ctx.createRadialGradient(
            Math.sin(time * 0.5) * 10,
            Math.cos(time * 0.5) * 10,
            0,
            0,
            0,
            currentRadius * 0.7
          );

          detailGradient.addColorStop(0, `${color}22`);
          detailGradient.addColorStop(0.5, `${color}11`);
          detailGradient.addColorStop(1, "transparent");

          ctx.globalAlpha = 0.3;
          ctx.fillStyle = detailGradient;
          ctx.beginPath();
          ctx.arc(
            Math.sin(time + i) * 20,
            Math.cos(time + i) * 20,
            currentRadius * 0.7,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
      }

      // Add sparkles
      const sparkleCount = 15;
      for (let i = 0; i < sparkleCount; i++) {
        const angle = (i / sparkleCount) * Math.PI * 2 + time;
        const sparkleX = Math.cos(angle) * radius * 0.8;
        const sparkleY = Math.sin(angle) * radius * 0.8;
        const size = Math.sin(time * 2 + i) * 1 + 2;

        ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, size, 0, Math.PI * 2);
        ctx.fill();

        // Sparkle glow
        const sparkleGlow = ctx.createRadialGradient(
          sparkleX,
          sparkleY,
          0,
          sparkleX,
          sparkleY,
          size * 3
        );
        sparkleGlow.addColorStop(0, "rgba(255, 255, 255, 0.2)");
        sparkleGlow.addColorStop(1, "transparent");

        ctx.fillStyle = sparkleGlow;
        ctx.beginPath();
        ctx.arc(sparkleX, sparkleY, size * 3, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();
    };

    // Enhanced star creation with drift and parallax
    const stars: Star[] = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * 3, // Parallax depth
      size: Math.random() * 2,
      twinkleSpeed: Math.random() * 0.02 + 0.01,
      brightness: Math.random() * 0.5 + 0.5,
      drift: {
        x: (Math.random() - 0.5) * 0.1, // Random drift speed
        y: (Math.random() - 0.5) * 0.1,
      },
    }));

    const updateStarPosition = (star: Star) => {
      // Base movement
      star.x += star.drift.x * (star.z * 0.5);
      star.y += star.drift.y * (star.z * 0.5);

      // Add slight circular motion
      const angle = time * 0.1;
      star.x += Math.cos(angle) * 0.05 * star.z;
      star.y += Math.sin(angle) * 0.05 * star.z;

      // Wrap around edges
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;
    };

    const drawStar = (star: Star) => {
      const twinkle =
        (Math.sin(time * star.twinkleSpeed * 10) * 0.3 + 0.7) * star.brightness;

      // Star core with size based on z-depth
      const scaledSize = star.size * (1 + star.z * 0.2);
      ctx.fillStyle = `rgba(255, 255, 255, ${twinkle})`;
      ctx.beginPath();
      ctx.arc(star.x, star.y, scaledSize, 0, Math.PI * 2);
      ctx.fill();

      // Enhanced glow effect with depth-based size
      const glowSize = scaledSize * (4 + star.z * 2);
      const gradient = ctx.createRadialGradient(
        star.x,
        star.y,
        0,
        star.x,
        star.y,
        glowSize
      );
      gradient.addColorStop(0, `rgba(255, 255, 255, ${twinkle * 0.5})`);
      gradient.addColorStop(0.1, `rgba(255, 255, 255, ${twinkle * 0.3})`);
      gradient.addColorStop(0.4, `rgba(255, 255, 255, ${twinkle * 0.1})`);
      gradient.addColorStop(1, "transparent");

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(star.x, star.y, glowSize, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      time += 0.003;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw stars with movement
      stars.forEach((star) => {
        updateStarPosition(star);
        drawStar(star);
      });

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw multiple nebula clouds with rotation using white/grey colors
      drawNebula(
        centerX + Math.sin(time * 0.5) * 50,
        centerY + Math.cos(time * 0.3) * 50,
        250,
        "#ffffff", // Pure white
        time * 0.2
      );

      drawNebula(
        centerX + Math.cos(time * 0.4) * 60,
        centerY + Math.sin(time * 0.6) * 60,
        220,
        "#e5e5e5", // Light grey
        -time * 0.15
      );

      drawNebula(
        centerX + Math.sin(time * 0.7) * 40,
        centerY + Math.cos(time * 0.5) * 40,
        200,
        "#d4d4d4", // Medium grey
        time * 0.1
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
    <div className="relative min-h-[500px] w-full overflow-hidden rounded-lg bg-[#0a0118]">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="absolute inset-0 bg-[#0a0118]/30 backdrop-blur-[0.5px]" />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[500px] p-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400"
        >
          Nebula Background
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl text-gray-300 text-center max-w-2xl"
        >
          A cosmic background with colorful nebula clouds and twinkling stars
        </motion.p>
      </div>
    </div>
  );
};
