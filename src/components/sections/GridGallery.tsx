import { motion } from "framer-motion";
import { Image as LucideImage } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface GalleryImage {
  src: string;
  aspect: string;
  alt?: string;
}

interface GalleryProps {
  images?: GalleryImage[];
  title?: string;
  className?: string;
}

const defaultImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
    alt: "City skyline at sunset",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1672082422409-879d79636902?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
    alt: "Mountain landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
    alt: "Urban architecture",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
    alt: "Nature scene",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
    alt: "City view",
  },
  {
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
    alt: "Urban landscape",
  },
  {
    src: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
    alt: "City panorama",
  },
  {
    src: "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?q=80&w=2879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
    alt: "Architectural view",
  },
];

const GalleryImage = ({ image, index }: { image: GalleryImage; index: number }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "relative overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-xl transition-shadow duration-300",
        image.aspect
      )}
    >
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      {error ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Failed to load image</p>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt || `Gallery image ${index + 1}`}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoading ? "opacity-0" : "opacity-100"
          )}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
        />
      )}
    </motion.div>
  );
};

export const Gallery = ({ images = defaultImages, title = "Photo Gallery", className }: GalleryProps) => {
  return (
    <div className={cn("bg-transparent min-h-screen flex flex-col items-center", className)}>
      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200 flex items-center mb-8">
        <LucideImage className="mr-2" /> {title}
      </h1>

      <main className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-7xl mx-auto">
        {images.map((image, index) => (
          <GalleryImage key={`${image.src}-${index}`} image={image} index={index} />
        ))}
      </main>
    </div>
  );
};

export default Gallery;
