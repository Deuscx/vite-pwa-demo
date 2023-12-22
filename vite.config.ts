import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa';
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      dts: 'src/auto-imports.d.ts',
      imports: [
        'vue',
        {
          'vue-router': [
            'useLink',
            'useRoute',
            'useRouter',
            'onBeforeRouteLeave',
            'onBeforeRouteUpdate',
            'createRouter',
            'createWebHistory',
          ],
        },
      ]
      /* options */
    }),
    VitePWA({
      strategies: 'injectManifest',
      filename: 'sw.ts',
      srcDir: 'src',
      registerType: 'autoUpdate',
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      devOptions: {
        navigateFallbackAllowlist: [/^index.html$/],
        enabled: true,
      }
    })],
})
