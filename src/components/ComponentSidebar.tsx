import { useState } from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  components: { title: string }[];
  activeSection: string;
}

export const ComponentSidebar = ({
  components,
  activeSection,
}: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const filteredComponents = components.filter(component =>
    component.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const normalizeTitle = (title: string) =>
    title.replace(/\s+/g, "-").toLowerCase();

  const handleComponentClick = (e: React.MouseEvent<HTMLAnchorElement>, title: string) => {
    e.preventDefault();
    const targetId = normalizeTitle(title);
    const element = document.getElementById(targetId);
    
    if (element) {
      const yOffset = -100; // Adjust this value based on your header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsMobileOpen(false);
    }
  };

  const SidebarContent = () => (
    <>
      {/* Header */}
      <div className="p-4 border-b border-gray-200/10 dark:border-gray-800/50">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-8 w-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg" />
          <span className="text-gray-900 dark:text-white font-semibold text-lg">ReactWind</span>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800/50 rounded-xl text-gray-900 dark:text-gray-300 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="p-2 space-y-1">
          {filteredComponents.map((component) => (
            <a
              key={component.title}
              href={`#${normalizeTitle(component.title)}`}
              onClick={(e) => handleComponentClick(e, component.title)}
              className={`block px-4 py-2 rounded-lg transition-all duration-200 ${
                normalizeTitle(activeSection) === normalizeTitle(component.title)
                  ? "bg-primary-500/10 text-primary-600 dark:text-primary-400 font-medium"
                  : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
              }`}
            >
              {component.title}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200/10 dark:border-gray-800/50">
        <Link
          to="/docs"
          onClick={() => setIsMobileOpen(false)}
          className="block px-4 py-2 rounded-lg text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
        >
          Documentation
        </Link>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed right-4 top-20 z-50 p-3 rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg"
      >
        <Search className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white dark:bg-[#0B0F17]/95 border-l border-gray-200 dark:border-gray-800/50 z-50 lg:hidden backdrop-blur-xl"
            >
              <SidebarContent />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div 
        className="hidden lg:flex flex-col fixed left-6 top-24 w-72 h-[calc(100vh-6rem)] bg-white dark:bg-[#0B0F17]/95 backdrop-blur-xl rounded-3xl border border-gray-200 dark:border-gray-800/50 overflow-hidden shadow-xl"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <SidebarContent />
      </motion.div>
    </>
  );
};
