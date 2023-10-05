
<template>
  <div>
    <dashbord class="w-full"></dashbord>
    <div class="w-full h-[5.5rem] bg-secondary"></div>
    <div class="flex mt-10 gap-10">
      <div
        class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
      ></div>
      <div
        class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md h-fit mx-4 shadows rounded-[1rem] ld text-2xl shadow bg-white"
      >
        <form
          action=""
          class="flex flex-col gap-5 h-fit p-8 text-xl font-semild"
        >
          <div class="flex bg-white flex-col">
            <label for="" class="text-primary mb- ml-2 text-[17px]"
              >Network</label
            >
            <select
              v-model="selectedOption"
              class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
              placeholder="Password"
            >
             
            </select>
          </div>

        

          <div class="flex bg-white flex-col">
            <label for="" class="text-primary text-[17px]">Recipients</label>
            <div class="flex drop-shadow-md mt-2">
              <input
                type="number"
                :class="errorname ? ' border-secondary' : '  border-primary '"
                @input="onInput"
                class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
                placeholder="Recipients"
              />
            </div>
          </div>
          <Button
            class="mt-"
            :loading="loadingState"
            @click="prev()"
            loadingText="Authenticating"
          >
            Sign up
          </Button>
        </form>
         <select
              v-model="selected"
              class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
              placeholder="Password"
            >
             
             
            </select>

            <select
               v-if="selected"
              class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
              placeholder="Password"
            >
             
             
             
            </select>
        <div class="flex gap-1">
          <img src="../assets/image/copy.svg" alt="" class="w-3" /><small
            class="font-semibold text- text-sm gap-1 flex text-gray-800"
            >abaniseedu.com
            <img src="../assets/image/copy.svg" alt="" class="w-3" />2023</small
          >
          <h1 class="">{{ selectedDataPlan }}</h1>
         <input type="text" class="w-full"  v-model="selectedDataPlan" @input="onInput">
        </div>
      </div>
    </div>



    <div class=" ">
      <div
         :class="transacPrev ?'w-full':'w-0'" class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20  h-screen z-10"
      ></div>
      <div :class="transacPrev ?'bottom-0':' bottom-[100rem]'" class=" duration-700 ease-in-out z-10 bottom-[100rem] w-full h-screen flex pt-32 gap-10 fixed">
        <div
          class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>
        <div>
          <div class="text-[16px] bg-white m py-5 px-7">
            <p class="text-xl">Transaction Previews</p>

            <div class="mt-10 w-full mb-3">
              <p
                class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 border-t-2 px-4"
              >
                <span class="col-span-4">Network</span>
                <span class="col-span-2">Mtn</span>
              </p>
              <p
                class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
              >
                <span class="col-span-4">Data Plan</span>
                <span class="col-span-2">1GB</span>
              </p>
              <p
                class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
              >
                <span class="col-span-4">Recipients</span>
                <span class="col-span-">0879973453</span>
              </p>
              <p
                class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
              >
                <span class="col-span-4">Total</span>
                <span class="col-span-">260NGN</span>
              </p>
            </div>
          
              <p class="text-secondary cursor-pointer ml-6 mt-5" @click="transPrev()">Cancel</p>
            
            <form action=""></form>
            <label for="" class="">Transaction code</label><br />
            <input
              type="password"
              name=""
              class="w-full h-10 outline-none mb-3 px-3 rounded-[.5rem] border"
              id=""
            />
            <Button
              class="mt-"
              :loading="loadingState"
              @click="prev()"
              loadingText="Authenticating"
            >
              Submit
            </Button>
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
      transacPrev:true,
      selected:'',
      loadingState: false,
      accountname:'',
      selectedDataPlan:'',
      errorname:'',
      form:{
        serviceID:'',
        amount:'',
        billersCode:'',
        variation_code:'',
      },
      selectedOption: "Network",
      selectedMTNOption: "mtnOption1",
      options:{
       A: ['sa', 'gap' ],
       B: ['fa', 'name' ]
      }
    };
  },

  methods: {
    prev() {
      this.loadingState = true;
      // setTimeout(() => {
      //   this.$router.push({ path: "/prev" });
      // }, 1000);
    },

    transPrev(){
      this.transacPrev = false
    }
  },
  created() {
    console.log(this.selectedDataPlan);
    console.log(this.selectedMTNOption);
    const sells = this.selectedDataPlan;
    console.log(this.selectedMTNOption);
    console.log(sells,'hhhhhh')
    
  },
  watch:{
    selected(){
      this.selected = '';
    }
  }
};
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
}

td,
th {
  text-align: left;
  padding: 12px 8px;
}

tr:nth-child(even) {
  background-color: #ffffff;
}
.shadows {
  box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -webkit-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
  -moz-box-shadow: -1px 3px 49px -10px rgba(0, 0, 0, 0.29);
}
</style>
