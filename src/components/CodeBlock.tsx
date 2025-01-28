import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);
  const files = code.split(/\/\/ [a-zA-Z-]+\.tsx/).filter(Boolean);
  const fileNames = code.match(/\/\/ [a-zA-Z-]+\.tsx/g) || [];
  const [activeTab, setActiveTab] = useState(0);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(files[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      <div className="flex border-b border-gray-700">
        {fileNames.map((fileName, index) => (
          <button
            key={index}
            className={`px-4 py-2 ${
              activeTab === index
                ? "bg-gray-800 text-white border-b-2 border-blue-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {fileName.replace("// ", "")}
          </button>
        ))}
      </div>
      <div className="relative">
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 p-2 rounded-lg bg-gray-800 hover:bg-gray-700"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-gray-400" />
          )}
        </button>
        <SyntaxHighlighter
          language="typescript"
          style={oneDark}
          customStyle={{
            margin: 0,
            borderRadius: "0 0 0.5rem 0.5rem",
          }}
        >
          {files[activeTab].trim()}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};
