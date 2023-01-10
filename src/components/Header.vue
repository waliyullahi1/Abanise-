<template>
<div class="shadows  bg-white">
    <div class=" container   mx-auto py-5 mb-5 px-3 flex justify-between items-center ">
    <logo></logo>
    <nav   class=" md:anination duration-700 ease-in-out transform bg-white top-20 left-80  absolute place-content-center md:bg-white md:static justify-center md:translate-x-0 translate-x-96 pl-20 h-screen md:h-7 md:w-full w-1/2 md:justify-end   md:flex" :class="rotate ? ' -left-20  -translate-x duration-700 ease-in-out transform ' : ' h  '" >
     <ul  class="  justify-center md:flex-row flex-col flex  md:gap-5 gap-4">
      <li class=" font-semibold text-lg hover:text-primary md:hover:border-b boder border-transparent hover:border-b-primary transform duration-200 ease-in-out "> <a href="">Home</a></li>
      <li class=" font-semibold text-lg  hover:text-primary hover:border-b boder border-transparent hover:border-b-primary transform duration-200 ease-in-out "><a href="">Cards</a></li>
      <li class=" font-semibold text-lg hover:text-primary hover:border-b boder border-transparent hover:border-b-primary transform duration-200 ease-in-out "><a href="">About</a></li>
     
      <li class=" font-semibold text-lg  hover:text-primary hover:border-b boder border-transparent hover:border-b-primary transform duration-200 ease-in-out "><a href="">Sign in</a></li>
     
     
     </ul>
    </nav>

   <div @click="emitclick" class=" block md:hidden " >
       <div  class="w-8 h-1 bg-primary relative  transform duration-200 " :class="rotate ? 'rotate rotate-45 top-2 ': 'rotate-0'"></div>
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
   emitclick(){
    this.rotate = !this.rotate
   
   }
  },

}
</script>

<style>
 
</style>