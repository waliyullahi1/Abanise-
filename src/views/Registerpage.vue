<template>
  <div class="h-screen image  fle place-items-end justify-end w-full overflow-x-hidden ">
      <div class="w-">
        <div class="md:max-w-md lg:max-w-md sm:w-full border-4 border-primary mt-20 mx-auto w-5/6   bg-white container opacity  flex flex-col justify- [35rem]  rounded-[1rem] h-fit">
        <div class="py-5 px-5"><div class="w-full mb-10" > 
          <h1 class="text-4xl md:text-5xl py-  font-bold text-center">Create account</h1>
          <p class="text-center text-secondary  text-[20px]">Please enter your credentials to proceed</p>
        </div>
       <div>
        <form action="">
         <div class="flex gap-5 mb-7 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-semibold text-xl ">First Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2  "> <input type="text" v-model="form.firstName"  class="w-full font-semibold  h-[3.5rem] ml-4  border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="First Name"></div>{{form.firstName}}
          </div>
            <div class="w-full">
             <label for="" class="text-primary font-semibold text-xl ">Last Name*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 ">  <input type="text" class="w-full font-semibold  border-primary border-b-4  h-[3.5rem] ml-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="LastName" v-model="form.lastName"  ></div>
          </div>
         </div>

          <label for="" class="text-primary  font-semibold text-xl ">Email</label><br>
         <div class="flex bg-white drop-shadow-md border-primary mt-2 mb-7 bg-gray-100  ">
          <input type="email" v-model="form.email"   class="w-full h-[3.5rem] ml-4 focus:bg-grey-100 font-semibold  border-primary border-b-4 bg-gray-100 outline-none focus:border-secondary border-r-4 rounded-r-lg  " placeholder="Enter your email">
            </div>
            <div class="flex gap-5 w-full ">
          <div class="w-full">
             <label for="" class="text-primary font-semibold text-xl ">Password*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-7 "> <input type="password" class="w-full h-[3.5rem] ml-4 font-semibold  border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " v-model="form.password" placeholder="Password"></div>
          </div> <h1>{{ form.password }}</h1>
            <div class="w-full">
             <label for="" class="text-primary font-semibold text-xl ">Comfirm Password*</label><br>
            <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-7 "> <input type="password" class="w-full font-semibold h-[3.5rem] ml-4 border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="Password"></div>
          </div>
         </div>

           <Button class="mt-10" :loading="loadingState" loadingText="Authenticating">Sign up </Button> 
            <div class="justify-between flex ">
              
             <p class="text-xl text-semibold">Already have account <a href="" class="text-secondary  font-semibold">Sign in</a></p>
            </div> 
        </form>
      </div>
    </div>
        <!-- <Input label="Charges" type="text" class="  " placeholder="Enter your email address" :error="false" inputValue="100" :disabled=disabled ></Input> -->
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      form:{
        firstName:'',
        lastName:'',
        email:'',
        password:'',
      }
    }
  }
}
</script>

<style>
  .image{
    background-image: url(../assets/image/bglogin.JPG);
  }
</style>