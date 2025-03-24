import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed inset-0 bg-background z-50 flex flex-col items-center justify-center"
      style={{ 
        animation: 'fadeOut 0.5s ease-in-out 2.5s forwards'
      }}
    >
      <div className="flex flex-col items-center">
        <div className="relative mb-8">
          <div className="h-16 w-16 rounded-full border-4 border-primary border-t-transparent animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">
            N
          </div>
        </div>
        <h1 className="text-2xl font-bold mb-2 text-foreground">Nonamemarkdown</h1>
        <p className="text-sm text-muted-foreground mb-8">A simple markdown editor</p>
        
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Created by{" "}
            <a 
              href="https://github.com/nopenonameweirdo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              nopenonameweirdo
            </a>
          </p>
        </div>
      </div>
      
      <style>{`
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;