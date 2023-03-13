<template>
  <div class="h-screen image  fle place-items-end justify-end w-full overflow-x-hidden ">
      <div class="w-">
        <div class="md:max-w-md lg:max-w-md sm:w-full border-4 border-secondary mt-20 mx-auto w-5/6   bg-white container opacity  flex flex-col justify- [35rem]  rounded-[1rem] h-fit">
        <div class="py-5 px-5"><div class="w-full mb-20" > 
          <h1 class="text-4xl md:text-5xl py-3 font-bold text-center">Login in</h1>
          <p class="text-center text-gray-500  text-[20px]">Please enter your credentials to proceed</p>
        </div>
       <div>
        <form action="">
          <label for="" class="text-primary font-semibold text-xl ">Email Address</label><br>
         <div class="flex bg-white  bg-gray-100 drop-shadow-md border-primary mt-2 mb-7 "><img src="../assets/image/user.svg" alt="" class=" py-2 w-[2.5rem] border-primary border-b-4"> <input type="email" class="w-full font-semibold  border-primary border-b-4 bg-gray-100 for outline-none   border-r-4 rounded-r-lg focus:border-secondary " placeholder="Email"></div>

          <label for="" class="text-primary  font-semibold text-xl ">Password</label><br>
         <div class="flex bg-white drop-shadow-md border-primary mt-2 bg-gray-100  ">
          <img src="../assets/image/password.svg" alt="" class=" py-2  w-[2.5rem] border-primary border-b-4"> <input type="password" class="w-full focus:bg-grey-100 font-semibold  border-primary border-b-4 bg-gray-100 outline-none focus:border-secondary  border-r-4 rounded-r-lg  " placeholder="Username">
        </div>
          <a href="" class="font-semibold text-x">Forget password </a>
           <Button class="mt-10" :loading="loadingState" loadingText="Authenticating">Login </Button> 
            <div class="justify-between flex ">
              
            <router-link to="/Register">
              <p>Dont have account <a href="" class="text-secondary text-[15px] font-semibold">Sign up</a></p>
            </router-link> 
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

}
</script>

<style>
  .image{
    background-image: url(../assets/image/bglogin.JPG);
  }
</style>