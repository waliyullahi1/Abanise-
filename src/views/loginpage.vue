<template>
  <div class="h-screen     w-full overflow-x-hidden ">

    <div class=" md:max-w-1/3  lg:max-w-md sm:max-w-md mx-4 sm:mx-10">
      <h1 class="font-semibold text-xl font-sans py-11 text-center ">Sign in to your account to continue.</h1>
      <form class="md:max-w-md  lg:max-w-md sm:w-full"  @submit.prevent="submit" action="">
        
           <div  >
              <div  class="flex  b drop-shadow-md  mt-2 ">  <input type="text" :class="erroremail ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry" placeholder="Email " v-model="form.email"  ></div>
              <p :class="erroremail ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']"> enter email</p>

            </div>
           
  


           <div  class="my-5  gap-5">
             <div>
               <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input :type="password" @input="onInput" :class="errorpassword? ' border-secondary':'  border-gray-500 '"  class="w-full   h-[2.5rem]  px-5 outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Password " v-model="form.password"  >  
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
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
 

  data(){
    return{
      password:"password",
      erroremail1:false,
      errorpassword:false,
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
      this.password = 'text';
    },
    hidePassword() {
      this.password = 'password';
    },
      //async sign(){
//   console.log('tttfhcb')
//     try {
//     const response = await fetch('http://localhost:3500/register',{
//       method : "POST",
//       headers: {'Content-Type':'application/json'},
//       credentials:'include',
//       body:JSON.stringify({
//           firstname:this.form.firstName,
//         lastName:this.form.lastName,
//         email:this.form.email,
//         pwd:this.form.password,
//         phone:this.form.phone,
//       })
      
//     })
//   console.log(response.status);
//   } catch (error) {
//     console.log(error)
//   }
//   },

  resetErrors() {
   this.erroremail1 = false;
    this.errorname = false;
    this.errorphone = false;
    this.erroremail = false;
    this.errorpassword = false;
    this.errorconfirmpassword = false;
    this.errortransactionCode = false;
  },
    onInput() {
    this.resetErrors();
  },
  
async submit() {
  this.loadingState = true;
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const regex = /[a-zA-Z]/
  if (!this.form.name) {
    this.errorname = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.email) {
    this.erroremail = true;
    this.loadingState = false;
    return false;
  } else if (!emailPattern.test(this.form.email)) {
    this.erroremail1 = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.phone ||  this.form.phone.length < 10 || regex.test(this.form.phone)) {
    this.errorphone = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.password || this.form.password.length <= 6) {
    this.errorpassword = true;
    this.loadingState = false;
    return false;
  } else if ( this.form.comfirmpassword !== this.form.password) {
    this.errorconfirmpassword = true;
    this.loadingState = false;
    return false;
  } else if (this.form.transactionCode.length < 4 || this.form.transactionCode.length > 4) {
    this.errortransactionCode = true
    this.loadingState = false;
    return false;
  } else {

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