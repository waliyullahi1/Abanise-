<template>
  <div class="h-screen image  fle place-items-end justify-end w-full overflow-x-hidden ">
      <div class="w-">
        <div class="md:max-w-md lg:max-w-md sm:w-full border-4 border-primary mt-20 mx-auto w-5/6   bg-white container opacity  flex flex-col justify- [35rem]  rounded-[1rem] h-fit">
        <div class="py-5 px-5"><div class="w-full mb-10" > 
          <h1 class="text-4xl md:text-5xl py-  font-bold text-center">Create account</h1>
          <p class="text-center text-secondary  text-[20px]">Please enter your credentials to proceed</p>
        </div>
       <div>
        <form action="" @submit="register()">
         <div class="flex gap-5 mb-7 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-semibold text-[17px]">First Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2  "> <input type="text" v-model="form.firstName"  class="w-full font-semibold  h-[3.5rem] ml-4  border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="First Name"></div>{{form.firstName}}
          </div>
            <div class="w-full">
             <label for="" class="text-primary font-semibold text-[17px]">Last Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 ">  <input type="text" class="w-full font-semibold  border-primary border-b-4  h-[3.5rem] ml-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="LastName" v-model="form.lastName"  ></div>
          </div>
         </div>

          <label for="" class="text-primary  font-semibold text-[17px] ">Email</label><br>
         <div class="flex bg-white drop-shadow-md border-primary mt-2 mb-7 bg-gray-100  ">
          <input type="email" v-model="form.email"   class="w-full h-[3.5rem] ml-4 focus:bg-grey-100 font-semibold  border-primary border-b-4 bg-gray-100 outline-none focus:border-secondary border-r-4 rounded-r-lg  " placeholder="Enter your email">
            </div>
            <div class="flex gap-5 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-semibold text-[17px] ">Password*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-7 "> <input type="password" class="w-full h-[3.5rem] ml-4 font-semibold  border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " v-model="form.password" placeholder="Password"></div>
          </div> 
            <div class="w-full">
             <label for="" class="text-primary font-semibold text-[17px] ">Comfirm Password*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-7 "> <input type="password" class="w-full font-semibold h-[3.5rem] ml-4 border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="Password"></div>
          </div>
         </div>

           <Button class="mt-10" :loading="loadingState" @click="register()" loadingText="Authenticating">Sign up </Button> 
            <div class="justify-between flex ">
              
            
              <p class=" text-semibold">
                Already have account  <router-link to="/login"><a href="" class="text-secondary  font-semibold">Sign in</a> </router-link>
              </p>
            
            </div> 
        </form>
      </div>
    </div>
       
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      loadingState:false,
      form:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
      }
    }
  },
  methods: {
    register(){
      this.loadingState = true
      // const newUsers = this.users.forEach(user => {
      //   if (user.email !== form.email) {
      //     if (user.username !== form.username) {
      //       if(form.password >= 8){
      //         this.users.push({
      //           email: form.email,
      //           username: form.username,
      //           password: form.password,
      //         })

      //         localStorage.setItem('users', JSON.stringify(this.users))
      //       } else {
      //         this.password_error = true
      //       }
      //     } else {
      //       console.log('this username already exists')
      //     }
      //   } else {
      //     console.log('this email already exists')
      //   }
      // });

      setTimeout(() => {
        this.$router.push({path: '/Dashboard'})
      }, 1000);
    }
  },

}
</script>

<style>
  .image{
    background-image: url(../assets/image/bglogin.JPG);
  }
</style>