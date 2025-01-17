import { motion } from "framer-motion";
import { Image as LucideImage } from "lucide-react";
import "tailwindcss/tailwind.css";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1541336032412-2048a678540d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1672082422409-879d79636902?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1680836316227-ef17dbbcfb27?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[9/16]",
  },
  {
    src: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
  },
  {
    src: "https://images.unsplash.com/photo-1440330033336-7dcff4630cef?q=80&w=2879&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    aspect: "aspect-[4/3]",
  },
];

const Gallery = () => {
  return (
    <div className="bg-transparent min-h-screen flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center">
        <LucideImage className="mr-2" /> Photo Gallery
      </h1>

      <main className="p-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <motion.div
            key={index}
            className={`relative overflow-hidden rounded-lg shadow-md cursor-pointer ${image.aspect}`}
          >
            <img
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Gallery;
