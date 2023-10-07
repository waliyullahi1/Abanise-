<template>
  <div class="bg-gray-100  h-screen">
    <div>
      <dashbord class="w-full"></dashbord>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div
          class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
        ></div>

       <div class="w-full">
         <h1 class=" text-[19px] mb-10 text-gray-600  font-medium">Data bundle Vend</h1>
        <div
          class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md h-fit mx-4 shadows rounded-[1rem] ld text-2xl shadow bg-white"
        >
          <form
            @submit.prevent="prevTrans"
            action=""
            class="flex flex-col gap-5 h-fit p-8 text-xl font-semild"
          >
            <div v-for="(field, index) in formFields" :key="index">
              <div class="flex bg-white flex-col">
                <label
                  :for="field.name"
                  class="text-primary mb- ml-4 text-[17px]"
                  >{{ field.label }}</label
                >
                <select
                  :id="field.name"
                  v-model="formValues[field.name]"
                  @input="onInput"
                  :class="
                    field.errorselection
                      ? ' border-secondary'
                      : '  border-gray-500 '
                  "
                  class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"
                >
                  <option
                    v-for="(option, index) in getOptions(field)"
                    :key="index"
                    :value="option.value"
                  >
                    {{ option.text }}
                  </option>
                </select>
                <p
                  :class="field.errorselection ? 'flex' : 'hidden '"
                  class="pl-5 text-red-700 text-[14px]"
                >
                  {{ field.message }}
                </p>
              </div>
            </div>

            <div class="flex bg-white  flex-col">
              <label for="" class="text-primary ml-4 text-[17px]">Recipients</label>

              <div class="drop-shadow-md mt-">
                <input
                  type="number"
                  v-model="form.phone"
                  :class="
                    errorphone ? ' border-secondary' : '  border-primary '
                  "
                  @input="onInput"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border py-[.3rem]"
                  placeholder="Recipients"
                />
                <p
                  :class="errorphone ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 text-[13px]"
                >
                  please enter correct phone
                </p>

              </div>
              <div class="flex mt-2 ml-3 text-gray-700 font-medium items-center">
                <input type="checkbox" name="Ported_number" id="">
                <label for="Ported_number" class=" leading-5 text-[14px]">
                    Bypass number validator 
                </label>
              </div>
            </div>
            <Button
              class="mt-"
              :loading="loadingState"
              @click="prevTrans()"
              loadingText="Authenticating"
              >Previews</Button
            >
          </form>

          <div class="flex gap-1">
            <img src="../assets/image/copy.svg" alt="" class="w-3" />
            <small class="font-semibold text- text-sm gap-1 flex text-gray-800"
              >abaniseedu.com
              <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
            </small>
          </div>
        </div>
       </div>
      </div>

      <div class="mx-">
        <div
          :class="transacPrev ? 'w-full' : 'w-0'"
          class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"
        ></div>
        <div
          :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
          class="duration-700 ease-in-out z-10 bottom-[100rem] w-full h-screen flex pt-32 gap-10 fixed"
        >
          <div
            class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"
          ></div>
          <div>
            <div class="text-[16px] bg-white mx-4 py-5 px-7">
              <p class="text-xl">Transaction Previews</p>
              <p class="message pl-5 text-2xl text-red-700 text-center text-">
                {{ erromessage }}
              </p>
              <div class="mt-10 w-full mb-3">
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 border-t-2 px-4"
                >
                  <span class="col-span-4">Network</span>
                  <span class="col-span-2">{{ form.network }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Data Plan</span>
                  <span class="col-span-2">{{ form.serviceID }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Recipients</span>
                  <span class="col-span-">{{ form.phone }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Total</span>
                  <span class="col-span-">{{ form.amount }}NGN</span>
                </p>
              </div>

              <p
                class="text-secondary cursor-pointer ml-6 mt-5"
                @click="cancelTrans()"
              >
                Cancel
              </p>

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
                @click="submitted()"
                loadingText="Authenticating"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
