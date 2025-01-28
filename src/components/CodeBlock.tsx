import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  // Split code into separate files if multiple files are present
  const files = code.split(/\/\/ [a-zA-Z-]+\.tsx/).filter(Boolean);
  const fileNames = code.match(/\/\/ [a-zA-Z-]+\.tsx/g) || [];

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative">
      {files.map((fileCode, index) => (
        <div key={index} className="mb-4">
          {fileNames[index] && (
            <div className="bg-gray-800 text-gray-200 px-4 py-2 rounded-t-lg">
              {fileNames[index].replace("// ", "")}
            </div>
          )}
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
                borderRadius: fileNames[index] ? "0 0 0.5rem 0.5rem" : "0.5rem",
              }}
            >
              {fileCode.trim()}
            </SyntaxHighlighter>
          </div>
        </div>
      ))}
    </div>
  );
};
