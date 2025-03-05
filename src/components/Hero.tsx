import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { FloatingCrystal } from "./three/FloatingCrystal";
import * as THREE from "three";

// Import Lottie JSON

export const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <div className="relative min-h-screen flex items-center bg-[#0B0F17]">
      {/* Remove all background patterns and effects */}
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            {/* Floating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-700/50 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary-500" />
              <span className="text-sm font-medium text-primary-300">
                100+ Ready-to-use Components
              </span>
            </motion.div>

            <h1 className="text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
              <span className="text-white">Beautiful</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500">
                React Components
              </span>
            </h1>

            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Production-ready components that blend seamlessly into your React projects. 
              Open-source, fully customizable, and crafted with modern design principles.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/components")}
                className="group relative px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl text-white font-medium shadow-xl shadow-primary-500/10 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-200"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Components
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-600 to-secondary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

              <motion.a
                href="https://github.com/ganeshvarma1"
                target="_blank"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 rounded-2xl border border-gray-800 hover:bg-gray-800/50 transition-colors duration-200 text-gray-300 font-medium flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                GitHub
              </motion.a>
            </div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-16"
            >
              <p className="text-sm text-gray-400 mb-4">
                Built with modern technologies
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
                {techLogos.map((logo, index) => (
                  <motion.img
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-8 h-8 ${logo.className || ''}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side 3D Animation - Updated */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[600px] xl:h-[700px] w-full"
          >
            <Canvas
              className="w-full h-full absolute inset-0"
              camera={{ 
                position: [0, 10, 25],
                fov: 50,
              }}
              gl={{ 
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping,
                outputColorSpace: THREE.SRGBColorSpace,
                alpha: true
              }}
              dpr={[1, 2]}
            >
              <ambientLight intensity={0.1} />
              <pointLight position={[0, 0, 0]} intensity={2} color="#ffa726" />
              
              <Suspense fallback={null}>
                <FloatingCrystal />
              </Suspense>
              
              <OrbitControls
                enableZoom={false}
                autoRotate
                autoRotateSpeed={0.2}
                maxPolarAngle={Math.PI / 1.6}
                minPolarAngle={Math.PI / 2.8}
                enablePan={false}
              />
              
              <EffectComposer>
                <Bloom
                  intensity={1}
                  luminanceThreshold={0.2}
                  luminanceSmoothing={0.9}
                  mipmapBlur
                />
              </EffectComposer>
            </Canvas>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const techLogos = [
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    alt: "React",
  },
  {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    alt: "TypeScript",
  },
  {
    src: "https://tailwindcss.com/_next/static/media/tailwindcss-mark.d52e9897.svg",
    alt: "TailwindCSS",
  },
  {
    src: "https://vite.dev/logo.svg",
    alt: "Vite",
  },
  {
    src: "https://www.svgrepo.com/show/306070/framer.svg",
    alt: "Framer Motion",
    className: "filter invert",
  },
  {
    src: "https://lucide.dev/logo.svg",
    dark: "https://lucide.dev/logo.dark.svg",
    alt: "Lucide Icons",
  },
];
