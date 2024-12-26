"use client";
import { useEffect, useState } from "react";
import { motion, MotionConfig, useMotionTemplate, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


// Image list for galleries
const images = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&h=300&fit=crop",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=500&h=300&fit=crop",
];

export const GalleryExamples = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800" id="galleries">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Gallery Examples</h2>

        {/* Grid Gallery */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Grid Gallery</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden rounded-lg aspect-video"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Masonry Gallery */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-4">Masonry Gallery</h3>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative mb-4 overflow-hidden rounded-lg"
              >
                <img
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Image Carousel</h3>
          <Carousel />
        </div>
      </div>
    </section>
  );
};

// CAROUSEL COMPONENT
function Carousel() {
  let [index, setIndex] = useState(0);

  let x = index * 100;
  let xSpring = useSpring(x, { bounce: 0 });
  let xPercentage = useMotionTemplate`-${xSpring}%`;

  useEffect(() => {
    xSpring.set(x);
  }, [x, xSpring]);

  return (
    <MotionConfig transition={{ type: "spring", bounce: 0 }}>
      <div className="relative mt-6 overflow-hidden">
        <motion.div style={{ x: xPercentage }} className="flex">
          {images.map((image, i) => (
            <motion.img
              key={image}
              src={image}
              animate={{ opacity: i === index ? 1 : 0.4 }}
              className="aspect-[1.85] h-screen max-h-[70vh] w-full flex-shrink-0 object-cover"
            />
          ))}
        </motion.div>

        {/* Navigation */}
        {index > 0 && (
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            onClick={() => setIndex(index - 1)}
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
        )}
        {index < images.length - 1 && (
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white p-2 shadow-md"
            onClick={() => setIndex(index + 1)}
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        )}
      </div>
    </MotionConfig>
  );
}
