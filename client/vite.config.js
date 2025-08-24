<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
<<<<<<< HEAD
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // your Express backend URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
=======
})

>>>>>>> 634287689d7311ee38804b027aabfbdecdbdd3af
