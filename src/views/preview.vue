
<template>
  <div class="text-[poppins]">
     <dashbord class="  w-full  "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
        <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md   mx-4 shadows  h-fit shadows rounded-[1rem] text-semibold text-2xl shadow bg-white ">
         
    <div>
      <div>
        <ul>
          <li class="font-normal text-[15px] flex ju">Network <span>MTN</span></li>
        </ul>
      </div>
    </div>
      
     
        <div class="text-[16px] m py-5 px-6">
            <p class="text-xl">Transaction Previews</p>

            <div class="mt-10 mb-" >
               
            </div>
             <router-link to="/airtime" class=" text-secondary pt-1">  <p >Cancel</p></router-link>
            <form action="">
         
            <label for="" class="">Transaction code</label><br>
            <input type="password" name="" class=" w-full outline-none mb-3 px-3 rounded-[.5rem] border" id="">
              <Button class="mt-" :loading="loadingState" @click="register()" loadingText="Authenticating"> Submit </Button>
            </form> 
        </div>
        <div class="flex gap-1 pl-2"> <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
       return{
        loadingState:false
       }
    },
     methods:{
     register(){
      this.loadingState = true
      setTimeout(() => {
        this.$router.push({path: '/preview'})
      }, 100);
    }
  }
}
</script>

<style>
   .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>