import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function to safely encode and decode markdown content for URL sharing
export function encodeMarkdown(content: string): string {
  try {
    return btoa(encodeURIComponent(content));
  } catch (error) {
    console.error("Error encoding markdown:", error);
    return "";
  }
}

export function decodeMarkdown(encoded: string): string {
  try {
    return decodeURIComponent(atob(encoded));
  } catch (error) {
    console.error("Error decoding markdown:", error);
    return "";
  }
}

// Function to safely copy text to clipboard
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error("Failed to copy text: ", error);
    return false;
  }
}
