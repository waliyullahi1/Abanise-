<template>
  <div>
    <div
      class="w-full fixed z-40 h-[5rem] text-[poppins] flex shadows justify-between abslute pr-20 bg-white"
    >
      <div class="w-full gap-5 items-center flex py-4 px-4">
        <img @click="hiddenashbtn1()"
          src="../assets/image/Menu.svg"
          class="w-7"
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
        <p class="font-semibold flex text-sm"> Account</p>
      </div>
      <div></div>
    </div>
      <div @click="hiddenashbtn2()" :class="hidden?'translate-x-0':'-translate-x-[1000px]'" class="w-full duration-200 h-screen fixed z-30 bg-slate-600  opacity-40 md:hidden block"></div>
    <div :class="hidden?'translate-x-0':'-translate-x-80'" class="lg:w-fit md:w-1/4 fixed  z-30 bg-white md:translate-x-0 duration-700  shadows text-[14px] h-screen">
      <div class="h-28 w-8"></div>

      <router-link to="/Dashboard">
        <div class="px-3">
          <div class="flex gap-5 items-center">
            <img class="w-5" src="../assets/image/dashboard_layout.svg" />
            <p class="font-semibold">Dashboard</p>
          </div>
        </div>
      </router-link>

      <div class=" py-3  mt-5">
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
                  <p class="font-semibold ">Scratch cards</p>
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
                  <div to="/found" class="flex items-center gap-5">
                    <div class="lg:text-primary w-5 md:text-wite text-wite">
                      <img
                        src="../assets/image/wallet.svg"
                        class="w-4"
                        alt=""
                      />
                    </div>

                    <div @click="showFound()" class="lg:text-primary cursor-pointer w-5 flex gap-6 md:text-wite text-wite">
                      <p class="font-semibold">Wallet</p>
                     <!-- <img src="../assets/image/down.svg" class="w-" alt="" /> <span @click="showFound">jjjj</span> -->
                    </div>
                  </div>
                   <img :class="changebtn?' rotate-0':' rotate-180'" @click="showFound()"   src="../assets/image/down.svg" class="w-4 duration-700" alt="" /> 
                    
                </div>
              </div>
            </div>

          <div :class="foundpage ? ' h-0  duration-700 transform ':'h-[45px]  duration-700 transform'" class="flex w-full duration-700  ease-in-out overflow-hidden flex-col gap-1">
              <div>
              <router-link to="/fund">
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
              <router-link to="/fundHistory">
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
            <router-link to="/transactionreport">
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

        

           <div @click="showSetting()" class="flex cursor-pointer  flex-col gap-1">
            <div>
               <div class="px-3  justify-between flex">
                  <div to="/found" class="flex items-center gap-5">
                    <div class="lg:text-primary w-5 md:text-wite text-wite">
                      <img
                        src="../assets/image/wallet.svg"
                        class="w-4"
                        alt=""
                      />
                    </div>

                    <div class="lg:text-primary w- flex gap-6 md:text-wite text-wite" >
                      <p class="font-semibold">Account Setting</p>
                     </div>
                  </div>
                   <img :class="changebtn1?' rotate-0':' rotate-180'"  @click="showSetting()" src="../assets/image/down.svg"  class="w-4 duration-700" alt="" /> 
                    
                </div>
            
            </div>


             <div :class="profile  ? ' h-0  duration-700 transform ':'h-[20px]  duration-700 transform'" class="flex w-full duration-700  ease-in-out overflow-hidden flex-col gap-1">

            <div>
              <router-link to="/profile">
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
    </div>
</template>

<script>
export default {
  data() {
    return {

      hidden:false,
      profile:true,
      foundpage: true,
      changebtn:true,
      changebtn1:true,
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
      
    },

    hiddenashbtn2(){
     this.hidden=false
    },

     hiddenashbtn1(){
     this.hidden= !this.hidden
    }
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