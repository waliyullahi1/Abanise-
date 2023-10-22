<template>
  <div class="bg-gray-100 text-[poppins] h-fit ">
    <div>
      <dashbord :Wallet="true" :fundhistory="true"  class="w-full hiden "></dashbord>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class=" h-fit  w-full">
           <div
          class="h-fit lg:w-1/3 bg-green-600 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>
        <div class="mt- md:ml-60 ml-2 pr-2">
          <h1 class="flex text-2xl font-semibold">Fund History</h1>
         <div class=" bg-green-100 w-full py-2 mt-5 h-fit px-4">
          <h1 class="text-[poppins] text-green-900 mb-6 font-medium text-[15px] ">Notification</h1>
          <p class="text-[14px] mb-4 text-green-900 font-normal  ">Welcome to our  website, We are 100%, Also we are selling  (WAEC, NABTEB, <br class="md:block hidden">and NECO Result Checker) with other epin for o'level Registration </p>
        </div>
      
       <div>
        
         <div class="w bg-red-900  text-[15px] ul  overflow-scroll h-fit    mb-20   mt-  border-2">
               <table class="font-normal bg-white w-full  text-sm">
                <tr>
                  <th class="cols">Reference </th>
                  <th>Date/Time</th>
                  <th>Amount</th>
                 
                  <th>Status</th>
                </tr>
                <tr  v-for="item in fund" :key="item.id" >
                  <td class="cols" >MFY|{{ item.transactionId }}</td>
                  <td class="cols">{{ item.dateShow }}</td>
                  
                  <td class="cols">₦ {{ item.amount }}</td>
                  <td class="cols text-center my-2 " style="color:white; "><p class=" bg-green-500 py-1">{{ item.status }}</p></td>
                </tr>
              </table>
        </div>
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
      fund:[],
   
    };
  },
  methods: {},

created: async function(){
  
 
    const response = await fetch('http://localhost:3500/fund',{
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
   this.fund = data
  //  this.user.accountName= `${data.foundUser.first_name } ${data.foundUser.last_name } `
  //  this.user.wallet =data.foundUser.walletBalance
  //  this.user.bankName =data.foundUser.preferred_bank

 
 


},
};
</script>

<style >
table {
  font-family: arial, sans-serif;
  width: fit-content;
 

}

td,
th {
  border: none;
  text-align: left;
  padding: 10px;
  width: fit-content;
 

}
.cols{
    color: #5e5e5e;
    border-right: white solid 2px;

}
.over{
    overflow: hidden;
}

tr:nth-child(even) {
  background-color: #f7f7f7;
  
}

.td{
   border: rgb(196, 41, 41) solid 20px;
   color: aquamarine !important;
}

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