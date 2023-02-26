<template>
  <div class="  ">
    <div class="overflow-hidden">
    <Header class="absolute top-0  z-0 h-20"></Header>
    
    <section>
      <div class="h-32 w-full">
      
      </div>
    </section>
  

    <section class=" container my-5 mx-auto "> 
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
                  <h1 class="text-xl text-primary font-bold mb-2">How to Buy {{cardName}} card </h1>
                  <ul class=" tracking-normal list-decimal">
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
                <li class=" "> <span class="flex gap-1"> Visit the Official Website, <a href="https://www.waecdirect.org" target="_black" :class="waec ? 'block' : 'hidden'" class="text-[red]" >https://www.waecdirect.org</a>
                  <a href="https://results.neco.gov.ng/" target="_black" class="text-[red]" :class="neco ? 'block' : 'hidden'"  >https://results.neco.gov.ng</a>
                    <a href="" target="_black" :class="nabteb ? 'block' : 'hidden'" class="text-[red]" >nabteb</a></span>
               </li> 
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
            rounded-xl hover:bg-secondary" @click="Startpayment">Proceed to payment</PrimaryBtn></div>
          </div>
      <div> 
    </div>


    </div>
    </section>
    <div class="w-full  fixed top-0 z-20  bg-black bg-opacity-50 items-center flex justify-center h-full px-6 md:px-0 lg:px-10" :class="paymentpage ? 'block' : 'hidden'">
    <div class="ul overflow-scroll mx-auto mt-20  bg-white py-5 h-screen px-10 lg:w-1/3 md:w-1/2 w-fu ">
          <div class="flex mb-5 justify-between">
            <p class=" font-bold">check point</p>
           <div @click="hiddenpage()"> <img src="@/assets/image/cancel.svg" class="w-8"/></div>
          </div>

           <div class=" border drop-shadow-2xl py-5 px-5   rounded-xl bg-white bg-slate-200">
          <form action="" class=" ">
            <div class="flex flex-col justify-center mb-10 items-center">
            <h1 class="text-primary font-bold text-xl ">Scratch card</h1>
            <h1 class="text-2xl font-normal text-secondary ">{{cardName}} Scratch Card</h1>
            <h1 class="text2xl text-black  ">{{form.price}}</h1>
            </div>
            <Input label="Enter Quantity" type="number"  placeholder="Enter Quantity" :error="false" v-model:inputValue="form.quantity" inputValue="1"  min="1"></Input>
           
           <Input label="Charges" type="text" placeholder="Enter your email address" :error="false" inputValue="100" disabled="true"></Input>
           <h1>₦{{ form.quantity * 1000 }}</h1>
        <Input label="Totals"   type="Num ber" min="1"     placeholder="360" :error="false" v-model:inputValue="form.total"
          class="mt-4 "></Input>
            {{ this.form.total }}

        
        <inpute label="Username" placeholder="enter username" inputValue="" class="mt-4"></inpute>
              
          
     
          <p class="text-sm text-center mt-5 ">Make payment with</p> 
          <div class="w-full flex justify-center">
            <PrimaryBtn @click="calculate()" class="rounded-xl text-xl flex gap-3 mt-5 w-fit">  Paystack<img src="@/assets/image/paystack.png" alt="" class="w-5 "></PrimaryBtn>
           
            
          </div> <div class="h-10 w-full"></div>
        </form>

        </div>
       
    </div>
    </div>
   
    </div>
  </div>
  
</template>
  <script>

  import waec from '../assets/image/waec.png'
  import neco from '../assets/image/neco12.jpg'
   const locationName = window.location.href
 const splitloc = locationName.split('/');
console.log(splitloc);

export default {
   
 data(){
    return {
      
      nabteb:'',
      waec:'',
      neco:'',
      waecImg:'waec',
      cardlink:'',
      cardName : '',
      full_name:'',
      website: '',
      paymentpage: false,
      form: {
        quantity:  1,
        total:  '', 
        price:Number,
        email:'',
       
      },
     
    }
   
    
  },
 
  methods:{
      Startpayment(){
       this.paymentpage = !this.paymentpage
      },
   
    
   hiddenpage(){
    this.paymentpage = !this.paymentpage
    },
    paymentPage(){
     this.paymentpage = !this.paymentpage
     console.log(  'working')
    },
    calculate(){
      this.form.total = this.form.quantity * this.form.price
      console.log(this.form.total)
    },
    calculateTotal(){
      console.log('wali')
    },
  },

 created(){
  this.form.email  
  console.log(this.form.email)
  if (splitloc[4]== 1 ) {
    this.form.price = Number('3200')
  
    this.cardName='Waec',
    this.waecImg=waec,
    this.websiteLink='www.waecdirect.org',
    this.full_name='Western Afriacan Examination Councell'
  } else {
    this.form.price = Number('1000')
     this.cardName='Neco',
    this.waecImg=waec,
    this.websiteLink='www.results.neco.gov.ng',
    this.full_name='National Examination cancil'
    this.neco = !this.neco
    this.waecImg=neco
  }
 },
 
components:{
  
}    

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