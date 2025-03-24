import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";
import fs from "fs";
import express from "express";

export async function registerRoutes(app: Express): Promise<Server> {
  // Basic API health check route
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", message: "Nonamemarkdown API is running" });
  });

  // Serve HTML files directly from the public directory
  app.use(express.static("public", {
    index: false, // Don't use index.html as default
    extensions: ['html'] // Allow extension-less HTML files
  }));

  // Serve HTML files directly from the client directory in development
  app.use(express.static("client", {
    index: false, // Don't use index.html as default
    extensions: ['html'] // Allow extension-less HTML files
  }));

  const httpServer = createServer(app);
  
  return httpServer;
}
