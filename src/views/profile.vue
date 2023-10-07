<template>
  <div class="bg-gray-100 text-[poppins]">
    <div>
      <dashbord class="w-full"></dashbord>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div class="h-fit lg:w-1/5 sm:w-0 sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"></div>
          <div class=" w-full bg-white shadow h-fit ">
                <section class=" mx-5 flex gap-4 pt-4 items-center">
                    <img src="../assets/image/account.svg" class="w-[100px] border rounded-full" alt="" />
                    <div>
                        <h1 class="text-2xl font-medium  text-gray-900">Waheed Ambali</h1>
                        <div>
                            <p> <span class=" text-green-700 sm:text-[15px] text-[14px] font-medium tracking-[1px]">Update Password</span> | <span class=" text-green-700 sm:text-[15px] text-[14px] font-medium tracking-[1px]">Update Transaction pin</span></p>
                        </div>
                    </div>
                </section>

                <section class=" mt-10 w-full   ">
                    <div class="grid grid-cols-3 text-center  justify-between">
                        <div class="border-r px-2 border-r-slate-400">
                            <h1 class="text-[14px] text-gray-600 font-medium tracking-[1px]"> Wallet Balance</h1>
                            <h2 class="text-[23px] text-gray-600  font-light  tracking-[1px]">16.40</h2>
                        </div>

                        <div class=" border-r px-2  border-r-slate-400">
                            <h1 class="text-[14px] text-gray-600 font-medium tracking-[1px]"> Total Lifetime Funding</h1>
                            <h2 class="text-[23px] font-light text-gray-600  tracking-[1px]">206,403.60</h2>
                        </div>

                        <div class="  px-2 ">
                            <h1 class="text-[14px] text-gray-600 font-medium tracking-[1px]"> Total Lifetime Transactions</h1>
                            <h2 class="text-[23px] text-gray-600  font-light  tracking-[1px]">206,403.60</h2>
                        </div>


                    </div>
                </section>
                

                <section class=" mt-10 w-full  ">
                    <nav>
                        <ul>
                            <li class=" flex gap-3 py-6 border-t-2 px-3 "> 
                                <img src="../assets/image/phoneairtime.svg" class="w-4" alt=""/>
                               <p> <span class="font-semibold text-gray-700">Phone Number:</span> 07068393706</p>
                            </li>

                             <li class=" flex gap-3 py-6 border-t-2 px-3 "> 
                                <img src="../assets/image/phoneairtime.svg" class="w-4" alt=""/>
                               <p> <span class="font-semibold text-gray-700">Email</span> alfaabaise@gmail.com</p>
                            </li>

                            <li class=" flex gap-3 py-6 border-t-2 px-3 "> 
                                <img src="../assets/image/phoneairtime.svg" class="w-4" alt=""/>
                               <p> <span class="font-semibold text-gray-700">Referral Link:</span> </p>
                            </li>

                             <li class=" flex gap-3 py-6 border-t-2 px-3 "> 
                                <img src="../assets/image/phoneairtime.svg" class="w-4" alt=""/>
                               <p> <span class="font-semibold text-gray-700">Account Status:</span> <span class=" font-medium text-green-400">Active</span></p>
                            </li>
                        </ul>
                    </nav>
                </section>

               <section>
                 <div class="bg-primary  mb-8 flex justify-between items-center rounded-md font-normal py-5 px-5 text-white">
                  <div>
                    <img src="@/assets/abanisee.png" alt="" class="w-[4rem] py-4 h-[2rem]">
                      <div class="font-semibold">
                        <p class="py-2 ">Account Number : <span>477898753344</span></p>
                        <p>Account Name : <span class=" ">Abaniseedu waliu</span></p>
                        <p>Bank Name : <span class=" ">Wema Bank</span></p>
                        <div class=" mt-6 text-gray-300 text-[12px] font-normal">
                          <h1>AUTOMATED BANK TRANSFER</h1>
                            <p>Make transfer to this account to fund your wallet</p>
                        </div>
                      </div>
                  </div>
                      <div class="  mx-6 hidden md:block">
                        <h1 class="text-xl text-center font-semibold">1%</h1>
                        <h1 class="font-semibold text-gray-300">Charges</h1>
                      </div>
                      </div>
               </section>

                 <div class="flex justify-center gap-1">
            <img src="../assets/image/copy.svg" alt="" class="w-3" />
            <small class="font-semibold text- text-sm gap-1 flex text-gray-800"
              >abaniseedu.com
              <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
            </small>
          </div>
            <div>

        </div>
        </div>
      
      </div>

   
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      erromessage:'',
      transacPrev: false,
      errornetwork: false,
      erroramount: false,
      errorphone: false,
      loadingState: false,
      form: {
        network: "",
        amount: "",
        recipients: "",
        TransactionCode: "",
         serviceID: "Airtime",
      },
    };
  },

  methods: {
    cancelTrans() {
      this.transacPrev = false;
    },
    resetErrors() {
     this.errornetwork = false, this.erroramount = false, this.errorphone = false;
    },
    onInput() {
      this.resetErrors();
    },
    register() {
       this.loadingState = true;
      console.log(this.form.amount);
      const phone = String(this.form.recipients);
      if (!this.form.network || this.form.network === "network") {
        this.errornetwork = true;
      
        this.loadingState = false;
        return false;
      } else if (!this.form.amount || this.form.amount < 50) {
        this.erroramount = true;
      
        this.loadingState = false;
        return false;
      }
      if (!phone || phone.length < 10 || phone.length > 11) {
        this.errorphone = true;
        
        this.loadingState = false;
        return false;
      } else {

         setTimeout(() => {
          this.transacPrev = true;
          this.loadingState = false;
        }, 1000);
      }
    },
  },

  watch: {
    email(value) {
      this.submit();
    },
  },
};
</script>

<style>
.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}
</style>