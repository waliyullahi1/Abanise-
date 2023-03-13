<template>
  <div >
    <div class="w-full fixed z-40 h-[5rem] shadows flex justify-between abslute pr-20 bg-white" >
      <div class=" w-full gap-5 items-center  flex py-4 px-4">
        <img src="../assets/image/Menu.svg" class="w-7" alt="">
       <img src="@/assets/logo.png" class="w-[160px]" alt="">
      </div>
      
      <div class="flex gap-3 items-center">
        <img src="../assets/image/account.svg" class="w-[30px]  border rounded-full" alt="">
        <p class="font-semibold flex text-sm ">{{accountname}} Account  <img src="../assets/image/down.svg" alt="" class="w-5 z-10 ml-7"></p>
      </div>
     <div>

     </div>
    </div>
    <div class="lg:w-1/5 lg:block  hidden group sm:bl md:hidden lg:bg-white bg-primary h-screen  fixed  shadows ">
        <div class="w-full h-[7rem]"></div>
          <router-link to="/Dashboard">
            <div class="flex gap-3 font-semibold pb-7 px-3 b text-xl border-b-2 ">
            <div class="lg:text-primary w-6 md:text-white  text-white">
           <img class="w-6" src="../assets/image/dashboard_layout.svg" alt="">
          
          </div>
         
           <span class=" md:hidden transform  duration-300 group-hover:flex hidden lg:flex "> Dashboard</span> </div>
          </router-link>

        <div class="px-3 border-b-2 pb-6 mt-5 gap-4">
          <p class="text-[18px] md:hidden hidden lg:flex text-gray-400 font-semibold">Vend</p>
          <div class="mt-5 flex flex-col gap-4">
            <router-link to="/scratchcards">
              <div class="text-[18px] flex gap-3 font-bold">
                <div class="lg:text-primary w-6 md:text-white text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24">
                  <path d="M4 4C2.895 4 2 4.895 2 6C2 6.552 2.448 7 3 7L21 7C21.552 7 22 6.552 22 6C22 4.895 21.105 4 20 4L4 4 z M 3 10C2.448 10 2 10.448 2 11L2 18C2 19.105 2.895 20 4 20L20 20C21.105 20 22 19.105 22 18L22 11C22 10.448 21.552 10 21 10L3 10 z"  />
                </svg>
                </div> 
                
                <span class="md:hidden hidden lg:flex"> Scratch  cards</span> </div>
            </router-link>

           <router-link to="/datapage"> <p class="text-[18px] flex gap-3 font-bold"> <img src="../assets/image/phonedata.svg" class="w-6" alt=""> <span class="md:hidden hidden lg:flex">  Data </span> </p></router-link>

             <router-link to="/airtime"><p class="text-[18px] flex gap-3 font-bold"> <img src="../assets/image/phoneairtime.svg" class="w-6" alt=""> <span class="md:hidden hidden lg:flex">  Airtime </span>   </p></router-link>
          </div>
        </div>

        <div class="px-3 border-b-2 pb-6 mt-5 gap-4">
          <p class="text-[18px] text-gray-400 font-semibold">Others</p>
          <div class="mt-5 flex flex-col gap-4">
            <router-link to="/fund"><p class="text-[18px] flex gap-3 font-bold"> <img src="../assets/image/wallet.svg" class="w-6" alt=""><span class="md:hidden hidden lg:flex">Wallet <img src="../assets/image/down.svg" alt="" class="w-4 ml-9"> </span>  </p></router-link>

            <p class="text-[18px]  flex gap-3 font-bold"> <img src="../assets/image/transaction.svg" class="w-6" alt=""><span class="md:hidden hidden lg:flex"> Transaction history</span>  </p>

             <p class="text-[18px] flex gap-3 font-bold"> <img src="../assets/image/settings.svg" class="w-6" alt=""><span class="md:hidden hidden lg:flex"> Account setting</span>  </p>

              <p class="text-[18px] flex gap-3 font-bold"> <img src="../assets/image/logout.svg" class="w-6" alt=""> <span class="md:hidden hidden lg:flex">Logout</span></p>
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
  .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>