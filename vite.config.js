// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const repoName = 'petcare';

// ✅ SỬ DỤNG HÀM CÓ ĐIỀU KIỆN
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Nếu đang chạy lệnh 'build' (cho deploy), dùng /tên-repo/.
    // Nếu đang chạy lệnh 'serve' (dev), dùng /
    base: command === 'build' ? `/${repoName}/` : '/',
  };
});
