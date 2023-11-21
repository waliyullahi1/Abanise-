<template>
  <div class="text-[poppins]">
    <Header :headertext="false" class="fixed z-40 top-0"></Header>
    <section class="w-full  flex justify-center ">
        <div class="pt-32 w-full md:w-2/3  mb-5">
            <h1 class="text-3xl text-center mb-5 font-semibold text-primary  ">ABOUT US</h1>
            <h2 class="text-center ">We are the best source. With a platform that is trusted by Paystack , you can shop online with complete confidence and no worries. Our pleasure is in seeing you happy. We take great pride in providing top-notch service, and we have no doubt that after utilizing our service for the first time, you'll make our website your homepage.</h2>
            <p class="mt-5 text-center ">We are a Unique Technology firm and the best services on IT such as branding, web design and development development, data management and statistics.</p>
            <div class="block sm:flex  mx-4 gap-3  items-start justify-between  mt-10 ">
           <div class="flex shadow-lg py-4 px-4 border w- w-96 flex-col justify-center items-center gap-3">
                <img src="../assets/image/receive.svg" class="w-20 bg-primary rounded-full p-3" alt="">
                <p class="font-semibold text-center">SCRATCH CARD PRODUCTS</p>
                <p class="text-center text-[15px] ">We have variety of examination scratch cards and we provide you a secure on-line payment method to make purchase</p>
                 <h2 to="/" class="bg-primary py-2 px-2 rounded-lg text-white text-center"> <a href="/#section">Check it now</a></h2>
            </div>

             <div class="flex  shadow-lg py-4 px-4 border flex-col justify-center items-center  w-96 gap-3">
                <img src="../assets/image/development.svg" class="w-20 bg-primary rounded-full p-3" alt="">
                <p class="font-semibold  text-primary text-center">WEBSITE DEVELOPMENT</p>
                <p class="text-center text-[15px]">We use up to date technologies to design and develop Websites and web applications for businesses of all kinds, ranging from Blogs, Portfolios, E-commerce and Social Media websites etc.</p>
                 <router-link to="/register" class="bg-primary py-2 px-2 rounded-lg text-white text-center">Check it now </router-link>
            </div>
          </div>
        </div>
       
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
export default {
  setup() {
    
  

    useHead({
      // Can be static or computed
      title: 'About us - abanise.com | Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Data, Airtime to cash,',
      meta: [
        {
          name: `description`,
          content: 'Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online, Buy Cheap Internet Data Plan and Airtime Recharge for Airtel, 9mobile, GLO, MTN. at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.',
        },
       
        {
          name: 'site_name',
          content: 'abaniseedu.com',
        },
        {
          name: 'type',
          content: 'website ',
        },
        {
          name: 'site_name',
          content: 'abaniseedu.com',
        },
        {
          name: 'type',
          content: 'website ',
        },

        {
          name: 'url',
          content: 'abaniseedu.com',
        },
      
        ],
     
    })
    return { };
  },
}
</script>

<style>

</style>