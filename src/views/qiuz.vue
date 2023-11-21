<template class=" text-[poppins]">
    <div class=" bg-slate-200 text-[puppins] ">
       <Header :headertext="false"  class="fixed z-40 top-0"></Header> 
        <div class="  flex justify-center items-center  w-full h-screen">
            <section class="bg-white shadows w-[80%] h-[60%]">
                <div class="py-2 px-2">
                    <div class=" h-32 py-3 px-3 bg-slate-500 w-full">
                        <h1 class=" text-xl">what is the names of your school </h1>
                    </div>
                    <div>
                        <ul>
                            <li class=" flex gap-2  items-center">
                                <input type="radio"  name="" id="1"><p class=" text-xl font-medium">Agbaje</p>
                                <input type="radio"  name="" id="2"><p class=" text-xl font-medium">Agbaje</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>

     
    </div>
</template>

<script>
import { findDir } from '@vue/compiler-core';
import { format } from 'date-fns'
 import { ref } from 'vue'
import html2pdf from 'html2pdf.js'

   export default {
     

     

     
    

     methods: {
    generatePdf() {
      html2pdf().from(this.$refs.content).save()
    }
  }

    
} 
</script>

<style>
    .shadows{
        box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    }
    input[type="radio"] {
  width: 20px;
  height: 20px;
}

input[type="radio"]:checked {
  background-color: red;
}
</style>