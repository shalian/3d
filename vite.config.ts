import type { ConfigEnv } from 'vite'
import { loadEnv, defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv) => {
  const dirRoot = process.cwd()
  const env = loadEnv(mode, dirRoot)
  console.log(env)
  return defineConfig({
    base: './',
    plugins: [vue()],
    resolve: {
      alias: {
        '@': '/src',
        // 'vue-i18n': pathResolve('./node_modules/vue-i18n/dist/vue-i18n.cjs.js'),
      },
    },
    optimizeDeps: {
      include: ['three', 'tween.js'],
    },
    build: {
      outDir: 'dist'
    }
  })
}
