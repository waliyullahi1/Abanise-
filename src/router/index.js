import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';
import App from '../App.vue'
import { createApp } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
// import VueMeta from 'vue-meta'



const routes = [
  {
    path: "/",
    name: "index.vue",
    component: () => import("../views/index.vue"),
    
     
  },
  {
    path: "/aboutus",
    name: "Aboutus",
    component: () => import("../views/AboutUs.vue"),
   
  },
  {
    path: "/quiz",
    name: "Quiz",
    component: () => import("../views/qiuz.vue"),
   
  },
  {
    path: "/card/:id/:card/:condition",
    props: true,
    name: " Card",
    component: () => import("../views/CardsPage.vue"),
   
  
    
  },
  {
    path: "/login",
    name: "LoginPage",
    component: () => import("../views/loginpage.vue"),
  },
  {
    path: "/Register",
    name: "Register Page ",
    component: () => import("../views/Registerpage.vue"),
   
  },
  {
    path: "/Dashboard",
    name: "Dashboard Page ",
    component: () => import("../views/Homepage.vue"),
   beforeEnter: checkAuth,
 
  },
  {
    path: "/datapage",
    name: "DataBundle",
    component: () => import("../views/Datapage.vue"),
    beforeEnter: checkAuth,
    meta: {
      title: 'Buy Data Bundle  '
    }
  },
  {
    path: "/airtime",
    name: "Airtime",
    component: () => import("../views/Airtime.vue"),
    // beforeEnter: checkAuth,
    meta: {
      title: 'Airtime for All Network '
    }
  },
  {
    path: "/fundHistory",
    name: "FundHistory",
    component: () => import("../views/fundHistory.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/scratchcards",
    name: "Scratch Card",
    component: () => import("../views/scratch.vue"),
    beforeEnter: checkAuth,
   
  },
  
  {
    path: "/forgetpassword",
    name: "Forget",
    component: () => import("../views/forgetPassword.vue"),
  },
  {
    path: "/verify/:token",
    props: true,
    name: "verify",
    component: () => import("../views/resetpassword.vue"),
     beforeEnter: verifyJWT,
  },
  {
      path: "/pin",
      name: "pin",
      component: () => import("../views/pagePin.vue"),
      beforeEnter: checkAuth,
  },
  {
      path: "/test",
      name: "test",
      component: () => import("../views/test.vue"),
  },
  {
      path:"/pagesucess",
      name:"pagesucess", 
      component : ()=>import ("../views/thankspage.vue")
   },

   {
    path:"/transactionreport",
    name:"transaction", 
    component : ()=>import ("../views/TransactionReport.vue"),
    beforeEnter: checkAuth,
 },

 {
  path:"/fund",
  name:"found", 
  component : ()=>import ("../views/fund.vue"),
  beforeEnter: checkAuth,
},

{
  path:"/profile",
  name:"profile", 
  component : ()=>import ("../views/profile.vue"),
  beforeEnter: checkAuth,
}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title

  next()
})

router.replace(router.currentRoute.value.fullPath)


async function checkAuth(to, from, next) {
  try {
    // Send a request to your backend to check if the user is authenticated
    await axios.get('https://api-abanise-five.vercel.app/refreshtoken', { withCredentials: true });
    next();
  } catch (error) {
    next('/login'); 
  }
}

  
async function verifyJWT(to, from, next) {
   // Accessing the token parameter
   const token = to.params.token;

   try {
    const response = await fetch('https://api-abanise-five.vercel.app/valid', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            token: token
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData, 'fffffffff');
        next({ name: 'login' });
        throw new Error(errorData.message);
    }
    const data = await response.json();
    
  console.log(data.message)
    next();
} catch (error) {
    console.log(error);
    next({ name: 'login' });
}

}



export default router
