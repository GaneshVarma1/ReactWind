import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SidebarProps {
  components: { title: string }[];
  activeSection: string;
}

// Add this CSS at the top of your file or in your global CSS
const scrollbarStyles = `
  .custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: rgba(156, 163, 175, 0.2) transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 5px;
  }
  
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(156, 163, 175, 0.2);
    border-radius: 20px;
    transition: background-color 0.2s ease;
  }

  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(156, 163, 175, 0.3);
  }

  .dark .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(75, 85, 99, 0.2);
  }

  .dark .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background-color: rgba(75, 85, 99, 0.3);
  }
`;

export const ComponentSidebar = ({
  components,
  activeSection,
}: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const activeButtonRef = useRef<HTMLButtonElement>(null);

  // Helper function to normalize titles for comparison
  const normalizeTitle = (title: string) =>
    title.replace(/\s+/g, "-").toLowerCase();

  // Get active component
  const activeComponent = components.find(
    (c) => normalizeTitle(c.title) === normalizeTitle(activeSection)
  );

  useEffect(() => {
    if (activeButtonRef.current && sidebarRef.current) {
      const sidebar = sidebarRef.current;
      const activeButton = activeButtonRef.current;
      const buttonTop = activeButton.offsetTop;
      const sidebarHeight = sidebar.clientHeight;
      const scrollOffset =
        buttonTop - sidebarHeight / 2 + activeButton.clientHeight / 2;

      sidebar.scrollTo({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  }, [activeSection]);

  const scrollToSection = (title: string) => {
    const element = document.getElementById(normalizeTitle(title));
    if (!element) return;

    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <style>{scrollbarStyles}</style>
      
      {/* Mobile Dropdown */}
      <motion.div 
        initial={false}
        className="lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg p-4 border-b border-gray-200 dark:border-gray-800"
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
        >
          <span className="text-gray-700 dark:text-gray-200 font-medium">
            {activeComponent?.title || "Select Component"}
          </span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 mt-2 mx-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg max-h-[60vh] overflow-y-auto backdrop-blur-lg custom-scrollbar"
            >
              {components.map((component) => (
                <motion.button
                  key={component.title}
                  onClick={() => scrollToSection(component.title)}
                  className={`w-full text-left px-4 py-3 transition-all duration-200 ${
                    normalizeTitle(activeSection) === normalizeTitle(component.title)
                      ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {component.title}
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Desktop Sidebar */}
      <motion.div
        ref={sidebarRef}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="hidden lg:block fixed left-6 top-24 w-64 h-[calc(100vh-6rem)] overflow-y-auto pb-24 scroll-smooth custom-scrollbar"
        style={{
          maxHeight: "calc(100vh - 200px)",
          marginBottom: "100px",
        }}
      >
        <nav className="space-y-1.5 py-4 px-2">
          {components.map((component) => (
            <motion.button
              key={component.title}
              ref={
                normalizeTitle(activeSection) === normalizeTitle(component.title)
                  ? activeButtonRef
                  : null
              }
              onClick={() => scrollToSection(component.title)}
              className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 ${
                normalizeTitle(activeSection) === normalizeTitle(component.title)
                  ? "bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 font-medium shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }`}
              whileHover={{ x: 4, scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
            >
              {component.title}
            </motion.button>
          ))}
        </nav>
      </motion.div>

      {/* Add padding to content on mobile */}
      <div className="lg:hidden h-24" />
    </>
  );
};
