import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    host: true
  },
  build: {
    outDir: process.env.NODE_ENV_OUTDIR,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const ext = assetInfo.names[0].split('.').pop()

          // 判断是否是图片类型
          if (ext && ['png', 'jpg', 'jpeg', 'gif', 'svg', 'webp', 'avif'].includes(ext)) {
            return 'img/movie/oscars/[name].[hash][extname]'
          }

          // 其他资源保持默认或另做处理
          return 'assets/[name].[hash][extname]'
        }
      }
    }
  },
  base: './'
})
