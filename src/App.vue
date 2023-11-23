<template>
  <div class="app"></div>
  <router-view></router-view>
 </template>
  
  <script>
  import {computed, reactive } from 'vue'
  import { useHead } from '@vueuse/head'
  export default ({
    setup() {
      // const siteData = reactive({
      
      //   title: `Abanise - Buy WAEC, NECO, JAMB, NABTEB scratch cards, PINs, TOKEN and result checker online, Buy all exam scratch cards `,
      //   keywords: `WAEC Scratch Cards Online, Buy NECO Scratch Cards Online, Buy NABTEB Scratch Cards Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins, ABANISE, ABANISEEDU,`,
      //   description: `Buy WAEC scratch cards online at WWW.abaniseedu.COM. Buy WAEC Scratch cards, NECO Scratch cards and NABTEB cards online at the best price in Nigeria. Order now at WWW.abaniseedu.COM and get it delivered to you instantly using your prefered method.`,
      // })
      // useHead({
      //   // Can be static or computed
      //   title: computed(() => siteData.title),
      //   meta: [
      //     {
      //       name: `description`,
      //       keywords:`Abanise, Abanise Education institute, Buy WAEC Scratch Cards Online, Buy NECO Scratch Cards Online, Buy NABTEB Scratch Cards Online, Buy WAEC GCE Registration Card Online, Buy NECO Registration Card Online, Buy NABTEB Registration Card Online, WAEC Result Checker, NECO Result Checker, NABTEB Result Checker, WAEC Result Verification Pins`,
      //       content: 'computed(() => siteData.description)',
      //     },
      //     ],
       
      // })
    },
  })
  </script>


<style >

</style>
