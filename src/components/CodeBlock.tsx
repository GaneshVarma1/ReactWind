import { useState } from "react";
import { Copy, Check } from "lucide-react";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text:", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 flex items-center gap-2 px-2 py-1 bg-gray-700 hover:bg-gray-600 rounded-md transition-colors"
      >
        {copied ? (
          <>
            <Check className="w-3 h-3 text-green-500" />
            <span className="text-xs text-green-500">Copied!</span>
          </>
        ) : (
          <>
            <Copy className="w-3 h-3 text-gray-400" />
            <span className="text-xs text-gray-400">Copy</span>
          </>
        )}
      </button>
      <pre className="bg-gray-200 dark:bg-gray-700 p-3 pt-10 rounded-md">
        <code>{code}</code>
      </pre>
    </div>
  );
};
