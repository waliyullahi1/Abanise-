<template>
  <div>
    <div class=" w-fit fixed animate-bounce right-[1rem] bottom-[3rem] 0 top- flex justify-end ">
     <div class="bg- bg-green-600 cursor-pointer shadow-[90px] rounded-full p-2">
       <a href="https://wa.me/message/SRWH2WAPTXUAN1">
        <img class="w-[50px] group  hover:scale-105 f" src="@/assets/image/whatsapps.svg"/>
       </a>
     </div>
    </div>
  <section class="  mt-10 bg-[#060d0b] w-full ">
       <div class="flex md:flex-row flex-col  mx-auto  container justify-between items-center px-5 py-5">
          <p class="fd text-white">Get connected with us on socials network!</p>
          <div class="flex gap-3">
            <a href=" " class=" flex gap-1"><img src="@/assets/image/whatsapp.svg" class="w-5"/><p class="text-white"> Whatsapp</p></a>

            <a href=" " class=" flex gap-1"><img src="@/assets/image/Facebook.svg" class="w-5"/><p class="text-white">Facebook</p></a>

            <a href=" " class=" flex gap-1"><img src="@/assets/image/twitter.svg" class="w-5"/><p class="text-white"> Twitter</p></a>
          </div>
       </div>
        <div class="flex py-10 gap- container px-5 border-t-2 mx-auto">
        <div class="w-full md:w-1/3 mr-10">
          <logos class="w-32 "></logos>
          <p class="text-[15px] text-white">We are the best source. With a platform that is trusted by Paystack , you can shop online with complete confidence and no worries</p>
        </div>

       <div class=" w-full md:flex hidden">
         <div class="md:grid md:grid-cols-3 flex flex-col justify-center text-white  ">
          

           <div class="mt-5 t">
                <p class=" text-[15px] font-semld mb-5 ">PRODUCT</p>
                <div class="flex flex-col text-[14px]  gap-2">
                    <a href="#section" class=" hover:text-secondary  w-fit " >Vend Jamb Pin </a>
                    <a href="#section" class=" hover:text-secondary  w-fit ">Waec scratch card </a>
                      <a href="#section" class=" hover:text-secondary  w-fit ">Waec GCE epin</a>
                     <a href="#section" class=" hover:text-secondary  w-fit ">Neco scratch card </a>
                       <a href="#section" class=" hover:text-secondary  w-fit ">Nabteb scratch card </a>
                         <a href="#section" class=" hover:text-secondary  w-fit ">Nabteb GCE Epin </a>
                </div>
           </div>

          <div class="mt-5">
             <p class=" text-[15px] mb-5 te ">USEFUL LINKs</p>
                 <div class=" text-[15px]  flex-col  flex gap-2 ">
                    <a href="#how" class=" hover:text-secondary w-fit ">How it is works </a>
                    <a href="" class=" hover:text-secondary  w-fit  ">Blogs </a>
                      <a href="" class="hover:text-secondary    w-fit ">Princing</a>
                     <a href="" class=" hover:text-secondary   w-fit ">Helping </a>
                </div>
           </div>

           <div class="mt-5">
             <p class="w-fit text-[15px] mb-5 font-sed  ">CONTACT</p>
                 <div class="flex flex-col text-[14px] gap-2">
                    <a href="" class=" w-fit  hover:text-secondary flex  "><img src="@/assets/image/Location.svg" class="w-5"/> Ibadan Road, Arround Total FIlling Station, Iwo </a>
                    <a href=""  class="  w-fit flex hover:text-secondary   "><img src="@/assets/image/phone.svg" class="w-7"/>07068393706, 08134105599 </a>
                     
                </div>
           </div>

           
         </div>
       </div>
       <div class="flex text-white justify-center gap-1">
            <img src="../assets/image/copy.svg" alt="" class="w-3" />
            <small class="font-semibold text- text-sm gap-1 flex"
              >abaniseedu.com
              <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
            </small>
          </div>
      </div>
    </section>
  </div>
</template>

<script>
import Logos from './Logos.vue'
export default {
  components: { Logos },

}
</script>

<style>

</style>