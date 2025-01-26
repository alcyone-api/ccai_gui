import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // Use the React plugin
  server: {
    port: 3000, // Development server port
    open: true, // Automatically open the app in the browser
  },
  build: {
    outDir: 'dist', // Output directory for the build
    sourcemap: true, // Generate source maps for debugging
    minify: 'terser', // Use terser for minification
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for the src directory
    },
  },
});