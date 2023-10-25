<template>
  <div class="h-screen     w-full overflow-x-hidden text-[poppins]">

    <div class=" md:w-fit w-full md:pt-10 pt-5 drop-shadow-md h-fit  md:h-screen shadow     ">
      <div class="md:max-w-1/2   lg:max-w-1/2sm:max-w-md px-2 md:px-20 sm:w-full ">
      <div class="flex justify-center"> <logo  class="ml-3 pt-5" ></logo></div>
        <h1 class="font-semibold text-xl font-sans  text-center ">Create an Account.</h1>
       <p  class=" message pl-5 text-2xl text-red-700  text-center text-">{{erromessage}}</p>
             <p  class=" message pl-5 text-2xl text-green-700 pb-9 text-center text-">{{message}}</p>
          
      <form class="mx-"  @submit.prevent="submit" action="">
         
           

             <div  class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
              <div>
                <div  class="flex   drop-shadow-md  mt-2 ">  <input type="username" :class="errorFirstname ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry" placeholder="First name " v-model="form.firstname"  ></div>
              <p :class="errorFirstname ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']">please enter your  username</p>
              </div>

             <div>
                <div  class="flex   drop-shadow-md  mt-2 ">  <input type="username" :class="errorLastname ? ' border-secondary':'  border-primary '" @input="onInput" class="w-full focus:border-primary  h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primry" placeholder="Last name " v-model="form.lastname"  ></div>
              <p :class="errorLastname ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']">please enter your  last name properly</p>
              </div>
              
            </div>

             <div  class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
              <div>
                <div class="flex w-full  b drop-shadow-md border-primary mt-2 ">  <input type="text" @input="onInput"   :class="{ 'border-secondary': erroremail || erroremail1, 'border-gray-500': !erroremail && !erroremail1 }" class="w-full   h-[2.5rem]  px-5   outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Email " v-model="form.email"  ></div>
              <p :class="erroremail ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']">please enter your email</p>
              <p :class="erroremail1 ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']">please enter correct email</p>
              </div>

              <div>
               <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input type="text" :class="errorphone ? ' border-secondary':'   border-gray-500'" @input="onInput" class="w-full   h-[2.5rem]  px-5  outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Phone Number" v-model="form.phone"  ></div>
              <p :class="errorphone ? 'flex':'hidden '" class=" absolute pl-5 text-red-700 text-['13rem']">please enter correct phone</p>
              </div>
              
            </div>

              <div  class="my-5 w-full grid grid-cols-1 sm:grid-cols-2 gap-5 justify-between">
             <div>
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


             <div  class="my-5 ">
              <div class="flex  b drop-shadow-md border-primary mt-2 ">  <input :type="transaction" @input="onInput" class="w-full   h-[2.5rem]  px-5 border-gre border-gray-500  outline-none font-normal    border-2 rounded-[5px] focus:border-primary" placeholder="Transaction code " v-model="form.transactionCode"  > <div class="w-0 h-1">
                <toggle  class="  relative top-3 right-5" @revealPassword="revealtransaction" @hidePassword="hidetransaction"> </toggle></div> </div>
              <p :class="errortransactionCode ? 'flex':'hidden '" class=" text-red-700 text-['13rem']">The Transaction code must 4 digit</p>

            </div>


             

              <Button :loading="loadingState" @click="submit()" loadingText="Authenticating"> Register</Button>
              
      </form>

      <p class=" font-semibold mb-40">Already have an account yet? <router-link class=" text-primary" to="/login">Home</router-link></p>
  
      </div>
    </div>
  </div>
</template>





<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
 

  data(){
    return{
      message:'',
      errorphone:'',
      erromessage:'',
      password:'password',
      transaction:'password',
      passwordConfirm:'password',
      erroremail1:false,
      errorname: false,
      errorFirstname:false,
      errorLastname:false,
      erroremail:false,
      errorpassword:false,
      errorconfirmpassword:false,
      errortransactionCode:false,
      loadingState:false,
      form:{
        firstname:'',
        lastname:'',
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

    revealtransaction() {
      this.transaction = 'text';
    },
    hidetransaction() {
      this.transaction = 'password';
    },

    revealPasswordconfirm() {
      this.passwordConfirm = 'text';
    },
    hidePasswordconfirm() {
      this.passwordConfirm = 'password';
    },


  resetErrors() {
   this.erroremail1 = false;
    this.errorname = false;
    this.errorphone = false;
    this.erroremail = false;
    this.errorpassword = false;
    this.errorLastname=false;
    this.errorFirstname=false;
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
  if (!this.form.firstname) {
    this.errorFirstname = true;
    this.loadingState = false;
    return false;
  } if (!this.form.lastname ||this.form.lastname === this.form.firstname) {
    this.errorLastname= true;
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
    console.log('yyyyyy');
      try {
    const response = await fetch('https://api-abanise-5a3s.vercel.app/register',{
      method : "POST",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      body:JSON.stringify({
          firstname:this.form.firstname,
          lastName:this.form.lastname,
        transaction:this.form.transactionCode,
        email:this.form.email,
        pwd:this.form.password,
        phone:this.form.phone,
      })
      
    })
  
  if (!response.ok) {
    const errorData = await response.json();
   this.erromessage = errorData.message;
   this.loadingState = false;
    throw new Error(errorData.message);
    
  }
   this.loadingState = true
  const data = await response.json();
  this.erromessage = ''
  this.message = data.success
  console.log('Success:', data);
  setTimeout(() => {
        this.$router.push({name: 'login'})
        this.loadingState = false
      }, 7000);
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

  .shadow{
    -webkit-box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
-moz-box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
box-shadow: 4px 7px 37px 3px rgba(0,0,0,0.2);
  }
</style>
