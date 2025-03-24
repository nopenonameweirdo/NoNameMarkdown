import { cn } from "@/lib/utils";
import { Pencil, Eye, HelpCircle } from "lucide-react";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const TabNavigation = ({ activeTab, setActiveTab }: TabNavigationProps) => {
  const tabs = [
    {
      id: "text",
      label: "Text",
      icon: <Pencil className="h-4 w-4 mr-2" />
    },
    {
      id: "preview",
      label: "Preview",
      icon: <Eye className="h-4 w-4 mr-2" />
    },
    {
      id: "how",
      label: "How",
      icon: <HelpCircle className="h-4 w-4 mr-2" />
    }
  ];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4">
        <nav className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center px-4 py-3 text-sm font-medium transition-colors",
                "border-b-2 border-transparent",
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "hover:text-primary/80 text-muted-foreground hover:bg-background/50"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default TabNavigation;