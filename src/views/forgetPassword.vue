<template>
  <div class="h-screen     w-full overflow-x-hidden ">

    <div class=" md:max-w-1/3  lg:max-w-md sm:max-w-md mx-4 sm:mx-10">
      <h1 class="font-semibold text-xl font-sans py-11 text-center ">Reset Password.</h1>
      <form class="md:max-w-md  lg:max-w-md sm:w-full"  @submit.prevent="submit" action="">
        
           <div class="mb-5" >
              <div  class="flex  b drop-shadow-md  mt-2 ">  <input type="text" :class="erroremail ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry" placeholder="Email " v-model="form.email"  ></div>
              <p :class="erroremail ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']"> enter email</p>

            </div>
           
  


          
             

              <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Login</Button>
              
      </form>

      <p class=" font-semibold">Back to home?  <router-link class=" text-primary" to="/login">Register</router-link></p>
    </div>
      </div>
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
 

  data(){
    return{
        loadingState:false,
     erroremail : '' ,
      form:{
        email:'',  
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

   
   resetErrors() {
   this.erroremail1 = false;
   
  },
  onInput() {
    this.resetErrors();
  },
  
async submit() {
    this.loadingState = true;
  if (!this.form.email) {
    console.log('hhhhh');
    this.erroremail = true;
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