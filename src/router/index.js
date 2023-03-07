import { createRouter, createWebHistory } from 'vue-router'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landingpage",
      component: () => import("../views/landingpg.vue"),
    },

    {
      path: "/card/:id",
      name: "landingpadw",
      component: () => import("../views/waec.vue"),
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/loginpage.vue"),
    },

    {
      path: "/Register",
      name: "register",
      component: () => import("../views/Registerpage.vue"),
    },
  ],
});

export default router
