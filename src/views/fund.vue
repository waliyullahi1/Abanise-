
<template>
  <div>
     <dashbord class=" text-[poppins] w-full hiddn "></dashbord>
     <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div  class="flex mt-10 gap-10 ">
        <div class=" h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5  ml-[2rem] "></div>
        <div class=" w-full lg:w-2/5 mx-5  h-fit shadows rounded-[1rem] text-semibold text-2xl shadow bg-white ">


            <p class=" border-b-2 border-gray-300 text-primary py-5 pb-10 px-5 text-[15px]">To fund your wallet, please make a bank transfer of the desired amount to any of these Account details below. Your wallet will automatically be credited as soon as the bank transfer is successful. Please note these are your personal Abaniseedu virtual account details. You are advised to save it as beneficiaries in your banking applications</p>
            <div class="py-5 px-5">
                <p class="font-normal text-3xl pt-10">{{this.user.accountName }}</p>
                <p class="font-normal text-[19px] ">Wema Bank </p>
                <p class="font-normal text-[15px] ">{{this.user.accountNo}}</p>
            </div>
             <div class="flex gap-1 pl-5">
           <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
            </div>
        </div>
       
  </div>

</template>
<script>



export default {
 

  data(){
    return{
     
      user:{
        accountName:'',
        accountNo:'',
        wallet:'',
       bankName:'',
      },

      user: [

      ]
    }
  },
 
   methods: {



  },

 created: async function(){
  
 
    const response = await fetch('http://localhost:3500/dashboard',{
      method : "GET",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
      
    })
  
  if (!response.ok) {
    const errorData = await response.json();
   this.erromessage = errorData.message;
    throw new Error(errorData.message);
    
  }
 
  const data = await response.json();
  console.log('Success:', data);
   this.user.accountNo= data.foundUser.account_number
   this.user.accountName= `${data.foundUser.first_name } ${data.foundUser.last_name } `
   this.user.wallet =data.foundUser.walletBalance
   this.user.bankName =data.foundUser.preferred_bank

 
 


},

 watch: {
  email(value) {
    this.submit();
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