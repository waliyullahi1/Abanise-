import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
const routes = [
  {
    path: "/",
    name: "landingpage",
    component: () => import("../views/landingpg.vue"),
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("../views/aboutus.vue"),
  },
  {
    path: "/card/:id",
    props: true,
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
  {
    path: "/Dashboard",
    name: "dashboard",
    component: () => import("../views/Homepage.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/datapage",
    name: "datapge",
    component: () => import("../views/Datapage.vue"),
    meta: { requiresAuth: true }
  },
  {
    path: "/airtime",
    name: "airtime",
    component: () => import("../views/Airtime.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/fund",
    name: "fund",
    component: () => import("../views/fund.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/scratchcards",
    name: "scratch",
    component: () => import("../views/scratch.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/preview",
    name: "previews",
    component: () => import("../views/preview.vue"),
  },
  {
    path: "/Forgetpassword",
    name: "forgetpassword",
    component: () => import("../views/forgetPassword.vue"),
  },
  {
    path: "/verify",
    name: "verify",
    component: () => import("../views/verify.vue"),
  },
  {
      path: "/prev",
      name: "prev",
      component: () => import("../views/previewsd.vue"),
  },
  {
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
  },
  {
      path:"/pagesucess/",
      name:"pagesucess", 
      component : ()=>import ("../views/thankspage.vue")
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
async function checkAuth(to, from, next) {
  try {
    // Send a request to your backend to check if the user is authenticated
    await axios.get('http://localhost:3500/refreshtoken', { withCredentials: true });
    next();
  } catch (error) {
    next('/login'); // redirect to login page if not authenticated
  }
}
export default router
