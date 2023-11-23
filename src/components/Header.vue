<template>
<div  :class="headertext?' md:bg-transparent':' bg-primary shodow'" class="text-[poppins]  w-full lg:top-0 top-[4rem]  place-contnt-center fixed    ">
  <div class=" contains pl-5 mx-auto bg-gray-100 font-sembold">
    <div class="text-[15px] gap-3 flex">
      
      <p class="text- text-yellow-600">Phone number: <span :class="headertext?'text-black':'text-white'" class="ml-1 text-black">07068393706</span></p>
      <p>|</p>
       <p class="text- text-yellow-600">Email <span :class="headertext?'text-black':'text-white'" class="ml-1 text-black">alfaabanise@gmail.com</span></p>
    </div>
  </div>
 <div  :class="headertext?'bg-transparent ':' bg-primary'" class=" container w-full duration-1000  my-auto mx-auto  mb-5  flex justify-between items-center ">
     <router-link to="/" class="flex gap-5 w-full  items-center">  
        <div>
           <logo1  class="ml-3" ></logo1>
          </div>
        <div class=" text-white h-fit">
           <p class=" leading-[20px] sm:text-xl text-[15px]   font-medium">Abanise_edu</p>
         <p class=" leading-[20px] sm:text-[16px] text-[13px] font-medium"> consultant</p>
        </div>
     </router-link>
    <div @click="emitclick" class="w-full   h-fit flex justify-end" >
      <nav   class=" lg:anination translate- lg:translate-x-0 duration-700 ease-in-out transform  lg:top-0 top-[4rem]  place-contnt-center fixed  lg:static justify-center px-3  lg:h-7 lg:w-full w-[15rem] lg:justify-end text-[13px] justify-ed items-center lg:flex" :class="rotate ? 'translate-x-32' : 'translate-x-[30rem]'">
     <ul  @click=" this.rotate =true" class=" lg:bg-transparent bg-primary px-5 lg:px-0  h-screen lg:h-4 justify-start  lg:justify-center lg:flex-row flex-col flex klg:mt-5 mt-0 lg:gap-5 gap-4">
      <li    class=" font-semibold md:hover:border-b mt-10 lg:mt-0 boder border-transparent hover:text-secondary transform duration-200 ease-in-out  text-white"> <router-link to="/">Home</router-link></li>
      <p   class=" font-semibold   text-white text-hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="#ScratchCards">Cards</a></p>

       <li @click=" transc()"  class=" font-semibold   text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><h1>Transaction tracking</h1></li>

     <div class=" font-semibold  text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="/aboutus"  >About us</router-link></div> 

      <li  class=" font-semibold  text-white  hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><a href="#how">How it work</a></li>
     
    <li  class=" font-semibold  text-white hover:border-b boder border-transparent hover:text-secondary transform duration-200 ease-in-out "><router-link to="/login">login</router-link></li>
     
         
     </ul>
      </nav>
    </div>
    

   <div @click="emitclick" class=" block lg:hidden " >
     

      <div >
         <div    class="w-8 h-1 bg-white relative mt-7 mr-5  transform duration-200 " :class="rotate ? 'rotate rotate-45 top-2 ': 'rotate-0'"></div>
       <div class="w-8 h-1 mb-7 bg-white relative  mt-1 transform duration-200 " :class="rotate ?  ' rotate -rotate-45 buttom-2 ': 'rotate-0 '"></div>
      </div>
   </div>
    </div>
   
</div>
</template>

<script>


export default {

   
  data(){
    return{
    rotate : false,
    flex : true,
     
    }
  },

   props: {
      headertext: Boolean

    },

  

   methods:{
    transc(){
       this.$emit("transaction",)
    },
   emitclick(){
    this.rotate = !this.rotate
   
   },

     updateScroll() {
      this.scrollPosition = window.scrollY;
    },
  },

   mounted() {
    window.addEventListener('scroll', this.updateScroll);
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