<template>

  <div>
     <dashbord class="  w-full hiddn "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
       <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class="w-full w-2/5 h-fit shadows rounded-[1rem] py-5 px-5 text-semibold text-2xl shadow bg-white ">
           <h1 class="text-4xl">Welcome {{User}} Waliulahi</h1>
           <div>
              <div class="w-full bg-gray-100 shadow-xl mt-[7rem] shadow py-5 bg-priary">
                <h1 class="text-3xl mb-2 font- text-center">Current Account</h1>
                <p class="text-4xl text-center mb-4">{{balance}}71,189.00 NGN</p>
              </div> 
           
              <div class="w-full bg-gray-100 shadow-xl mt-[4rem] shadow py-5 bg-priary">
                <h1 class="text-3xl mb-2 font-normal text-center">Virtual Account</h1>
                <p class="text-2xl text-center ">{{accountBranch}}Wema bank</p>
                <p class="text-xl  text-center ">{{accountName}}waheed walilahi</p>
                <p class="text-xl mt-1 text-center ">{{accountNumber}}02345465475443</p>
              </div> 
            </div>
        <div class="flex gap-1"> <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
        </div>
    </div>
  </div>
  <div>

  </div>
</template>

<script>
export default {
    components:{
       
    }
}
</script>

<style>

</style>