import { defineConfig } from 'vite';
import { resolve } from 'path';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // alias: {
    //   '@': resolve(__dirname, 'src'), // Устанавливаем алиас '@' на папку 'src'
    //   '@@' : resolve(__dirname, 'node_modules') // Устанавливаем алиас '@@' на папку 'node_modules'
    // },
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '$', replacement: resolve(__dirname, 'node_modules') },
    ],
  },
})
