<template>
  <div class="h-screen image  fle place-items-end justify-end w-full overflow-x-hidden ">
      <div class="w-">
        <div class="md:max-w-md lg:max-w-md sm:w-full border-2 border-primary mt-20 mx-auto w-5/6   bg-white container opacity  flex flex-col justify- [35rem]  rounded-[1rem] h-fit">
        <div class="py-5 px-5"><div class="w-full mb-10" > 
          <h1 class="text-2xl md:text-4xl   font-semibold text-center">Create account</h1>
          <p class="text-center text-secondary  text-[20px]">Please enter your credentials to proceed</p>
        </div>
       <div>
        <form action="" @submit="register()">
         <div class="md:flex block gap-3 mb-4 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-d text-[15px]">First Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2  "> <input type="text" v-model="form.firstName"  class="w-full font-semiold  h-[2.5rem] ml-4  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondary " placeholder="First Name"></div>{{form.firstName}}
          </div>
            <div class="w-full mt-5 md:mt-0 ">
             <label for="" class="text-primary font-semold text-[15px]">Last Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 ">  <input type="text" class="w-full font-semiold  h-[2.5rem] ml-4  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondary" placeholder="LastName" v-model="form.lastName"  ></div>
          </div>
         </div>

          <label for="" class="text-primary  font-seibold text-[15px] ">Email</label><br>
         <div class="flex bg-white drop-shadow-md border-primary   mb-4 mt-2 bg-gray-100  ">
          <input type="email" v-model="form.email"   class="w-full font-semiold  h-[2.5rem] ml-4  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondary " placeholder="Enter your email">
            </div>
            <div class="md:flex block k gap-3 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-sibold text-[15px] ">Password*</label><br>
            <div class=" flex  bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-3 "> <input type="password" class="w-full font-semiold  h-[2.5rem] ml-4  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondary" v-model="form.password" placeholder="Password"></div>
          </div> 
            <div class="w-full">
             <label for="" class="text-primary font-sebold text-[15px] ">Comfirm Password*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2  mb-10 "> <input type="password" class="w-full font-semiold  h-[2.5rem] ml-4  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondaryfocus:border-secondary "  placeholder="Password"></div>
          </div>
         </div>

           <Button class="mt-2" :loading="loadingState" @click="register()" loadingText="Authenticating">Sign up </Button> 
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
      },

      user: [

      ]
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