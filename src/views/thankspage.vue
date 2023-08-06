<template class="">
    <div class="  bg-blak text-[puppins] ">
       <Header class="fixed z-40 top-0"></Header> 
       <section class="container h-screen mx-auto ">
            <div class="md:w-1/2  w-full  mx-auto   justify-center text-center 08086375698 items-center pt-[5rem] ">
               <div class="w-full flex justify-center">
                 <img src="@/assets/image/success.gif" alt="sucessful payment"   class="w-52 mx-0 justify-center " >
               </div>
                <h1 class="font-bold text-[40px] text-whte  text-[puppins] ">Thanks for your <span class=" text-[red]">Subscribing</span></h1>
                <h1 class="text-[20px] font-semibold text-primary">Look  at the below to copy your scratch card pin </h1>
                <p></p>
            </div>
                <div>
                   <div class="mt-10">
                     <div   v-for="item in items" :key="item.id"  class=" gap-10 bg-[gr  backdrop-opacity-100 py-[1px] font-semibold bg- text-xl placehold-center justify-center flex mt-2">
                
                        <p class=" border-r-2 pr-2 border-black">{{item.name}}</p>
                        <p>{{item.pin}}</p>
                        <p>{{ item.seria}} </p>
                    
                </div>
                   </div>
            </div>

            <div class="flex justify-center">
                <Button class=" w-fit">Back to Home page </Button>
            </div>
            
       </section>
    </div>
</template>

<script>
import { findDir } from '@vue/compiler-core';

   export default {
    data(){
            return{
              items : JSON.parse(localStorage.getItem("savedItems")),
                
            }
        },

     created(){
       
        // window.onbeforeunload = function () {
        // localStorage.removeItem("result"); 
        // };
        // const item = localStorage.getItem('result')
        // console.log(item)
        
     },

    components:{
         
    }
}
</script>

<style>

</style>
 