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
<<<<<<< HEAD
      path: "/card/:id(.*)*",
      name: "id",
=======
      path: "/card/:id",
      props: true,
      name: "landingpadw",
>>>>>>> 911dfa9e6e2f0bce07c5a92b656729a03b9d9a69
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

    {
      path: "/Dashboard",
      name: "dashboard",
      component: () => import("../views/Homepage.vue"),
    },

    {
      path: "/datapage",
      name: "datapge",
      component: () => import("../views/Datapage.vue"),
    },

    {
      path: "/airtime",
      name: "airtime",
      component: () => import("../views/Airtime.vue"),
    },

    {
      path: "/fund",
      name: "fund",
      component: () => import("../views/fund.vue"),
    },
    {
      path: "/scratchcards",
      name: "scratch",
      component: () => import("../views/scratch.vue"),
    },

    {
      path: "/preview",
      name: "previews",
      component: () => import("../views/preview.vue"),
    },

    {
      path: "/prev",
      name: "prev",
      component: () => import("../views/previewsd.vue"),
    },
  ],
});

export default router
