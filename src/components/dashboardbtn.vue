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
    <div :class="hidden?'translate-x-0':'-translate-x-80'" class="lg:w-fit md:w-fit  fixed  z-30 bg-white md:translate-x-0 duration-700  shadows text-[14px] h-screen">
      <div class="h-28 w-8"></div>

      <router-link class="group " to="/Dashboard">
        <div :class="dashboard?'bg-primary':' bg-white'" class="px-3 group  duration-500 py-2 group-hover:bg-primary ">
          <div :class="dashboard?'text-white':'text-primary '" class="flex gap-5 group-hover:text-white items-center">
            <div :class="dashboard?'text-white':'text-primary '" class="w-5 group-hover:text-white ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M9 2H4C2.897 2 2 2.897 2 4v7c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2V4C11 2.897 10.103 2 9 2zM20 2h-5c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2V4C22 2.897 21.103 2 20 2zM9 15H4c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2v-3C11 15.897 10.103 15 9 15zM20 11h-5c-1.103 0-2 .897-2 2v7c0 1.103.897 2 2 2h5c1.103 0 2-.897 2-2v-7C22 11.897 21.103 11 20 11z" fill="currentColor" />
              </svg>
           
            </div>
            
            <p class="font-semibold">Dashboard</p>
          </div>
        </div>
      </router-link>

      <div class=" py-3  mt-5">
        <div class="flex flex-col gap-">
          <div>
            <router-link  class="group "  to="/scratchcards">
              <div :class="scratchcards?'bg-primary':' bg-white'"  class="px-3 group duration-500 py-2 group-hover:bg-primary ">
                <div :class="scratchcards?'text-white':'text-primary '"  class="flex items-center group-hover:text-white  gap-5">
                  <div :class="scratchcards?'text-white':'text-primary '" class=" w-5 group-hover:text-white md:text-wite ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
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
            <router-link  class="group "   to="/datapage">
              <div :class="datapage?'bg-primary':' bg-white'" class="px-3 group duration-500 py-2 group-hover:bg-primary ">
                <div :class="datapage?'text-white':'text-primary '"  class="flex items-center group-hover:text-white  gap-5">
                  <div :class="datapage?'text-white':'text-primary '"  class=" w-5 group-hover:text-white md:text-wite text-wite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                   <path d="M5.5 2C3.567 2 2 3.567 2 5.5C2 7.433 3.567 9 5.5 9C7.433 9 9 7.433 9 5.5C9 3.567 7.433 2 5.5 2 z M 21.330078 3.1015625L17.679688 3.6523438C17.273688 3.7133437 17.110391 4.21 17.400391 4.5L18.242188 5.34375L15.177734 8.4082031L14.283203 7.5703125 A 1.0001 1.0001 0 0 0 12.884766 7.6015625L9.4921875 11.078125L8.7070312 10.292969 A 1.0001 1.0001 0 0 0 7.3007812 10.285156L3.3027344 14.203125 A 1.0001 1.0001 0 1 0 4.703125 15.630859L7.9921875 12.40625L8.7929688 13.207031 A 1.0001 1.0001 0 0 0 10.214844 13.199219L13.630859 9.6992188L14.515625 10.529297 A 1.0001 1.0001 0 0 0 15.90625 10.507812L19.65625 6.7578125L20.5 7.5996094C20.79 7.8896094 21.286656 7.7263125 21.347656 7.3203125L21.898438 3.6699219C21.948438 3.3369219 21.663078 3.0515625 21.330078 3.1015625 z M 6.109375 3.4980469L6.3574219 3.4980469L6.3574219 6.6816406C6.3574219 7.0476406 6.0613125 7.34375 5.6953125 7.34375C5.3303125 7.34375 5.0332031 7.0466406 5.0332031 6.6816406L5.0332031 4.9648438L4.5 5.171875C4.192 5.290875 3.8613281 5.063375 3.8613281 4.734375C3.8613281 4.543375 3.9753437 4.3708281 4.1523438 4.2988281L6.109375 3.4980469 z M 19.984375 10.986328 A 1.0001 1.0001 0 0 0 19 12L19 21 A 1.0001 1.0001 0 1 0 21 21L21 12 A 1.0001 1.0001 0 0 0 19.984375 10.986328 z M 15.984375 12.986328 A 1.0001 1.0001 0 0 0 15 14L15 21 A 1.0001 1.0001 0 1 0 17 21L17 14 A 1.0001 1.0001 0 0 0 15.984375 12.986328 z M 11.984375 14.986328 A 1.0001 1.0001 0 0 0 11 16L11 21 A 1.0001 1.0001 0 1 0 13 21L13 16 A 1.0001 1.0001 0 0 0 11.984375 14.986328 z M 7.984375 16.986328 A 1.0001 1.0001 0 0 0 7 18L7 21 A 1.0001 1.0001 0 1 0 9 21L9 18 A 1.0001 1.0001 0 0 0 7.984375 16.986328 z M 3.984375 18.986328 A 1.0001 1.0001 0 0 0 3 20L3 21 A 1.0001 1.0001 0 1 0 5 21L5 20 A 1.0001 1.0001 0 0 0 3.984375 18.986328 z"  fill="currentColor" />
                      </svg>
                  </div>
                  <p class="font-semibold ">Data</p>
                </div>
              </div>
            </router-link>
           
          </div>

          <div>
            <router-link  class="group "  to="/airtime">
              <div :class="airtime?'bg-primary':' bg-white'"  class="px-3 group duration-500 py-2 group-hover:bg-primary ">
                <div :class="airtime?'text-white':'text-primary '"  class="flex items-center group-hover:text-white  gap-5">
                  <div :class="airtime?'text-white':'text-primary '"  class=" w-5 group-hover:text-white md:text-wite text-wite">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
                   <path d="M39.03125 47C39.015625 47 39 47 38.984375 47C31.46875 46.753906 22.664063 39.46875 16.597656 33.398438C10.523438 27.328125 3.238281 18.519531 3.003906 11.039063C2.917969 8.414063 9.359375 3.746094 9.425781 3.699219C11.097656 2.535156 12.953125 2.949219 13.714844 4.003906C14.230469 4.71875 19.113281 12.117188 19.644531 12.957031C20.195313 13.828125 20.113281 15.125 19.425781 16.425781C19.046875 17.148438 17.789063 19.359375 17.199219 20.390625C17.835938 21.296875 19.519531 23.519531 22.996094 26.996094C26.476563 30.472656 28.695313 32.160156 29.605469 32.796875C30.636719 32.207031 32.847656 30.949219 33.570313 30.570313C34.851563 29.890625 36.140625 29.804688 37.019531 30.34375C37.917969 30.894531 45.296875 35.800781 45.976563 36.273438C46.546875 36.675781 46.914063 37.363281 46.988281 38.164063C47.058594 38.972656 46.808594 39.828125 46.289063 40.574219C46.246094 40.636719 41.632813 47 39.03125 47Z" fill="currentColor" />
                    </svg>
                  </div>
                  <p class="font-semibold ">Airtime</p>
                </div>
              </div>
            </router-link>
           
          </div>
        </div>
      </div>

      <div class=" py-3  mt-5">
        <div class="flex flex-col gap-0">

          <div class="flex flex-col gap-0">
            <div>
              <div class="group " @click="showFound()" >
                <div  :class="Wallet?'bg-primary':' bg-white'"  class="px-0 group justify-between  group-hover:text-white   group duration-500 py-2 group-hover:bg-primary flex">
                  <div  class="flex items-center px-3  gap-5">
                    <div :class="Wallet?'text-white':'text-primary '" class="  group-hover:text-white w-5 md:text-wite text-wite">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" >
                    <path d="M34.71875 3.03125C33.976563 3.03125 33.101563 3.183594 31.90625 3.5C28.898438 4.292969 11.261719 9.171875 11 9.25C8.382813 10.234375 6.726563 11.203125 5.6875 12.34375C6.90625 11.519531 8.359375 11 10 11L38 11L38 7.65625C38 6.039063 37.988281 3.03125 34.71875 3.03125 Z M 10 13C6.28125 13 4 16.496094 4 19L4 40.375C4 43.472656 6.527344 46 9.625 46L40.375 46C43.472656 46 46 43.472656 46 40.375L46 18.84375C46 15.785156 43.140625 13 40 13 Z M 38.5 27C39.878906 27 41 28.117188 41 29.5C41 30.882813 39.878906 32 38.5 32C37.117188 32 36 30.882813 36 29.5C36 28.117188 37.117188 27 38.5 27Z"    fill="currentColor" />
                    </svg>
                    </div>

                    <div  class=" cursor-pointer w-5 flex gap-6 md:text-wite text-wite">
                      <p :class="Wallet?'text-white':'text-primary '" class="font-semibold group-hover:text-white">Wallet</p>
                     <!-- <img src="../assets/image/down.svg" class="w-" alt="" /> <span @click="showFound">jjjj</span> -->
                    </div>
                  </div>
                  <div   :class="changebtn?' rotate-0':' rotate-180'">
                    <div class="   duration-700 w-5 group-hover:text-white md:text-wite  " :class="Wallet?'text-white':'text-primary '">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                   <path d="M6.414063 7.585938L3.585938 10.414063L13 19.828125L22.414063 10.414063L19.585938 7.585938L13 14.171875Z" fill="currentColor" />
                   </svg>
                    </div>
                  </div>
                    
                </div>
              </div>
            </div>

          <div :class="foundpage ? ' h-0  duration-700 transform ':'h-[60px]  duration-700 transform'" class="flex w-full duration-700 mt-1  ease-in-out overflow-hidden flex-col ">
              <div>
              <router-link class="group" to="/fund">
                <div :class="fund?'bg-primary text-white':'text-primary bg-white'" class="px-3 group justify-between  group-hover:text-white   group duration-500 py-1 group-hover:bg-primary ">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p   class="font-semibold">Found With Bank Transfer</p>
                  </div>
                </div>
              </router-link>
            </div>

            <div>
              <router-link class="group" to="/fundhistory">
                <div :class="fundhistory?'bg-primary':' bg-white'"  class="px-3 group justify-between    group duration-500 py-1 group-hover:bg-primary ">
               <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p :class="fundhistory?'text-white':'text-primary  '"  class="group-hover:text-white font-semibold">Found History</p>
                  </div>
                </div>
              </router-link>
            </div>
          </div>

          </div>

          <div>
            
            <router-link  class="group "  to="/transactionreport">
              <div :class="transactionreport?'bg-primary':' bg-white'"  class="px-3 group duration-500 py-2 group-hover:bg-primary ">
                <div :class="transactionreport?'text-white':'text-primary '"  class="flex items-center group-hover:text-white  gap-5">
                  <div :class="transactionreport?'text-white':'text-primary '"  class=" w-5 group-hover:text-white md:text-wite text-wite">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <path d="M19 0L8 0C6.34375 0 5 1.34375 5 3L5 23C5 24.65625 6.34375 26 8 26L19 26C20.65625 26 22 24.65625 22 23L22 3C22 1.34375 20.65625 0 19 0 Z M 12.5 1L14.5 1C14.777344 1 15 1.222656 15 1.5C15 1.777344 14.777344 2 14.5 2L12.5 2C12.222656 2 12 1.777344 12 1.5C12 1.222656 12.222656 1 12.5 1 Z M 13.5 24.777344C12.792969 24.777344 12.222656 24.207031 12.222656 23.5C12.222656 22.792969 12.792969 22.222656 13.5 22.222656C14.207031 22.222656 14.777344 22.792969 14.777344 23.5C14.777344 24.207031 14.207031 24.777344 13.5 24.777344 Z M 20 20.5C20 20.777344 19.777344 21 19.5 21L7.5 21C7.222656 21 7 20.777344 7 20.5L7 3.5C7 3.222656 7.222656 3 7.5 3L19.5 3C19.777344 3 20 3.222656 20 3.5Z" fill="currentColor" />
                       </svg>
                  </div>
                  <p class="font-semibold ">Transaction</p>
                </div>
              </div>
            </router-link>
          </div>

        

           <div @click="showSetting()" class="flex cursor-pointer  flex-col gap-">
            <div class=" group   ">
               <div :class="Setting?'bg-primary':' bg-white'" class=" group pl-3  group-hover:text-white   group duration-500 py-2 group-hover:bg-primary justify-between flex">
                  <div  class="flex  items-center gap-5">
                    <div :class="Setting?'text-white':'text-primary  '"  class=" group-hover:text-white w-5 md:text-wite text-wite">
                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                    <path d="M12.0625 0C9.773438 0 9.8125 0.21875 9.8125 0.21875C9.539063 1.539063 9.253906 2.433594 9.0625 2.96875C7.898438 3.351563 6.824219 3.949219 5.90625 4.71875C5.351563 4.609375 4.457031 4.40625 3.21875 3.96875C3.21875 3.96875 3.050781 3.824219 1.875 5.8125C0.695313 7.800781 0.875 7.90625 0.875 7.90625C1.789063 8.765625 2.386719 9.425781 2.75 9.875C2.59375 10.558594 2.5 11.269531 2.5 12C2.5 12.664063 2.558594 13.3125 2.6875 13.9375C2.316406 14.378906 1.707031 15.042969 0.78125 15.875C0.78125 15.875 0.613281 15.957031 1.75 17.96875C2.886719 19.980469 3.03125 19.84375 3.03125 19.84375C4.28125 19.429688 5.191406 19.253906 5.75 19.15625C6.664063 19.960938 7.730469 20.5625 8.90625 20.96875C9.101563 21.496094 9.40625 22.414063 9.6875 23.78125C9.6875 23.78125 9.652344 24 11.9375 24C14.222656 24 14.21875 23.78125 14.21875 23.78125C14.492188 22.464844 14.742188 21.566406 14.9375 21.03125C16.101563 20.648438 17.175781 20.050781 18.09375 19.28125C18.648438 19.390625 19.542969 19.59375 20.78125 20.03125C20.78125 20.03125 20.945313 20.175781 22.125 18.1875C23.300781 16.199219 23.125 16.09375 23.125 16.09375C22.210938 15.234375 21.613281 14.574219 21.25 14.125C21.40625 13.4375 21.5 12.730469 21.5 12C21.5 11.335938 21.441406 10.6875 21.3125 10.0625C21.683594 9.621094 22.292969 8.957031 23.21875 8.125C23.21875 8.125 23.386719 8.042969 22.25 6.03125C21.113281 4.019531 20.96875 4.15625 20.96875 4.15625C19.71875 4.570313 18.808594 4.746094 18.25 4.84375C17.335938 4.042969 16.269531 3.4375 15.09375 3.03125C14.902344 2.503906 14.59375 1.585938 14.3125 0.21875C14.3125 0.21875 14.347656 0 12.0625 0 Z M 12 4C16.417969 4 20 7.582031 20 12C20 16.417969 16.417969 20 12 20C7.582031 20 4 16.417969 4 12C4 7.582031 7.582031 4 12 4 Z M 12 5C8.132813 5 5 8.132813 5 12C5 15.867188 8.132813 19 12 19C15.867188 19 19 15.867188 19 12C19 8.132813 15.867188 5 12 5 Z M 12 8C14.210938 8 16 9.789063 16 12C16 14.210938 14.210938 16 12 16C9.789063 16 8 14.210938 8 12C8 9.789063 9.789063 8 12 8Z" fill="currentColor" />
                     </svg>
                    </div>

                    <div :class="Setting?'text-white':' text-primary '"  class=" w-  flex gap-6 md:text-wite text-wite" >
                      <p class="font-semibold group-hover:text-white">Account Setting</p>
                     </div>
                  </div>
                      <div :class="changebtn1?' rotate-0':' rotate-180'">
                        <div :class="Setting?'text-white':'text-primary  '" class=" lg:text-primary duration-700 w-5 group-hover:text-white  " >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                   <path d="M6.414063 7.585938L3.585938 10.414063L13 19.828125L22.414063 10.414063L19.585938 7.585938L13 14.171875Z" fill="currentColor" />
                   </svg>
                  </div>
                      </div>
                </div>
            
            </div>


             <div :class="profile  ? ' h-0  duration-700 transform ':'h-[28px]  duration-700 transform'" class="flex w-full duration-700  ease-in-out overflow-hidden flex-col gap-1">

            <div >
                <router-link :class="profile?'bg-primary text-white':'text-primary bg-white'" class="group" to="/profile">
                <div class="px-3 group justify-between  group-hover:text-white   group duration-500 py-1 group-hover:bg-primary ">
                  <div class="flex gap-5 items-center">
                    <div
                      class="lg:text-primary w-5 md:text-wite text-wite"
                    ></div>
                    <p   class="font-semibold">Profile</p>
                  </div>
                </div>
              </router-link>
              
            </div>
          </div>
            <div >
            
            </div>

          </div>

          <div>
            <div class="group ">
              <div @click="logout()" class=" groupgroup-hover:text-white   group duration-500 py-2 group-hover:bg-primary items-center px-3">
                <div class="flex gap-5 "> 
                  <div class=" lg:text-primary duration-700 w-5 group-hover:text-white md:text-wite  w-5 md:text-wite text-wite">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26">
                      <path d="M13 0C12.887 0 12.773641 0.037375 12.681641 0.109375C12.591641 0.181375 10.454937 2.1860313 9.0859375 4.2070312C8.9799375 4.3640313 8.9715469 4.5654687 9.0605469 4.7304688C9.1495469 4.8964687 9.3236719 5 9.5136719 5L11.25 5C11.25 5 11.544828 14.368781 11.673828 14.550781C11.864828 14.818781 12.482047 15 12.998047 15C13.513047 15 14.058047 14.818781 14.248047 14.550781C14.378047 14.369781 14.75 5 14.75 5L16.488281 5C16.677281 5 16.849453 4.8954688 16.939453 4.7304688C17.028453 4.5644688 17.019063 4.3630312 16.914062 4.2070312C15.545062 2.1860312 13.409359 0.180375 13.318359 0.109375C13.224359 0.035375 13.112 3.9968029e-18 13 0 z M 18.765625 3.4941406C18.904625 3.8101406 19 4.1402344 19 4.4902344C19 4.9032344 18.897219 5.3146406 18.699219 5.6816406C18.683219 5.7116406 18.657625 5.7336719 18.640625 5.7636719C21.268625 7.5646719 23 10.58 23 14C23 19.514 18.514 24 13 24C7.486 24 3 19.514 3 14C3 10.58 4.7333281 7.566625 7.3613281 5.765625C7.3433281 5.734625 7.3158281 5.7097344 7.2988281 5.6777344C7.1028281 5.3147344 7 4.9032344 7 4.4902344C7 4.1412344 7.096375 3.8110937 7.234375 3.4960938C3.525375 5.5380937 1.0097656 9.474 1.0097656 14C1.0097656 20.617 6.383 26 13 26C19.617 26 25 20.617 25 14C25 9.474 22.475625 5.5361406 18.765625 3.4941406 z" fill="currentColor" />
                       </svg>
                  </div>
                  <p class=" group-hover:text-white font-semibold text-primary">Logout</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    </div>
</template>

<script>
import Button from './Button.vue';

export default {
  components: { Button },
  data() {
    return {
         profile:true,
      hidden:false,
      profile:true,
      foundpage: true,
      changebtn:true,
      changebtn1:true,
    };
  },
  props: {
    dashboard: Boolean,
    scratchcards: Boolean,
    datapage:Boolean,

    airtime:Boolean,
     Wallet:Boolean,
     fund:Boolean,
      fundhistory:Boolean,
      transactionreport:Boolean,
      Setting:Boolean,
       
  },
  methods: {
    showFound() {
      this.foundpage = !this.foundpage;
      this.changebtn = !this.changebtn
      console.log("it work");
    },

   async logout(){
       this.$emit("logout")
         try {
    const response = await fetch('https://api-abanise-5a3s.vercel.app/logout',{
      method : "GET",
      headers: {'Content-Type':'application/json'},
      credentials:'include',
    
      
    })
  
  if (!response.ok) {
    const errorData = await response.json();
  
    throw new Error(errorData.message);
    
  }
   
  
  

 
        this.$router.push({name: 'login'})
   
  } catch (error) {
    console.log(error)
  }
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