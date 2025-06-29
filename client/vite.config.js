import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'
export default defineConfig({
  plugins: [react()], 
  server: {
    port: 3000,  // Change this if needed
  },
  preview: {
    port: 4173,  // Change this if needed
  },
});
