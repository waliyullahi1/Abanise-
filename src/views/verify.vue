<template>
  <div class="h-screen     w-full overflow-x-hidden ">

    <div class="  md:max-w-1/3  lg:max-w-md sm:max-w-md mx-4 sm:mx-10">
      <h1 class="font-semibold text-xl font-sans py-11 text-center ">Create an Account.</h1>
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


            


             

              <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Register</Button>
              
      </form>

      <p class=" font-semibold">Already have an account yet? <router-link class=" text-primary" to="/login">Home</router-link></p>
    </div>
      </div>
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
 

  data(){
    return{
      password:'password',
      passwordConfirm:'password',
      errorpassword:false,
      errorconfirmpassword:false,
    
      loadingState:false,
      form:{
        password:'', 
      },

  
    }
  },
 
   methods: {
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