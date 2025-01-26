import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'terser', // Minify JavaScript
    cssMinify: true, // Minify CSS
    sourcemap: false, // Disable source maps for production
  },
});

