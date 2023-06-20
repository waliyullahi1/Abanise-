<template>
<div class=" w-full lg:top-0 top-[4rem]  place-contnt-center fixed bg-white shodow ">
  <div class=" contains pl-5 mx-auto bg-gray-100 font-sembold">
    <div class="text-[15px] gap-3 flex">
      <p class="text- text-yellow-600">Phone number: <span class="ml-1 text-black">07068393706</span></p>
      <p>|</p>
       <p class="text- text-yellow-600">Email <span class="ml-1 text-black">alfaabanise@gmail.com</span></p>
    </div>
  </div>
 <div class=" container w-full  my-auto mx-auto bg-white mb-5  flex justify-between items-center ">
     <router-link to="/"><logo></logo></router-link>
    <div class="w-full h-fit flex justify-end" >
      <nav   class=" lg:anination translate- lg:translate-x-0 duration-700 ease-in-out transform bg-white lg:top-0 top-[4rem]  place-contnt-center fixed md:bg-white lg:static justify-center px-3  lg:h-7 lg:w-full w-[15rem] lg:justify-end justify-ed items-center lg:flex" :class="rotate ? 'translate-x-32' : 'translate-x-[30rem]'">
     <ul  class="  justify-center lg:flex-row flex-col flex mt-5 lg:gap-5 gap-4">
      <li class=" font-semibold text-primary md:hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "> <router-link to="/">Home</router-link></li>
      <p to="/"  class=" font-semibold   text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="#section">Cards</a></p>

       <li @click=" transc()" class=" font-semibold   text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><h1>Transaction tracking</h1></li>

      <router-link to="/aboutus" class=" font-semibold  text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="#section">About us</a></router-link>

      <li class=" font-semibold  text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="#how">How it work</a></li>
     
      <li class=" font-semibold  text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="/">Sign in</router-link></li>
     
     
     </ul>
      </nav>
    </div>
    

   <div @click="emitclick" class=" block lg:hidden " >
       <div  class="w-8 h-1 bg-primary relative mt-7 mr-5  transform duration-200 " :class="rotate ? 'rotate rotate-45 top-2 ': 'rotate-0'"></div>
       <div class="w-8 h-1 mb-7 bg-primary relative  mt-1 transform duration-200 " :class="rotate ?  ' rotate -rotate-45 buttom-2 ': 'rotate-0 '"></div>
   </div>
    </div>
   
</div>
</template>

<script>


export default {
  data(){
    return{
    rotate : false,
    flex : true
    }
  },
   methods:{
    transc(){
       this.$emit("transaction",)
    },
   emitclick(){
    this.rotate = !this.rotate
   
   }
  },

}
</script>

<style>
 .shodow{
  box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -3px 17px 28px -2px rgba(0,0,0,0.75);
 }
</style>