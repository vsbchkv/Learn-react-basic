import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

// https://vitejs.dev/config

const path = require('path');
export default defineConfig({
    server: {
        port: 7001,
    },
    plugins: [reactRefresh()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
    },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/assets/styles/helpers";`,
      },
    },
  }
})
