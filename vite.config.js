// vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Tên repo PHẢI KHỚP chính xác tên repo trên GitHub
const repoName = 'Pet-Care'; // Ví dụ: Nếu tên repo là 'PetCare', bạn phải dùng 'PetCare'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Điều kiện base đã đúng: /petcare/ cho build, / cho dev
    base: command === 'build' ? `/${repoName}/` : '/',
  };
});
