import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import checker from 'vite-plugin-checker';

import path from 'path';

// https://vitejs.dev/config/
export default (config) => {
  process.env = { ...process.env, ...loadEnv(config.mode, process.cwd()) };

  return defineConfig({
    resolve: {
      alias: {
        '@backendTypes': path.resolve(__dirname, process.env.VITE_BACKEND_TYPES_PATH),
        '@utils': path.resolve(__dirname, './src/utils'),
      },
    },
    plugins: [react(), checker({ typescript: true })],
  });
};
