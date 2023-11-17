<template>
  <div class="h-screen   text-[poppins] bg2 w-full overflow-x-hidden ">

    <div class=" w-fit pt-20 drop-shadow-md bg h-screen shadow  ">

      <div class="md:max-w-1/2   lg:max-w-1/2 sm:max-w-md md:px-20 px-2  sm:w-full">
       <div class="flex justify-center"> <logo  class="ml-3 pt-5" ></logo></div>
         <h1 class="font-semibold text-xl font-sans  text-center ">Sign in to your account to continue.</h1>
       <p  class=" message pl-5 text-xl text-red-700 pb-9 uppercase text-center text-">{{erromessage}}</p>
      <form class=" "  @submit.prevent="submit" action="">
        
           <div  >
              <div  class="flex  b drop-shadow-md  mt-2 ">  <input type="text" :class="erroremail ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry" placeholder="Email " v-model="form.email"  ></div>
              <p :class="erroremail ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']"> enter email</p>

            </div>
           
  


           <div  class="my-5  gap-5">
             <div>
               <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input :type="paswo" @input="onInput" :class="errorpassword? ' border-secondary':'  border-gray-500 '"  class="w-full   h-[2.5rem]  px-5 outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Password " v-model="form.password"  >  
              <div class="w-0 h-1"><toggle  class="  relative top-3 right-5" @revealPassword="revealPassword" @hidePassword="hidePassword"> </toggle></div> 
               </div>
              <p :class="errorpassword ? 'flex':'hidden '" class="absolute pl-5 text-red-700 text-sm">password must be at least 6 characters.</p>
              <router-link class=" text-primary" to="/Forgetpassword"><p class="mt- text-red-800 text-right font-semibold "> Forgot Password?</p></router-link>
             </div>

           
            </div>
             

              <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Login</Button>
              
      </form>

      <p class=" font-semibold">Dont have an account yet?  <router-link class=" text-primary" to="/Register">Register</router-link></p>
  
      </div>
       </div>


  </div>
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useHead } from '@vueuse/head'


export default {
  setup() {
    
  

    useHead({
      // Can be static or computed
      title: 'Login - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
      meta: [
        {
          name: `description`,
          content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
        },
        // {
        //   itemprop: `name,
        //   content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
        // },
        {
          name: 'site_name',
          content: 'abaniseedu.com',
        },
        {
          name: 'type',
          content: 'website ',
        },
        {
          name: 'site_name',
          content: 'abaniseedu.com',
        },
        {
          name: 'type',
          content: 'website ',
        },

        {
          name: 'url',
          content: 'abaniseedu.com',
        },
      
        ],
     
    })
    return { };
  },

  data(){
    return{
      errorphone:'',
      erromessage:'',
      paswo:"password",
      erroremail:false,
      errorpassword:false,
      loadingState:false,
      form:{
        username:'',
        email:'',
        password:'',
        comfirmpassword:'',
        phone:"",
        transactionCode:"",
      },

      user: [

      ]
    }
  },
 
   methods: {

     revealPassword() {
      this.paswo = 'text';
    },
    hidePassword() {
      this.paswo = 'password';
    },
     resetErrors() {

    this.erroremail = false;
    this.errorpassword = false;
  },
    onInput() {
    this.resetErrors();
  },
  


async submit() {
  this.loadingState = true ;
 
     if (!this.form.email) {
    this.erroremail = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.password) {
    this.errorpassword = true;
    this.loadingState = false;
    return false;
  } else {

      try {
    const response = await fetch('https://api-abanise-five.vercel.app/login',{
      method : "POST",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({
                email: this.form.email,
                pwd: this.form.password,
      })
      
    })
  
  if (!response.ok) {
    this.loadingState = false
    const errorData = await response.json();
   this.erromessage = errorData.message;
    throw new Error(errorData.message);
    
  }
   this.loadingState = true
  const data = await response.json();
  this.message = data.success
  console.log('Success:', data);
   setTimeout(() => {
        this.$router.push({name: 'dashboard'})
        this.loadingState = false
      }, 2);
  } catch (error) {
    console.log(error)
  }
  }
},



  },

 watch: {
  email(value) {
    this.submit();
  }
}

}
</script>

<style>
  .image{
    background-image: url(../assets/image/dash.jpg);
  }
  /* .bg{
    background-image: url(../assets/image/aminatebg.gif);
    background-position: center;
    background-size:cover;
    background-repeat: repeat;
  }
  .bg2{
     background-image: url(../assets/image/animatebg2.gif);
    background-position: center;
    background-size:cover;
    background-repeat: repeat;
  } */

  .shadow{
    -webkit-box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
-moz-box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
  }
</style>