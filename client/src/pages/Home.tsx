import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import Header from "@/components/Header";
import TabNavigation from "@/components/TabNavigation";
import MarkdownEditor from "@/components/MarkdownEditor";
import MarkdownPreview from "@/components/MarkdownPreview";
import HowToUse from "@/components/HowToUse";
import { useToast } from "@/hooks/use-toast";

const Home = () => {
  const [location] = useLocation();
  const { toast } = useToast();
  const [markdown, setMarkdown] = useState("");
  const [activeTab, setActiveTab] = useState("text");

  // Load content from URL or localStorage on component mount
  useEffect(() => {
    // Check URL for shared content
    const params = new URLSearchParams(window.location.search);
    const sharedContent = params.get("content");

    if (sharedContent) {
      try {
        const decodedContent = decodeURIComponent(atob(sharedContent));
        setMarkdown(decodedContent);
        return;
      } catch (error) {
        console.error("Failed to decode shared content");
      }
    }

    // If no shared content, try to load from localStorage
    const savedContent = localStorage.getItem("markdown-content");
    if (savedContent) {
      setMarkdown(savedContent);
    }
  }, [location]);

  // Save content to localStorage whenever it changes
  useEffect(() => {
    const saveTimeout = setTimeout(() => {
      localStorage.setItem("markdown-content", markdown);
    }, 500);
    
    return () => clearTimeout(saveTimeout);
  }, [markdown]);

  // Dummy function to keep the interface consistent
  const handleSave = () => {
    // Save functionality was removed as requested
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header onSave={handleSave} markdownContent={markdown} />
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="flex-1 container mx-auto px-4 py-6">
        {activeTab === "text" && (
          <MarkdownEditor value={markdown} onChange={setMarkdown} />
        )}

        {activeTab === "preview" && (
          <MarkdownPreview markdown={markdown} />
        )}

        {activeTab === "how" && (
          <HowToUse />
        )}
      </main>
    </div>
  );
};

export default Home;
