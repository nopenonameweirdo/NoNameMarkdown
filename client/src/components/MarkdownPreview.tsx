import { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview = ({ markdown }: MarkdownPreviewProps) => {
  // Define custom components for markdown rendering
  const components = useMemo(() => ({
    // Heading elements
    h1: ({ node, ...props }: any) => (
      <h1 {...props} className="text-xl font-bold mt-6 mb-4 pb-2 border-b border-border" />
    ),
    h2: ({ node, ...props }: any) => (
      <h2 {...props} className="text-lg font-bold mt-5 mb-3" />
    ),
    h3: ({ node, ...props }: any) => (
      <h3 {...props} className="text-md font-bold mt-4 mb-2" />
    ),
    
    // Text elements
    p: ({ node, ...props }: any) => (
      <p {...props} className="mb-4 leading-relaxed" />
    ),
    
    // List elements
    ul: ({ node, ...props }: any) => (
      <ul {...props} className="mb-4 ml-6 list-disc" />
    ),
    ol: ({ node, ...props }: any) => (
      <ol {...props} className="mb-4 ml-6 list-decimal" />
    ),
    li: ({ node, ...props }: any) => (
      <li {...props} className="mb-1" />
    ),
    
    // Quote elements
    blockquote: ({ node, ...props }: any) => (
      <blockquote {...props} className="pl-4 border-l-4 border-primary mb-4 text-muted-foreground" />
    ),
    
    // Link elements
    a: ({ node, ...props }: any) => (
      <a 
        {...props} 
        className="text-primary hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      />
    ),
    
    // Table elements
    table: ({ node, ...props }: any) => (
      <div className="overflow-x-auto mb-4">
        <table {...props} className="w-full border-collapse" />
      </div>
    ),
    th: ({ node, ...props }: any) => (
      <th {...props} className="border border-border p-2 bg-muted" />
    ),
    td: ({ node, ...props }: any) => (
      <td {...props} className="border border-border p-2" />
    ),
    
    // Code elements
    code: ({ node, inline, className, children, ...props }: any) => {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          {...props}
          style={atomDark}
          language={match[1]}
          PreTag="div"
          customStyle={{
            margin: '1rem 0',
            borderRadius: '0.375rem',
          }}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code
          {...props}
          className="bg-muted px-1.5 py-0.5 rounded font-mono text-sm"
        />
      );
    },
  }), []);

  return (
    <div className="markdown-preview border border-border rounded-md p-6 min-h-[calc(100vh-220px)] bg-background overflow-y-auto">
      {markdown ? (
        <ReactMarkdown 
          components={components} 
          remarkPlugins={[remarkGfm]}
        >
          {markdown}
        </ReactMarkdown>
      ) : (
        <div className="text-muted-foreground italic text-center mt-8">
          Your markdown preview will appear here...
        </div>
      )}
    </div>
  );
};

export default MarkdownPreview;
