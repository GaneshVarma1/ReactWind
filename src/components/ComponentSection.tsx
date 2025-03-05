import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Copy, Check } from "lucide-react";
import { useComponentTheme } from '../context/ComponentThemeContext';

interface ComponentSectionProps {
  title: string;
  code: string;
  children: React.ReactNode;
}

export const ComponentSection = ({ title, code, children }: ComponentSectionProps) => {
  const { theme } = useComponentTheme();
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const codeRef = useRef<HTMLDivElement>(null);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleCode = () => {
    setIsCodeVisible(!isCodeVisible);
    // Scroll to code section when showing
    if (!isCodeVisible) {
      setTimeout(() => {
        codeRef.current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'center'
        });
      }, 100);
    }
  };

  return (
    <div className="mb-16 relative z-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className={`text-2xl font-semibold ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {title}
        </h2>
        <button
          onClick={toggleCode}
          className={`inline-flex items-center gap-2 px-4 py-2 ${
            theme === 'dark' 
              ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
              : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
          } rounded-xl transition-colors cursor-pointer`}
        >
          <Code className="w-4 h-4" />
          <span>{isCodeVisible ? "Hide Code" : "View Code"}</span>
        </button>
      </div>

      {/* Component Preview */}
      <div className={`mb-8 rounded-2xl border ${
        theme === 'dark' 
          ? 'border-gray-800 bg-gray-900' 
          : 'border-gray-200 bg-white'
        } overflow-hidden`}>
        <div className="p-8">
          {children}
        </div>
      </div>

      {/* Code Section */}
      <AnimatePresence>
        {isCodeVisible && (
          <motion.div
            ref={codeRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative mt-4"
          >
            <div className="absolute right-4 top-4 z-10">
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-lg bg-gray-700 text-white hover:bg-gray-600 transition-colors"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
            <pre className="p-4 bg-gray-800 rounded-xl overflow-x-auto">
              <code className="text-sm text-gray-100 block whitespace-pre">
                {code}
              </code>
            </pre>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}; 