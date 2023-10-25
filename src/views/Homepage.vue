<template>
  <div>
     <dashbord :dashboard="true" class="w-full text-[poppins]"></dashbord>
    <div class=" flex bg-gray-200 gap-5">
      <div class=" w-1/4 hidden md:block border-4"></div>
      <div class="w-full mt-28  border-4">
        <div class="bg-white rounded-lg shadows">
          <h1 class=" mx-5 text-[14px] border font-semibold w-fit py-2 px-4">{{user.bankName}}</h1>
          <div class="mx-5  ">
            <div class="bg-primary flex justify-between items-center rounded-md font-normal py-5 px-5 text-white">
             <div>
               <img src="@/assets/abanisee.png" alt="" class="w-[4rem] py-4 h-[2rem]">
                <div class="font-semibold">
                  <p class="py-2 ">Account Number : <span>{{user.accountNo}}</span></p>
                  <p>Account Name : <span class=" ">{{user.accountName}}</span></p>
                   <p>Bank Name : <span class=" ">Wema Bank</span></p>
                   <div class=" mt-6 text-gray-300 text-[12px] font-normal">
                    <h1>AUTOMATED BANK TRANSFER</h1>
                      <p>Make transfer to this account to fund your wallet</p>
                   </div>
                </div>
             </div>
                <div>
                  <h1 class="text-xl text-center font-semibold">1%</h1>
                  <h1 class="font-semibold text-gray-300">Charges</h1>
                </div>
            </div>
            <h1 class="mt-10 mx-5 font-semibold text-xl">Welcome to Abaniseedu </h1>
            <div class=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-4 text-[15px] py-6 ">
              <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 "> 
                <div class=" bg-blue-900 w-fit h-fit  rounded-lg py-2 px-3"><img src="../assets/image/wallets.svg" class="w-10" alt=""> </div>
                <div>
                  <h1 class="   text-gray-400 tracking-[2xl]">Wallet Balance</h1>
                  <p class=" text-xl"> <span >{{user.wallet}}</span></p>
                </div>
              </div>

               <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 "> 
                <div class=" bg-green-800 w-fit h-fit  rounded-lg py-2 px-3"><img src="../assets/image/transaction_list.svg" class="w-10" alt=""> </div>
                <div>
                  <router-link to="/transactionreport"> <h1 class="   text-gray-400 tracking-[2xl]">Transactions</h1></router-link>
                 
                </div>
              </div>
              
                 <div class="flex items-center gap-4 font-semibold bg-white shadows rounded-lg py-2 px-2 "> 
                <div class=" bg-red-800 w-fit h-fit  rounded-lg py-2 px-3"><img src="../assets/image/delivery_time.svg" class="w-10" alt=""> </div>
                <div>
                  <h1 class="   text-gray-400 tracking-[2xl]">Wallet Summary</h1>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
        <loadingJs :isJsFinishedRun="isJsFinishedRun" > </loadingJs>
      </div>
    </div>
  </div>
</template>


<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'



export default {
 

  data(){
    return{
     isJsFinishedRun:false,
      user:{
        accountName:'',
        accountNo:'',
        wallet:0,
       bankName:'',
      },

      user: [

      ]
    }
  },
 
   methods: {



  },

 created: async function(){
  
 
    const response = await fetch('https://api-abanise-5a3s.vercel.app/dashboard',{
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
   this.user.accountName= data.foundUser.account_name
   this.user.wallet =data.foundUser.walletBalance.toLocaleString('en-US', {style:'currency', currency:'NGN'})
   this.user.bankName =data.foundUser.preferred_bank

 this.isJsFinishedRun=true
 


},

 watch: {
  email(value) {
    this.submit();
  }
 }

}
</script>




<style>
.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}
</style>