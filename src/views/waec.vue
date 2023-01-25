<template>
  <div>
    <semipayment  card='waec'  website=" www.waecdirect.org" full_name="West African Examination Council " @makepayment="paymentPage()"></semipayment>
    <div class="w-full fixed top-0 z-20  bg-black bg-opacity-50 items-center flex justify-center h-full px-6 md:px-0 lg:px-10" :class="paymentpage ? 'block' : 'hidden'">
    <div class="ul overflow-scroll mx-auto mt-20  bg-white py-5 h-screen px-10 w-1/3 ">
          <div class="flex mb-5 justify-between">
            <p class=" font-bold">check point</p>
           <div @click="hiddenpage()"> <img src="@/assets/image/cancel.svg" class="w-8"/></div>
          </div>

           <div class=" border drop-shadow-2xl py-5 px-5  rounded-xl bg-white bg-slate-200">
          <form action="" class=" ">
            <div class="flex flex-col justify-center mb-10 items-center">
            <h1 class="text-primary font-bold text-xl ">Scratch card</h1>
            <h1 class="text-2xl font-normal text-secondary ">Waec Scratch Card</h1>
            <h1 class="text-xl  ">₦ 1,100</h1>
            </div>
        <inpute label="Enter Quantity" @input="calculateTotal()" :type="quantity_type" v-model:inputValue="form.quantity" class="mt-4 "></inpute>
        
        <inpute label="Charges" :type="charges_type" inputValue="100" disabled class=" mt-4"></inpute>   

        <inpute label="Total" :type="total_type" :max="999999999"  v-model:inputValue="form.total"  class="mt-4"></inpute>  
        <inpute label="Username" placeholder="enter username" inputValue="" class="mt-4"></inpute>
               <h1>{{form.quantity}}</h1>
          <inpute label="Phone no "  plaeholder="er"    class="mt-4"></inpute>

          <inpute label="Email" placeholder="Enter your email"   inputeValue=Number class="mt-4"></inpute>
          <p class="text-sm text-center mt-5 ">Make payment with</p> 
          <div class="w-full flex justify-center">
            <PrimaryBtn class="rounded-xl text-xl flex gap-3 mt-5 w-fit">  Paystack<img src="@/assets/image/paystack.png" alt="" class="w-5 "></PrimaryBtn>
          </div>
        </form>

        </div>
       
    </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
export default {

 data(){
    return {
      paymentpage: false,
      form: {
        quantity: 1,
        total: 350,
       
      },
      total_type: NaN,
      charges_type: NaN,
      quantity_type: NaN,
       
    }
    
  },

  methods:{

    hiddenpage(){
    this.paymentpage = !this.paymentpage
    },
    paymentPage(){
     this.paymentpage = !this.paymentpage
     console.log('working')
    },

    calculateTotal(){
      console.log()
      
     
      
      
    }
  },

}
</script>

<style>
.scroll-hide ul::-webkit-scrollbar { 
  width: 0 !important;
  display: none; 
}

.ul{
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.ul::-webkit-scrollbar {
    display: none;
}

 .blur{
    
   

    filter: blur(8px);
  -webkit-filter: blur(8px);
    }
</style>