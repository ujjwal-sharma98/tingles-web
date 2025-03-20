import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("@mui")) return "mui"; // Separate MUI into its own chunk
            if (id.includes("react")) return "react"; // Separate React-related code
            return "vendor"; // Other external libraries
          }
        },
      },
    },
    chunkSizeWarningLimit: 700, // Prevent warnings (optional)
  },
})
