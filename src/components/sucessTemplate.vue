<template>
  <div class="mx- fixed z-40 ">
        <div
          :class="transacmessage ? 'w-0' : 'w-full'"
          class="fixed top-0 right-0 bottom-[100rem] duration-100  bg-black opacity-20 h-screen z-10"
        ></div>
        <div
          :class="transacmessage  ? ' scale-0' : ' scale-20'"
          class=" ease-in-out z-10 bottom-0 duration-700 w-full h-screen flex pt-32 sm:left-0 left-0 gap-10 fixed"
        >
          <div
            class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[0rem]"
          ></div>
          <div>
            <div class="text-[16px]  mx-4 py-5 px-7" :class="statusreport ?' bg-white ' : 'bg-[#fefcfc]'">
              <div class="flex justify-center">
                <img  :class="transacicon  ? ' block' : 'hidden '" src="@/assets/image/success.gif" alt="sucessful payment"    class=" w-40 mx-0 duration-1000 justify-center " >
                <img :class="transacicon  ? ' hidden' : ' block'" src="@/assets/image/faileds.gif" alt="sucessful payment"    class=" w-60  mx-0 duration-1000 justify-center " >
 
              </div>
              <div class="mt- w-full mb-3">
                <h1   class=" text-2xl font-medium text-center " :class="statusreport ?' text-green-800' : ' text-red-700'">{{status}}</h1>
                <h1 class="text-[13px] text-center lower text-gray-800 font-medium ">{{messagetransaction}}</h1>
              </div>

             

              <Button
                class="mt-1"
                :loading="loadingState"
                @click="next()"
                loadingText="please wait "
              >
                Okay
              </Button>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {

    data() {
    return {

     
     
    };
  },
props: {
    status: String,
    messagetransaction: String,
    transacmessage:Boolean,
   
    transacicon:Boolean,
    statusreport:Boolean,
  },



   

   methods:{
    next(){

   
       this.$emit("next")


  }
   
  },
  
}


</script>

<style>
.successesbg{
  background-color: white;
}
.successes {
  color: green;
}
.failedsbg{
   background-color: #fefcfc;
}

.faileds {
  color: red;
}

.failedsicon{

}
</style>