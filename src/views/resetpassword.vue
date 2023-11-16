<template>
  <div class="h-screen  text-[poppins]   w-full overflow-x-hidden ">

    <div class="  md:max-w-1/3  lg:max-w-md sm:max-w-md mx-4 sm:mx-10">
      <h1 class="font-semibold text-xl font-sans  text-center ">Reset password</h1>
             <p  class=" message pl-5 text-2xl text-red-700  text-center text-">{{erromessage}}</p>
             <p  class=" message pl-5 text-2xl text-green-700 pb-9 text-center text-">{{message}}</p>
      <form class="md:max-w-md  lg:max-w-md sm:w-full"  @submit.prevent="submit" action="">
        
             
         
              

            
              <div  class="my-5 w-full">
             <div class="mb-5">
               <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input :type="password" @input="onInput" :class="errorpassword? ' border-secondary':'  border-gray-500 '"  class="w-full   h-[2.5rem]  px-5 outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Password " v-model="form.password"  >  
              <div class="w-0 h-1"><toggle  class="  relative top-3 right-5" @revealPassword="revealPassword" @hidePassword="hidePassword"> </toggle></div> 
               </div>
              <p :class="errorpassword ? 'flex':'hidden '" class="absolute pl-5 text-red-700 text-sm">password must be at least 6 characters.</p>
              
             </div>

             <div>
               <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input :type="passwordConfirm" @input="onInput"  :class="errorconfirmpassword? ' border-secondary':'  border-gray-500 '"   class="w-full   h-[2.5rem]  px-5  outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Confirm Password " v-model="form.comfirmpassword"  >
               <div class="w-0 h-1"><toggle  class="  relative top-3 right-5" @revealPassword="revealPasswordconfirm" @hidePassword="hidePasswordconfirm"> </toggle></div> 
              </div>
              <p :class="errorconfirmpassword ? 'flex':'hidden '" class=" text-red-700 text-sm">The Comfirm password and password must match.</p>

             </div>
            </div>


            


             

              <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> reset password</Button>
              
      </form>

      <p class=" font-semibold">Back Home <router-link class=" text-primary" to="/login">Home</router-link></p>
    </div>
      </div>
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'

 const locationName = window.location.href
 const splitloc = locationName.split('/');
const token =  (splitloc[4])

export default {


  data(){
    return{
      form:{
        password:''
      },
      erromessage:'',
      message:'',
      password:'password',
      passwordConfirm:'password',
      errorpassword:false,
      errorconfirmpassword:false,
    erromessage:'',
    message:'',
      loadingState:false,
      form:{
        password:'3333333333333', 
      },

  
    }
  },
 
   methods: {

  revealPassword() {
      this.password = 'text';
    },
    hidePassword() {
      this.password = 'password';
    },

    revealPasswordconfirm() {
      this.passwordConfirm = 'text';
    },
    hidePasswordconfirm() {
      this.passwordConfirm = 'password';
    },


  resetErrors() {
   
    this.errorpassword = false;
    this.errorconfirmpassword = false;
   
  },
    onInput() {
    this.resetErrors();
  },
  
async submit() {
  this.loadingState = true;
   if (!this.form.password || this.form.password.length <= 6) {
    this.errorpassword = true;
    this.loadingState = false;
    return false;
  } else if ( this.form.comfirmpassword !== this.form.password) {
    this.errorconfirmpassword = true;
    this.loadingState = false;
    return false;
  } else {
     this.loadingState = true;
   
   // Accessing the token parameter
  

   try {
    const response = await fetch('https://api-abanise-five.vercel.app/resetpassword', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({
            token: token,
            newPassword:this.form.password
        })
    });

    if (!response.ok) {
        const errorData = await response.json();
      this.erromessage = errorData.message; 
        throw new Error(errorData.message);
    }
    const data = await response.json();
    
  console.log(data.message)
         this.message =  data.sucesss
} catch (error) {
    console.log(error);
    next({ name: 'login' });
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
</style>