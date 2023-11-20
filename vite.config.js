import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import pluginRewriteAll from 'vite-plugin-rewrite-all'
import Sitemap from 'vite-plugin-sitemap'
import generateSitemap from 'vite-plugin-pages-sitemap'
import Pages from 'vite-plugin-pages'

// Placeholder function for fetching card data from your API
// async function fetchCardsFromYourApi() {
//   // Replace this with your actual API call
//   const response = await fetch('https://your-api-url/cards');
//   const data = await response.json();
//   return data;
// }

export default defineConfig({
  plugins: [
    Pages({
      onRoutesGenerated: async (routes) => {
        // Define your static routes
        const staticRoutes = [
          { path: "/", name: "index.vue", component: () => import("@/src/views/index.vue") },
          { path: "/aboutus", name: "aboutus", component: () => import("@/src/views/aboutus.vue") },
          { path: "/login", name: "login", component: () => import("@/src/views/loginpage.vue") },
        ]
        // const myArray = useMyStore();
        //  const cards = myArray.items
        //  const cardRoutes = cards.map(card => `/card/${card.id}/${card.card}/${card.condition}`)
        // Fetch data for your dynamic route
        // const cards = await fetchCardsFromYourApi()

        // // Generate dynamic routes based on your data
        // const cardRoutes = cards.map(card => `/card/${card.id}/${card.card}/${card.condition}`)

        // Combine static and dynamic routes
        const allRoutes = [...routes, ...staticRoutes]

        // Generate sitemap
        generateSitemap({ routes: allRoutes, hostname: 'https://www.abaniseedu.com' })
      },
    }),
    vue(), vueJsx(), pluginRewriteAll(),  Sitemap()
  ],
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

