<template>
  <div class="h-screen image  fle place-items-end justify-end w-full overflow-x-hidden ">
      <div class="w-">
        <div class="md:max-w-md lg:max-w-md sm:w-full border-2 border-primary mt-20 mx-auto w-5/6   bg-white container opacity  flex flex-col justify- [35rem]  rounded-[1rem] h-fit">
        <div class="py-5 px-5"><div class="w-full mb-4" > 
          <h1 class="text-4xl md:text-3xl py-3 fontld text-center">Login in</h1>
          <p class="text-center text-gray-500  text-[15px]">Please enter your credentials to proceed</p>
        </div>
       <div>
        <form action="">
          <label for="" class="text-primary font-semd text-[15px] ">Email Address</label><br>
         <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-4 "><img src="@/assets/image/user.svg" alt="" class=" py-2 w-[1rem] border-primary border-b-2"> <input type="email" class="w-full font-semiold  h-[2.5rem] ml-  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondaryfocus:border-secondary " placeholder="Email"></div>

          <label for="" class="text-primary  font-semiold text-[15px] ">Password</label><br>
         <div class="flex bg-white drop-shadow-md border-primary mt-2 bg-gray-100  ">
          <img src="@/assets/image/passwords.svg" alt="" class=" py-2 w-[1rem] border-primary border-b-2">
          <input type="password" class="w-full font-semiold  h-[2.5rem] ml-  border-primary border-b-2 bg-gray-100 for outline-none   border-r-2 rounded-r-lg focus:border-secondaryfocus:border-secondary  " placeholder="Username">
        </div>
          <a href="" class="font-semibold text-x">Forget password </a>
           <Button class="mt-10" :loading="loadingState" loadingText="Authenticating">Login </Button> 
            <div class="justify-between flex ">
              
            <router-link to="/Register">
              <p>Dont have account <a href="" class="text-secondary text-[15px] font-semibld">Sign up</a></p>
            </router-link> 
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

}
</script>

<style>
  .image{
    background-image: url(../assets/image/bglogin.JPG);
  }
</style>