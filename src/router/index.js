import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [


    {
      path: "/",
      name: "landingpage",
      component: () => import("../views/landingpage.vue"),
    },

    {
      path: "/waec",
      name: "about",
      component: () => import("../views/waec.vue"),
    },








  ],
});

export default router
