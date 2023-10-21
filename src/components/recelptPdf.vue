<template>
  <img alt="Vue logo" src="./assets/logo.png" />

  <vue3-html2pdf
    :show-layout="false"
    :float-layout="true"
    :enable-download="true"
    :preview-modal="true"
    :paginate-elements-by-height="1400"
    filename="Hello My friend"
    :pdf-quality="2"
    :manual-pagination="true"
    pdf-format="a4"
    pdf-orientation="portrait"
    pdf-content-width="800px"
    @progress="onProgress($event)"
    @hasStartedGeneration="hasStartedGeneration()"
    @hasGenerated="hasGenerated($event)"
    :ref="ref"
  >
    <template #pdf-content>
     <section slot="pdf-content" class=" container mx-auto">
         <div >
            <div class=" mx-10">
               <h1 class=" font-semibold text-2xl text-center">abaniseedu.com</h1>
               <p class="text-[14px] font-medium py-1">YOUR TRANSACTION DETAILS ARE AS FOLLOWS:</p>
               <p class=" text-green-500 py-5 rounded-md text-center bg-green-100">Your Successful purchased {{}}
               </p>
               <div class="text-[16px] bg-white  ">
              
              <div class="mt-10 w-full border  mb-3">
               <ul class=" text-[13px]  font-medium" v-for="item in itemss" :key="item.id" >
                <li class="sm:flex justify-center   block sm:border-b-0 border-b  sm:py-0  py-3 px-3 sm:gap-6 gap-2 ">
                  <div class=" p-0 sm:p-3 w-1/3">
                      <h1 class=" text-gray-600">Exam Type</h1>
                  </div>

                  <div class="w-full p-0 sm:p-3 border-l-0 sm:border-l border-b-0 sm:border-b">
                    <h1>{{item.details}}</h1>
                  </div>
                </li>
               </ul>
              </div>
               <div class="flex gap-5 justify-center mb-9 mt-9">

                 <button @click="printDownload">Print Download</button>
                <Download v-show="false" ref="DownloadComp" />
                   <Button @click="generatePdf()"  :loading="loadingState" class=" hidden w-fit h-fit px-10" loadingText="please wait...."> print</Button>
                   <Button :loading="loadingState" class=" w-fit px-10" loadingText="please wait...."> save</Button>

                 </div>
              
            </div>
            </div>
         </div>
                </section>
    </template>
  </vue3-html2pdf>
  <button @click="generateReport()">Delleor</button>
</template>

<script>

import Vue3Html2pdf from "vue3-html2pdf";
import jspdf from 'jspdf'
export default {

      props: {
   ref:String,
   itemss:Array,
  },
   data() {
    return {

    };

    
  },
  name: "App",
  components: {
    
    Vue3Html2pdf,
  },
  methods: {
    /*
            Generate Report using refs and calling the
            refs function generatePdf()
        */
    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
