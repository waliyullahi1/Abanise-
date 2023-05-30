<template>
<div class=" w-full bg-white shodow ">
 <div class=" container w-full  my-auto mx-auto bg-white mb-5  flex justify-between items-center ">
    <logo></logo>
    <div class="w-full h-fit flex justify-end" >
      <nav   class=" md:anination translate- md:translate-x-0 duration-700 ease-in-out transform bg-white md:top-0 top-[4rem]  absolute place-contnt-center fixed md:bg-white md:static justify-center px-3  md:h-7 md:w-full w-[15rem] md:justify-end justify-ed items-center md:flex" :class="rotate ? 'translate-x-32' : 'translate-x-[30rem]'">
     <ul  class="  justify-center md:flex-row flex-col flex mt-5 md:gap-5 gap-4">
      <li class=" font-semibold text-primary md:hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "> <router-link to="/">Home</router-link></li>
      <li class=" font-semibold   text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="">Cards</router-link></li>

       <li class=" font-semibold   hover:text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="">Transaction tracking</router-link></li>

      <li class=" font-semibold  text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="">About</a></li>
     
      <li class=" font-semibold  text-primary hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="/register">Sign in</router-link></li>
     
     
     </ul>
      </nav>
    </div>
    

   <div @click="emitclick" class=" block md:hidden " >
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