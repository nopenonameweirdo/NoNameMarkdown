import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add custom CSS for font-family and scrollbar styling
const style = document.createElement('style');
style.textContent = `
  body {
    font-family: 'Inter', sans-serif;
  }

  textarea, pre, code {
    font-family: 'Fira Code', monospace;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: hsl(var(--background));
  }
  
  ::-webkit-scrollbar-thumb {
    background: hsl(var(--primary));
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: hsl(var(--primary) / 0.8);
  }
`;

document.head.appendChild(style);

createRoot(document.getElementById("root")!).render(<App />);
