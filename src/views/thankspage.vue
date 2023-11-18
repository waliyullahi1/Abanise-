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
             <p class="text-[20px] font-semibold text-primary text-center">If you encounter any issue while using this PIN, please send a mail or messages this phone number on WHATSAPP 07068393706 to  within 7 days from now.</p>

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