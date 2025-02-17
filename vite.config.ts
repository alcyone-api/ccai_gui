import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ["three"]
  },
  plugins: [react()],
  build: {
    minify: 'terser', 
    cssMinify: true, 
    sourcemap: false, 
  },
  
});
