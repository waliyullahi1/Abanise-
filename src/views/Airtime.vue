
<template>
  <div>
     <dashbord class="  w-full  "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
        <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md   mx-4 shadows rounded-[1rem] h-fit shadows  text-s tl shadow bg-white ">
          <form action="" class=" flex  flex-col gap-5 h-fit p-8 text-xl ">

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb- px-4  text-[17px] ">Network</label>
                 <select v-model="form.network" class="w-full  rounded-[.2rem]  px-3 ml-2  py-[.5rem] text-[17px] outline-none focus:border-primary border-gray-100 border " placeholder="Password">
                  <option value="network">Network</option>
                  <option value="mtn">MTN</option>
                  <option value="glo">GLO</option>
                  <option value="9mobile">9mobile</option>
                  <option value="airtime">Airtime</option>
                 </select>
              </div>

               <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary mb-  px-4 text-[17px] ">Amount</label>
                 <input v-model="form.amount" type="number"  class="w-full font-seibold rounded-[.2rem] px-4 ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]" placeholder="Amount">


                  
              </div>

              <div class="flex bg-white flex-col   ">
                 <label for="" class="text-primary  px-4 text-[17px] ">Recipients</label>
                  <input v-model="form.recipients" type="number"  class="w-full font-seibold rounded-[.2rem] px-4 ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]" placeholder="phone number ">
                 
              </div>
           
               <Button class="mt-" :loading="loadingState" @click="register()" loadingText="Authenticating"> Previews </Button> 
           
        </form>

        <div class="flex gap-1"> <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
      return{
      loadingState:false,
      form:{
        network:' network',
        amount:'',
        recipients:'',
        
      }
      
    }
  },

  methods:{
     register(){
       if (!this.form.network) {
    this.errorname = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.email) {
    this.erroremail = true;
    this.loadingState = false;
    return false;
  } else if (!emailPattern.test(this.form.email)) {
    this.erroremail1 = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.phone ||  this.form.phone.length < 10 || regex.test(this.form.phone)) {
    this.errorphone = true;
    this.loadingState = false;
    return false;
  } else if (!this.form.password || this.form.password.length <= 6) {
    this.errorpassword = true;
    this.loadingState = false;
    return false;
  } else
      this.loadingState = true
    console.log(this.form.network, this.form.amount, this.form.recipients);
    }
  }
}
   
</script>

<style>
   .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>