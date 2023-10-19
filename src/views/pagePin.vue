<template class=" text-[poppins]">
    <div class="  bg-blak text-[puppins] ">
       <Header :headertext="true"  class="fixed z-40 top-0"></Header> 
      

        <section class=" mt-52 container flex justify-center mx-auto">
         <div class="md:w-1/2 w-full " >
            <div ref="content" class=" mx-5 sm:mx-10">
               <h1 class=" font-semibold text-2xl text-center">abaniseedu.com</h1>
               <p class="text-[14px] font-medium py-1">YOUR TRANSACTION DETAILS ARE AS FOLLOWS:</p>
               <p class=" text-green-500 py-5 rounded-md text-center bg-green-100">Your Successful purchased Pin</p>
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
                    <div   v-for="item in items" :key="item.id"  class=" gap-10 items-center px-5  border-b tracking-  backdrop-opacity-100  font-semibold bg- text-[13px]  placehold-center justify-between flex ">
                
                        <p class=" border-r py-3 pr-2 ">{{item.name}}</p>
                        <p class=" border-r py-3 pr-2  text-left">{{item.pin}}</p>
                        <p class="  py-3 ">{{ item.seriaNo}} </p>
                    
                </div>
                  </div>
              </div>
               <div class="flex gap-5 justify-center mb-9 mt-9">
                   <Button @click="generatePdf" :loading="loadingState" class=" w-fit h-fit px-10" loadingText="please wait...."> print</Button>
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
import { format } from 'date-fns'
 import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

   export default {
      setup() {
    const content = ref(null)

    return {
      content
    }
  },
    data(){
            return{
              items : JSON.parse(localStorage.getItem("card")),

            form:'',

               item:[
                {
                  
                  headers:'Scrach card ',
                  details:''
                },

                 {
                 
                  headers:'Quantity',
                  details:''
                },

                
               

              

                {
               
                  headers:'Amount',
                  details:'Oct. 12, 2023, 7:55 a.m.'

                },

                {
               
                  headers:'Date',
                  details: format(new Date(), 'MMM ddd yyyy hh:mm aaa')
                  
                },

                
                {
               
                  headers:'Status',
                  details:'sucessful'
                  
                },

              

                



              ]
                
            }
        },

     created(){
       
        window.onbeforeunload = function () {
        localStorage.removeItem("result"); 
        };
            this.form = JSON.parse(localStorage.getItem('recelpt'));
       this.form = JSON.parse(localStorage.getItem('recelpt'));

// Convert price to a number
this.form.price = Number(this.form.price);

// Update details
this.item[0].details = this.form.name;
this.item[1].details = this.form.quantity;
this.item[2].details = `₦${this.form.quantity * this.form.price}`;
     this.item[3].details = this.form.time;    
      console.log(this.form.price);
        
        
     },

     methods: {
    generatePdf() {
      html2pdf().from(this.$refs.content).save()
    }
  }

    
} 
</script>

<style>

</style>