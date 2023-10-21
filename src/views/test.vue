<template>

<div>
  <h1>ilove you</h1>
</div>
</template>

<script>


export default {
   data() {
    return {

    

    
  
      
     
    };

    
  },
  name: "App",
  components: {
    
    Vue3Html2pdf,
  },
  methods: {
    
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
