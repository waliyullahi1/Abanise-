<template class=" text-[poppins]">
    <div class="  bg-blak text-[puppins] ">
       <Header :headertext="true"  class="fixed z-40 top-0"></Header> 
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
                        <p>{{ item.seriaNo}} </p>
                    
                </div>
                   </div>
            </div>

            <div class="flex justify-center">
                <Button class=" w-fit">Back to Home page </Button>
            </div>
            
       </section>


       <section class=" container mx-auto">
         <div >
            <div class=" mx-10">
               <h1 class=" font-semibold text-2xl text-center">abaniseedu.com</h1>
               <p class="text-[14px] font-medium py-1">YOUR TRANSACTION DETAILS ARE AS FOLLOWS:</p>
               <p class=" text-green-500 py-5 rounded-md text-center bg-green-100">Your Successful purchased MTN 3.0 to 08166988815</p>
               <div class="text-[16px] bg-white  ">
              
              <div class="mt-10 w-full border  mb-3">
               <ul class=" text-[13px]  font-medium" v-for="item, in item" :key="item.id" >
                <li class="sm:flex justify-center   block sm:border-b-0 border-b  sm:py-0  py-3 px-3 sm:gap-6 gap-2 ">
                  <div class=" p-0 sm:p-3 w-1/3">
                      <h1 class=" text-gray-600">{{item.headers}}</h1>
                  </div>

                  <div class="w-full p-0 sm:p-3 border-l-0 sm:border-l border-b-0 sm:border-b">
                    <h1>{{item.details}}</h1>
                  </div>
                </li>
               </ul>
              </div>
               <div class="flex gap-5 justify-center mb-9 mt-9">
                   <Button :loading="loadingState" class=" w-fit h-fit px-10" loadingText="please wait...."> print</Button>
                   <Button :loading="loadingState" class=" w-fit px-10" loadingText="please wait...."> save</Button>

                 </div>
              
            </div>
            </div>
         </div>
       </section>

        <section class=" container mx-auto">
         <div >
            <div class=" mx-10">
               <h1 class=" font-semibold text-2xl text-center">abaniseedu.com</h1>
               <p class="text-[14px] font-medium py-1">YOUR TRANSACTION DETAILS ARE AS FOLLOWS:</p>
               <p class=" text-green-500 py-5 rounded-md text-center bg-green-100">Your Successful purchased {{scratch[1].name}} Pin</p>
               <div class="text-[16px] bg-white  ">
              
              <div class="mt-10 w-full border  mb-3">
               <ul class=" text-[13px]  font-medium" v-for="item, in item" :key="item.id" >
                <li class="flex justify-center   border-b-0  py-0   px-3 gap-6  ">
                  <div class=" p-0 sm:p-3 w-1/3">
                      <h1 class=" text-gray-600">{{item.headers}}</h1>
                  </div>

                  <div class="w-full  p-3  border-l  border-b">
                    <h1>{{item.details}}</h1>
                  </div>
                </li>
               </ul>
                  <div class="w-full border h-fit">
                    <div   v-for="item in scratch" :key="item.id"  class=" gap-10 items-center px-5  border-b tracking-  backdrop-opacity-100  font-semibold bg- text-[13px]  placehold-center justify-between flex ">
                
                        <p class=" border-r py-3 pr-2 ">{{item.name}}</p>
                        <p class=" border-r py-3 pr-2  text-left">{{item.pin}}</p>
                        <p class="  py-3 ">{{ item.seria}} </p>
                    
                </div>
                  </div>
              </div>
               <div class="flex gap-5 justify-center mb-9 mt-9">
                   <Button :loading="loadingState" class=" w-fit h-fit px-10" loadingText="please wait...."> print</Button>
                   <Button :loading="loadingState" class=" w-fit px-10" loadingText="please wait...."> save</Button>

                 </div>
              
            </div>
            </div>
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


                scratch:[
                  {
                    name:'WAEC',
                    pin:'333333333333333346677',
                    seria:'7777777'
                  },
                  {    
                    name:'WAEC',
                    pin:'333333333333333346677',
                    seria:'7777777'
                  },

                  
                ],

               item:[
                {
                  
                  headers:'Scrach card ',
                  details:'555'
                },

                 {
                 
                  headers:'Quantity',
                  details:'4'
                },

                 {
                
                  headers:'Previous Balance',
                  details:'₦ 477.94000000000005'
                },
                {
               
                  headers:'New Balance',
                  details:'₦ 477.94000000000005'
                },

                {
               
                  headers:'Email',
                  details:'ddddddddddddbbbb'
                },

                {
               
                  headers:'Date',
                  details:'Oct. 12, 2023, 7:55 a.m.'
                },

                {
               
                  headers:'Description',
                  details:'it is vvvv'
                }

                



              ]
                
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
 