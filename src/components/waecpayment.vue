<template>
  <div>
  <Header></Header>
    <div class="w-full  h-32"></div>
     <section class=" container my-5 mx-auto"> 
    <h1 class="family text-5xl text-center">{{cardName}} Scratch Card</h1>
    <p class="text-2xl font-semibold text-center ">Buy {{cardName}} Direct Access Card Here</p>
    </section>

     <section class="container mx-auto">
    <div class="flex flex-col items-center gap-5  ">

      <div class=" w-1/2"><img :src="waecImg" alt="" ></div>
          <PrimaryBtn @click="Startpayment" class="ronded duration-500 rounded-xl hover:bg-secondary">Proceed to payment</PrimaryBtn>
          <div class="w-2/3  flex flex-col gap-3">
            <div class="flex flex-col gap-5">
              <h1 class="text-primary  font-bold text-xl">Buy {{cardName}} Online</h1>
              <p>The West {{full_name}} produced the <span>{{cardName}}</span> Scratch Card. It comprises of a Pin and Serial Number that may be used to check the results of applicants who took the May/June (internal or school applicants) or November/December (all applicants) <span>{{ cardName }}</span> Exams (GCE or Private Candidates).</p>
              
              <div>
                  <h1 class="text-xl text-primary font-bold mb-2">How to Buy {{cardName}}</h1>
                  <ul class="tr tracking-normal list-decimal">
              <li> Visit www.abaniseedu.com</li>
              <li> Click on BUY NOW below the <span> </span>Image.</li>
              <li>Proceed to Payment on the Checkout Page</li>
              <li>Make Payment using our secure payment channels, PAYSTACK or FLUTTERWAVE </li>
              <li>Your Card is instantly displayed on your screen and delivered to your email for future reference.</li>
              </ul>
              </div>
            </div>

            <div class="flex flex-col gap-5">
          
              <div >
                  <h1 class="text-xl mb-2 font-bold text-primary">How to Check {{cardName}}Results Online </h1>
                  <ul class="tr tracking-normal list-decimal">
              <li> Visit the Official Website,<router-link :to="cardlink">{{websiteLink}}</router-link> </li> 
              <li> Select your Exam Year and Exam Type</li>
              <li>Enter your Exam Number <span class="">a combination of your Center Number and Seat Number).</span></li>
              <li> Input the Card details (Pin and Serial Number) you bought from www.abaniseede.com</li>
              <li>Click on Submit.</li>
              <li>Congratulations.  Your Result is displayed on a new window.  You can save or print for reference purpose..</li>
              </ul>
              </div>
            </div>
            <p class="text-xl">NOW CLICK ON THE 'PROCEED TO PAYMENT' button below to get your Waec Scratch Card.</p>

          <div class="w-full flex items-center"> <PrimaryBtn class="ronded duration-500 w-fit  text-center
            rounded-xl hover:bg-secondary" >Proceed to payment</PrimaryBtn></div>
          </div>
      <div> 
    </div>


    </div>
    </section>
 
    
 
  
  </div>
</template>

<script>



export default {
  props:{
   cardName:String,
    full_name: String,
    card: String,
    waecImg: String,
    cardlink:String,
    cardlink:String,
    
   
  },
 
  methods:{
  Startpayment(){
  this.$emit('makepayment')

  }
  
  }




}
</script>

<style>
    .blur{
    
    backdrop-filter: blur(5px);
    }
    .family{
        font-family:'Roboto';
    }
</style>