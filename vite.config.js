import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import Sitemap from 'vite-plugin-sitemap'
import generateSitemap from 'vite-plugin-pages-sitemap'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [Pages({
    onRoutesGenerated: routes => (
      generateSitemap({ routes })
    ),
  }),vue(), vueJsx(), pluginRewriteAll(),  Sitemap()  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    commonjsOptions: {
      esmExternals: true
    }
  }
})
