import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onSave: () => void;
  markdownContent: string;
}

const Header = ({ onSave, markdownContent }: HeaderProps) => {
  return (
    <header className="border-b border-border bg-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-primary">Nonamemarkdown</h1>
          <span className="ml-2 px-2 py-1 text-xs bg-primary/20 text-primary rounded-md">Beta</span>
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <Button 
            variant="ghost" 
            className="text-muted-foreground hover:text-foreground text-sm"
            size="sm"
            asChild
          >
            <a 
              href="https://github.com/nopenonameweirdo" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
