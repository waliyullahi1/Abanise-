<template>
  <div>
    <div
      class="w-full fixed z-40 h-[5rem] flex shadows justify-between abslute pr-20 bg-white"
    >
      <div class="w-full gap-5 items-center flex py-4 px-4">
        <img
          src="../assets/image/Menu.svg"
          class="w-7"
          @click="shows()"
          alt=""
        />
        <img src="@/assets/abanisee.png" class="w-[40px]" alt="" />
      </div>

      <div class="flex gap-3 items-center">
        <img
          src="../assets/image/account.svg"
          class="w-[30px] border rounded-full"
          alt=""
        />
        <p class="font-semibold flex text-sm">{{ accountname }} Account</p>
      </div>
      <div></div>
    </div>

    <div class="w-fit  text-[14px] h-screen">
      <div class="h-28 w-8"></div>

      <router-link to="/Dashboard">
        <div class="px-3">
          <div class="flex gap-5 items-center">
            <img class="w-5" src="../assets/image/dashboard_layout.svg" />
            <p class="font-semibold">Dashboard</p>
          </div>
        </div>
      </router-link>

      <div class=" py-3 s mt-5">
        <div class="flex flex-col gap-4">
          <div>
            <router-link to="/scratchcards">
              <div class="px-3">
                <div class="flex items-center gap-5">
                  <div class="lg:text-primary w-5 md:text-wite text-wite">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentcolor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M4 4C2.895 4 2 4.895 2 6C2 6.552 2.448 7 3 7L21 7C21.552 7 22 6.552 22 6C22 4.895 21.105 4 20 4L4 4 z M 3 10C2.448 10 2 10.448 2 11L2 18C2 19.105 2.895 20 4 20L20 20C21.105 20 22 19.105 22 18L22 11C22 10.448 21.552 10 21 10L3 10 z"
                      />
                    </svg>
                  </div>
                  <p class="font-semibold">Scratch cards</p>
                </div>
              </div>
            </router-link>
          </div>

          <div>
            <router-link to="/datapage">
              <div class="px-3">
                <div class="flex gap-5 items-center">
                  <div class="lg:text-primary w-5 md:text-wite text-wite">
                    <img
                      src="../assets/image/phonedata.svg"
                      class="w-6"
                      alt=""
                    />
                  </div>
                  <p class="font-semibold">Data</p>
                </div>
              </div>
            </router-link>
          </div>

          <div>
            <router-link to="/airtime">
              <div class="px-3">
                <div class="flex gap-5 items-center">
                  <div class="lg:text-primary w-6 md:text-wite text-wite">
                    <img
                      src="../assets/image/phoneairtime.svg"
                      class="w-4"
                      alt=""
                    />
                  </div>
                  <p class="font-semibold">Airtime</p>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>

      <div class=" py-3  mt-5">
        <div class="flex flex-col gap-4">

          <div class="flex flex-col gap-1">
            <div>
              <div>
                <div class="px-3  justify-between flex">
                  <router-link to="/found" class="flex items-center gap-5">
                    <div class="lg:text-primary w-5 md:text-wite text-wite">
                      <img
                        src="../assets/image/wallet.svg"
                        class="w-4"
                        alt=""
                      />
                    </div>

                    <div
                      class="lg:text-primary w-5 flex gap-6 md:text-wite text-wite"
                    >
                      <p class="font-semibold">Wallet</p>
                     <!-- <img src="../assets/image/down.svg" class="w-" alt="" /> <span @click="showFound">jjjj</span> -->
                    </div>
                  </router-link>
                   <img :class="changebtn?' rotate-0':' rotate-180'"  @click="showFound()" src="../assets/image/down.svg" class="w-4 duration-700" alt="" /> 
                    
                </div>
              </div>
            </div>

          <div :class="foundpage ? ' h-0  duration-700 transform ':'h-[60px]  duration-700 transform'" class="flex w-full duration-700  ease-in-out overflow-hidden flex-col gap-1">
              <div>
              <router-link to="/found">
                <div class="px-3">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p class="font-semibold">Found With Bank Transfer</p>
                  </div>
                </div>
              </router-link>
            </div>

            <div>
              <router-link to="/datapage">
                <div class="px-3">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p class="font-semibold">Found History</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          </div>

          <div>
            <router-link to="/datapage">
              <div class="px-3">
                <div class="flex gap-5 items-center">
                  <div class="lg:text-primary w-5 md:text-wite text-wite">
                    <img
                      src="../assets/image/phonedata.svg"
                      class="w-6"
                      alt=""
                    />
                  </div>
                  <p class="font-semibold">Transaction Report</p>
                </div>
              </div>
            </router-link>
          </div>

        

           <div class="flex flex-col gap-1">
            <div>
               <div class="px-3  justify-between flex">
                  <router-link to="/found" class="flex items-center gap-5">
                    <div class="lg:text-primary w-5 md:text-wite text-wite">
                      <img
                        src="../assets/image/wallet.svg"
                        class="w-4"
                        alt=""
                      />
                    </div>

                    <div
                      class="lg:text-primary w- flex gap-6 md:text-wite text-wite"
                    >
                      <p class="font-semibold">Account Setting</p>
                     </div>
                  </router-link>
                   <img :class="changebtn1?' rotate-0':' rotate-180'"  @click="showSetting()" src="../assets/image/down.svg"  class="w-4 duration-700" alt="" /> 
                    
                </div>
            
            </div>


             <div :class="profile  ? ' h-0  duration-700 transform ':'h-[60px]  duration-700 transform'" class="flex w-full duration-700  ease-in-out overflow-hidden flex-col gap-1">

            <div>
              <router-link to="/datapage">
                <div class="px-3">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p class="font-semibold">Profile</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>
            <div >
              <router-link to="/datapage">
                <div :class="profile ? ' h-0  duration-700 transform ':'h-[10px]  duration-700 transform'" class="px-3">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p class="font-semibold text-14">Profile</p>
                  </div>
                </div>
              </router-link>
            </div>

          </div>

          <div>
            <router-link to="/airtime">
              <div class="px-3">
                <div class="flex gap-5 items-center">
                  <div class="lg:text-primary w-6 md:text-wite text-wite">
                    <img
                      src="../assets/image/logout.svg"
                      class="w-4"
                      alt=""
                    />
                  </div>
                  <p class="font-semibold">Logout</p>
                </div>
              </div>
            </router-link>
          </div>

        </div>
      </div>
    </div>
    <!-- <div class="lg:w-fit lg:block    group sm:bl md:hidden lg:bg-white bg-white h-screen  fixed  shadows z-30  " :class="show ? 'hidden': 'block'">
        <div class="w-full h-[7rem]"></div>
         
            <div class="flex gap-2 text-[17px] pb-7 px-3 b text-xl border-b-2 ">
            <div class="lg:text-primary w-6 md:text-white  text-white">
           <img class="w-5" src="../assets/image/dashboard_layout.svg" alt="">
          
          </div>
           <span class=" md:hiden transform text-[15px] duration-300 "> Dashboard</span> </div>
         

        <div class="px-3 border-b-2 pb-6 mt-5 gap-4">
          <p class="text-[18px] md:hidden hidden lg:flex text-gray-400 font-semibold">Vend</p>
          <div class="mt-5 flex flex-col gap-4">
            <router-link to="/scratchcards">
              <div class="text-[17px] flex gap-3 ">
                <div class="lg:text-primary w-6 md:text-wite text-wite">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentcolor" viewBox="0 0 24 24">
                  <path d="M4 4C2.895 4 2 4.895 2 6C2 6.552 2.448 7 3 7L21 7C21.552 7 22 6.552 22 6C22 4.895 21.105 4 20 4L4 4 z M 3 10C2.448 10 2 10.448 2 11L2 18C2 19.105 2.895 20 4 20L20 20C21.105 20 22 19.105 22 18L22 11C22 10.448 21.552 10 21 10L3 10 z"  />
                </svg>
                </div> 
                
                <span class="md:hien lg:flex"> Scratch  cards</span> </div>
            </router-link>

           <router-link to="/datapage"> <p class="text-[18px] flex gap-3 f"> <img src="../assets/image/phonedata.svg" class="w-6" alt=""> <span class="md:hien hden lg:flex">  Data </span> </p></router-link>

             <router-link to="/airtime"><p class="text-[18px] flex gap-3 font-d"> <img src="../assets/image/phoneairtime.svg" class="w-6" alt=""> <span class="mdiden hen lg:flex">  Airtime </span>   </p></router-link>
          </div>
        </div>

        <div class="px-3 border-b-2 pb-6 mt-5 gap-4">
          <p class="text-[18px] text-gray-400 font-semibold">Others</p>
          <div class="mt-5 flex flex-col gap-4">
            <router-link to="/fund"><p class="text-[18px] flex gap-3 font-d"> <img src="../assets/image/wallet.svg" class="w-6" alt=""><span class="md:hden hden lg:flex">Wallet <img src="../assets/image/down.svg" alt="" class="w-4 ml-9"> </span>  </p></router-link>

            <p class="text-[18px]  flex gap-3 font-bod"> <img src="../assets/image/transaction.svg" class="w-6" alt=""><span class="md:hiden hiden lg:flex"> Transaction history</span>  </p>

             <p class="text-[18px] flex gap-3 font-bld"> <img src="../assets/image/settings.svg" class="w-6" alt=""><span class="md:hdden hiden lg:flex"> Account setting</span>  </p>

              <p class="text-[18px] flex gap-3 font-old"> <img src="../assets/image/logout.svg" class="w-6" alt=""> <span class="md:hiden hiden lg:flex">Logout</span></p>
          </div>
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      profile:false,
      foundpage: false,
      changebtn:true,
      changebtn1:false,
    };
  },
  methods: {
    showFound() {
      this.foundpage = !this.foundpage;
      this.changebtn = !this.changebtn
      console.log("it work");
    },

    showSetting() {
      this.profile = !this.profile;
      this.changebtn1 = !this.changebtn1
      console.log("it worttk");
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
.sas {
  background-color: black;
  
}


</style>