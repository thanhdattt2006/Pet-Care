// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Thay YOUR_REPO_NAME bằng tên repository của bạn trên GitHub
const repoName = 'Pet-Care';

export default defineConfig({
  plugins: [react()],
  // ⬅️ THÊM DÒNG NÀY
  base: `/${repoName}/`,
  // base: '/tên-repo-của-bạn/', // Cú pháp đơn giản hơn
});
