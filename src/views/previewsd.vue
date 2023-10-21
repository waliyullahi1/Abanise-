
<template>
  <div>
     <dashbord class="  w-full  "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
        <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md  h-fit mx-4 shadows rounded-[1rem] h-fit shadows rounded-[1rem] text-semibold text-2xl shadow bg-white ">
          <!-- <form action="" class=" flex  flex-col gap-5 h-fit p-8 text-xl font-semibold">

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb- ml-2  text-[17px] ">Network</label>
                 <select  class="w-full font-semibold rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] " placeholder="Password">
                  <option value="network">Network</option>
                  <option value="mtn">MTN</option>
                  <option value="mtn">GLO</option>
                  <option value="9mobile">9mobile</option>
                  <option value="airtime">Airtime</option>
                 </select>
              </div>

               <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb- ml-2  text-[17px] ">Amount</label>
                 <input   class="w-full font-semibold rounded-[.2rem]  py-1 px-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] " placeholder="Amount">
                

                 

                  

                  
              </div>

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary   text-[17px] ">Recipients</label>
                  <textarea name="" rows="4" placeholder="Recipients" class="text-primary border-gray-100  border-[3px] py-2 px-2   outline-none text-[17px]"></textarea>
                  <small>Seperate multiple Recipient with comma (,)</small>
              </div>
             <label for="" class="text-sm" >Allow Ported Numbers</label>
               <Button class="mt-" :loading="loadingState" @click="register()" loadingText="Authenticating"> Previews </Button> 
           
        </form> -->

        <div class="text-[16px] m py-5 px-6">
            <p class="text-xl">Transaction Previews</p>

            <div class="mt-10 w-full  mb-" >
                <p class="grid  grid-cols-6 justify-between ml-6 py-1 border-b-2 border-t-2 px-4 "><span class="col-span-4">Network</span> <span class="col-span-2">Mtn</span></p>
                <p class="grid  grid-cols-6 justify-between ml-6 py-1 border-b-2  px-4 "><span class="col-span-4">Data Plan</span> <span class="col-span-2">1GB</span></p>
                 <p class="grid  grid-cols-6 justify-between ml-6 py-1 border-b-2  px-4 "><span class="col-span-4">Recipients</span> <span class="col-span-">0879973453</span></p>
                <p class="grid  grid-cols-6 justify-between ml-6 py-1 border-b-2  px-4 "><span class="col-span-4">Total</span> <span class="col-span-">260NGN</span></p>
                
                
            </div>
             <router-link to="/airtime" class=" text-secondary pt-1">  <p >Cancel</p></router-link>
            <form action="">
                
            </form>
            <label for="" class="">Transaction code</label><br>
            <input type="password" name="" class=" w-full outline-none mb-3 px-3 rounded-[.5rem] border" id="">
              <Button class="mt-" :loading="loadingState" @click="register()" loadingText="Authenticating"> Submit </Button> 
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