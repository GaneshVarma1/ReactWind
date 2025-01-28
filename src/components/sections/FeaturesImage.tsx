"use client";

import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { AnimatedBeam } from "../ui/animated-beam.tsx";
import { Rocket, Shield, Database, ServerCrash, Archive } from "lucide-react";
import { forwardRef, useRef } from "react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-white dark:border-gray-600 p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

const FeaturedSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const feature1Ref = useRef<HTMLDivElement>(null);
  const feature2Ref = useRef<HTMLDivElement>(null);
  const feature3Ref = useRef<HTMLDivElement>(null);
  const feature4Ref = useRef<HTMLDivElement>(null);
  const feature5Ref = useRef<HTMLDivElement>(null);
  const mainIconRef = useRef<HTMLDivElement>(null);

  return (
    <div className="py-12 bg-gray-50 dark:bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-indigo-600 font-bold tracking-wide uppercase">
            Deploy faster
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            A better workflow
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Animated Beam Section */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div
              ref={containerRef}
              className="h-[400px] w-full flex items-center justify-center p-10"
            >
              <div className="flex w-full items-stretch justify-between gap-10">
                {/* Features Column */}
                <div className="flex flex-col gap-8">
                  <Circle ref={feature1Ref}>
                    <Rocket className="h-6 w-6" />
                  </Circle>
                  <Circle ref={feature2Ref}>
                    <Shield className="h-6 w-6" />
                  </Circle>
                  <Circle ref={feature3Ref}>
                    <Database className="h-6 w-6" />
                  </Circle>
                  <Circle ref={feature4Ref}>
                    <ServerCrash className="h-6 w-6" />
                  </Circle>
                  <Circle ref={feature5Ref}>
                    <Archive className="h-6 w-6" />
                  </Circle>
                </div>

                {/* Central Icon */}
                <div className="flex flex-col justify-center">
                  <Circle
                    ref={mainIconRef}
                    className="size-16 bg-indigo-500 dark:bg-indigo-500"
                  >
                    <Rocket className="h-8 w-8 text-white" />
                  </Circle>
                </div>
              </div>

              {/* Animated Beams */}
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={feature1Ref}
                toRef={mainIconRef}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={feature2Ref}
                toRef={mainIconRef}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={feature3Ref}
                toRef={mainIconRef}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={feature4Ref}
                toRef={mainIconRef}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={feature5Ref}
                toRef={mainIconRef}
              />
            </div>
          </motion.div>

          {/* Features Text */}
          <div className="w-full md:w-1/2 space-y-12">
            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Rocket className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Push to deploy
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Accelerate your deployment process with seamless integration
                  and instant updates.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Shield className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Enterprise Security
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Military-grade encryption and security protocols to protect
                  your data.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <Database className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  Database Backups
                </h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Automated daily backups and point-in-time recovery options.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSection;
