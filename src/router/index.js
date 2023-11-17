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
    meta: {
      'solutions':'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins', 
      'pagename':'abaniseedu.com', 
      owner:'ABANISE EDUCATIONAL INSTITUTE || ICT',
      summary:'',
    '  og:type':'',
      'copyright': 'abanise',
      'subject': 'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
      title: 'www.abaniseedu.com - Buy WAEC, NECO, JAMB, NABTEB scratch cards, PINs, TOKEN and result checker online, Buy all exam scratch cards ',
      keywords:'Buy WAEC Scratch Cards Online, Buy NECO Scratch Cards Online, Buy NABTEB Scratch Cards Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins ',
      description:'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.'  ,
      'application-name':'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
     ' summary':'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins',
      'abstract':'Buy WAEC Result Checker Online, Buy NECO Result Checker Online, Buy NABTEB Result Checker Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins'
    }
  },
  {
    path: "/aboutus",
    name: "aboutus",
    component: () => import("../views/aboutus.vue"),
    meta: {
      title: 'About us',
    }
  },
  {
    path: "/card/:id/:card/:condition",
    props: true,
    name: "landingpadw",
    component: () => import("../views/waec.vue"),
   
    meta: {
      title: route => `BUY WAEC RESULT CHECKER PIN AND SCRATCH CARD ONLINE IN NIGERIA ${id}`,
     
    }
    
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
    meta: {
      title: 'Register page '
    }
  },
  {
    path: "/Dashboard",
    name: "dashboard",
    component: () => import("../views/Homepage.vue"),
   beforeEnter: checkAuth,
   meta: {
    title: 'Dashboard'
  }
  },
  {
    path: "/datapage",
    name: "datapge",
    component: () => import("../views/Datapage.vue"),
    beforeEnter: checkAuth,
    meta: {
      title: 'Buy Data Bundle  '
    }
  },
  {
    path: "/airtime",
    name: "airtime",
    component: () => import("../views/Airtime.vue"),
    // beforeEnter: checkAuth,
    meta: {
      title: 'Airtime for All Network '
    }
  },
  {
    path: "/fundHistory",
    name: "fundHistory",
    component: () => import("../views/fundHistory.vue"),
    beforeEnter: checkAuth,
  },
  {
    path: "/scratchcards",
    name: "scratch",
    component: () => import("../views/scratch.vue"),
    beforeEnter: checkAuth,
    meta: {
      title: 'Buy Scratch card WAEC, NECO, NABTEB) || Result  Checker (WAEC, NECO, NABTEB) || pin Exam (GCEWAEC, GCENECO, GCENABTEB) '
    }
  },
  
  {
    path: "/forgetpassword",
    name: "forgetpassword",
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
