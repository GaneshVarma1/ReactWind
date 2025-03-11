import { motion } from "framer-motion";

const cards = [
  {
    title: "Mountain Retreat",
    description: "Discover peaceful solitude in nature's embrace",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Ocean Waves",
    description: "Let the rhythm of the waves calm your soul",
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80",
  },
  {
    title: "Forest Magic",
    description: "Explore the mystical depths of ancient woods",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
  },
];

export const CardHoverEffect = () => {
  return (
    <div className="flex flex-wrap gap-8 items-center justify-center min-h-[500px] w-full py-10">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          className="group relative w-80 h-96"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Shining border effect */}
          <div className="absolute -inset-0.5 bg-white opacity-20 rounded-2xl blur" />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-white/5" />
          <div className="absolute inset-0">
            <div className="h-full w-full rounded-2xl bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.3)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] bg-[0%_0%] transition-all duration-500 group-hover:bg-[100%_100%]" />
          </div>

          {/* Card content */}
          <div className="relative w-full h-full bg-[#1a1a1a]/90 backdrop-blur-sm rounded-xl p-6 overflow-hidden border border-white/10">
            <div className="absolute inset-0">
              <img
                src={card.image}
                alt={card.title}
                className="object-cover w-full h-full opacity-40"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/80 to-transparent" />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-2">
                {card.title}
              </h3>
              <p className="text-gray-300">{card.description}</p>
            </div>
            <motion.div
              className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20"
              whileHover={{ scale: 1.2, rotate: 90 }}
            >
              <span className="text-white text-xl">→</span>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
