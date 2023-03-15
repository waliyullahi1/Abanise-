
<template>
  <div>
     <dashbord class="  w-full  "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
       <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md  h-fit mx-4 shadows rounded-[1rem] ld text-2xl shadow bg-white ">
          <form action="" class=" flex  flex-col gap-5 h-fit p-8 text-xl font-semild">

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb- ml-2  text-[17px] ">Network</label>
                 <select  class="w-full font-seibold rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] " placeholder="Password">
                  <option value="network">Network</option>
                  <option value="mtn">MTN</option>
                  <option value="mtn">GLO</option>
                  <option value="9mobile">9mobile</option>
                  <option value="airtime">Airtime</option>
                 </select>
              </div>

               <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb- ml-2  text-[17px] ">Data Plan</label>
                 <select  class="w-full  rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] " >
                  <option value="">Select Data Plan</option>
                  <option value="1">500MB CG - ₦130 - 1 Month </option>
                  <option value="2">1GB CG - ₦260 - 1 Month </option>
                  <option value="3" >2GB CG - ₦520 - 1 Month </option>
                  <option value="4" >3GB CG - ₦780 - 1 Month </option>
                  <option value="5" >5GB CG - ₦1,300 - 1 Month </option> 
                  <option value="6" >10GB CG - ₦2,600 - 1 Month </option>
                  <option >500MB SME DATA - ₦110 - 1 Month </option>
                  <option value="36">1GB SME DATA - ₦220 - 1 Month </option>
                  <option value="37">2GB SME DATA - ₦441 - 1 Month </option>
                  <option value="38">3GB SME DATA - ₦663 - 1 Month </option>
                  <option value="39">5GB SME DATA - ₦1,105 - 1 Month </option>
                  <option value="40" >10GB SME DATA - ₦2,210 - 1 Month </option>
                 </select>

                  <select  class="w-full hiddend rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] ">
                  <option value="">Select Data Plan</option>
                   <option value="8" >9mobile </option>
                  <option value="8" >500MB - ₦430 - 1 Month </option>
                  <option value="9" >1.5GB - ₦860 - 1 Month </option>
                  <option value="10" >2GB - ₦1,032 - 1 Month </option>
                  <option value="11" >3GB - ₦1,290 - 1 Month </option>
                  <option value="12" >4.5GB - ₦1,720 - 1 Month </option>
                  <option value="13" >11GB - ₦3,440 - 1 Month </option>
                  <option value="14" >15GB - ₦4,500 - 1 Month </option>
                 </select>

                  <select  class="w-full hidden  d rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] " >
                  <option value="">Select Data Plan</option>
                  <option value=""> Glo</option>
                  <option value="15" >1GB - ₦475 - 1 Month </option>
                  <option value="16" >2.3GB - ₦910 - 1 Month </option>
                  <option value="17" >3.75GB - ₦1,365 - 1 Month </option>
                  <option value="18" >5.25 - ₦1,820 - 1 Month </option>
                  <option value="19" >7GB - ₦2,375 - 1 Month </option>
                  <option value="20" >9GB - ₦2,580 - 1 Month </option>
                  <option value="21" >12GB - ₦3,800 - 1 Month </option>
                  <option value="55" >Lasting GLO 200MB - ₦195 - 1 Month </option>
                  <option value="56" >Lasting GLO 500MB - ₦200 - 1 Month </option>
                  <option value="57">Lasting GLO 1GB - ₦360 - 1 Month </option>
                  <option value="58" >Lasting GLO 2GB - ₦705 - 1 Month </option>
                  <option value="59" >Lasting GLO  3GB - ₦1,050 - 1 Month </option>
                  <option value="60" >Lasting GLO 5GB - ₦1,750 - 1 Month </option>
                  <option value="61" >Lasting GLO 10GB - ₦3,400 - 1 Month </option>
                 </select>

                  <select  class="w-full hidden  rounded-[.2rem]  py-1 ml-2 border-gray-100  text-[17px] outline-none focus:border-primary border-gray-100 border-[3px] py-[.5rem] ">
                  <option value="">Select Data Plan</option>
                  <option value=""> Airtime</option>
                  <option value="">Select Data Plan</option>
                  <option value="51" >1GB AIRTEL CG - ₦310 - 1 Month </option>
                  <option value="52">2GB AIRTEL CG - ₦615 - 1 Month </option>
                  <option value="53" >5GB AIRTEL CG - ₦1,580 - 1 Month </option><option value="54" >500MB AIRTEL CG - ₦200 - 1 Month </option>
                 </select>
              </div>

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary   text-[17px] ">Recipients</label>
                  <textarea name="" rows="4" placeholder="Recipients" class="text-primary border-gray-100  border-[3px] py-2 px-2   outline-none text-[17px]"></textarea>
                  <small>Seperate multiple Recipient with comma (,)</small>
              </div>
             <label for="" class="text-sm" >Allow Ported Numbers</label>
               <Button class="mt-" :loading="loadingState" @click="register()" loadingText="Authenticating"> Sign up </Button> 
           
        </form>

        <div class="flex gap-1"> <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
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
         this.loadingState=true
         setTimeout(() => {
            this.$router.push({path: '/prev'}) 
         }, 1000);
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