import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface SidebarProps {
  components: { title: string }[];
  activeSection: string;
}

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
      {/* Mobile Dropdown */}
      <div className="lg:hidden fixed top-[72px] left-0 right-0 z-40 bg-white dark:bg-gray-900 p-4 shadow-md">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
        >
          <span className="text-gray-700 dark:text-gray-200">
            {activeComponent?.title || "Select Component"}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 right-0 mt-2 mx-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-[60vh] overflow-y-auto"
          >
            {components.map((component) => (
              <button
                key={component.title}
                onClick={() => scrollToSection(component.title)}
                className={`w-full text-left px-4 py-2 transition-colors ${
                  normalizeTitle(activeSection) ===
                  normalizeTitle(component.title)
                    ? "bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {component.title}
              </button>
            ))}
          </motion.div>
        )}
      </div>

      {/* Add padding to content on mobile */}
      <div className="lg:hidden h-20" />

      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className="hidden lg:block fixed left-4 top-24 w-64 h-[calc(100vh-6rem)] overflow-y-auto pb-24 scroll-smooth"
        style={{
          maxHeight: "calc(100vh - 200px)",
          marginBottom: "100px",
        }}
      >
        <nav className="space-y-1 py-4">
          {components.map((component) => (
            <motion.button
              key={component.title}
              ref={
                normalizeTitle(activeSection) ===
                normalizeTitle(component.title)
                  ? activeButtonRef
                  : null
              }
              onClick={() => scrollToSection(component.title)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                normalizeTitle(activeSection) ===
                normalizeTitle(component.title)
                  ? "bg-primary-100 dark:bg-primary-900 text-primary-900 dark:text-primary-100"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.98 }}
            >
              {component.title}
            </motion.button>
          ))}
        </nav>
      </div>
    </>
  );
};
