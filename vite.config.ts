import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // React plugin
import { visualizer } from 'rollup-plugin-visualizer'; // Optional: For bundle analysis

export default defineConfig({
  plugins: [
    react(), // Enable React support
    visualizer({ open: true }), // Optional: Visualize bundle size
  ],
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
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          react: ['react', 'react-dom'],
          reactIcons: ['react-icons'],
          reactRouter: ['react-router-dom'],
          vite: ['vite'], // Optional: Split Vite runtime
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src', // Example alias for the src directory
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'], // Pre-bundle dependencies
  },
});