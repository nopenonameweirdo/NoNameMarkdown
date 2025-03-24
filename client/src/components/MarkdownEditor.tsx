import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface MarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownEditor = ({ value, onChange }: MarkdownEditorProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Handle tab key in the textarea
  useEffect(() => {
    const handleTabKey = (e: KeyboardEvent) => {
      if (e.key === 'Tab' && document.activeElement === textareaRef.current) {
        e.preventDefault();
        
        const textarea = textareaRef.current;
        if (!textarea) return;
        
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        
        // Insert tab at cursor position
        const newValue = value.substring(0, start) + '  ' + value.substring(end);
        onChange(newValue);
        
        // Move cursor position after the inserted tab
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = start + 2;
        }, 0);
      }
    };
    
    document.addEventListener('keydown', handleTabKey);
    return () => document.removeEventListener('keydown', handleTabKey);
  }, [value, onChange]);

  return (
    <div className={cn(
      "border border-border rounded-md bg-background",
      "relative min-h-[calc(100vh-220px)]"
    )}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          "w-full h-full min-h-[calc(100vh-220px)] p-6",
          "bg-transparent text-foreground",
          "focus:outline-none focus:ring-0",
          "resize-none font-mono text-sm",
          "placeholder:text-muted-foreground"
        )}
        placeholder="# Start writing your markdown here..."
        spellCheck="false"
      />
    </div>
  );
};

export default MarkdownEditor;