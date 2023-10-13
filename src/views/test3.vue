<template>
  <div class="bg-gray-100">
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
          <form action="" class="flex flex-col gap-5 h-fit p-8 text-xl">
            <div class="flex bg-white flex-col">
              <label for="" class="text-primary mb- px-4 text-[17px]"
                >Network</label
              >
              <select
                v-model="form.network"
                class="w-full rounded-[.2rem] px-3 ml-2 py-[.5rem] text-[17px] outline-none focus:border-primary border-gray-100 border"
                placeholder="Password"
                  @input="onInput"
              >
                <option value="mtn">MTN</option>
                <option value="glo">GLO</option>
                <option value="9mobile">9mobile</option>
                <option value="airtime">Airtime</option>
              </select>
              <p
                :class="errornetwork ? 'flex' : 'hidden '"
                class="e pl-5 text-red-700 text-[13px]"
              >
               
                select the Network
              </p>
            </div>

            <div class="flex bg-white flex-col">
              <label for="" class="text-primary mb- px-4 text-[17px]"
                >Amount</label
              >
              <input
                v-model="form.amount"
                type="number"
                class="w-full font-seibold rounded-[.2rem] px-4 ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
                placeholder="Amount"
                  @input="onInput"
              />
              <p
                :class="erroramount ? 'flex' : 'hidden '"
                class="e pl-5 text-red-700 text-[13px]"
              >
                Amount must not less than 50₦
              </p>
            </div>

            <div class="flex bg-white flex-col">
              <label for="" class="text-primary px-4 text-[17px]"
                >Recipients</label
              >
              <input
                v-model="form.recipients"
                type="number"
                class="w-full font-seibold rounded-[.2rem] px-4 ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
                placeholder="phone number "
                  @input="onInput"
              />
              <p
                :class="errorphone ? 'flex' : 'hidden '"
                class="e pl-5 text-red-700 text-[13px]"
              >
                enter correct phone
              </p>
            </div>

            <Button
              class="mt-"
              :loading="loadingState"
              @click="register()"
              loadingText="Authenticating"
            >
              Previews
            </Button>
          </form>
              <table class="font-normal bg-white  text-sm">
                <tr>
                  <th>reference </th>
                  <th>Date/Time</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Recipient</th>
                  <th>Value</th>
                  <th>Amount</th>
                  <th>Wallet Bal</th>
                  <th>Status</th>
                </tr>
                <tr  v-for="item in data" :key="item.id">
                  <td>{{ item.refid }}</td>
                  <td>{{ item.transactionDate }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.recipient }}</td>
                  <td>{{ item.value }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.wallet }}</td>
                  <td>{{ item.status }}</td>
                </tr>
              </table>
          <div class="flex gap-1">
            <img src="../assets/image/copy.svg" alt="" class="w-3" />
            <small class="font-semibold text- text-sm gap-1 flex text-gray-800"
              >abaniseedu.com
              <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
            </small>
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
                  <span class="col-span-4">Service</span>
                  <span class="col-span-2">{{ form.serviceID }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Recipients</span>
                  <span class="col-span-">{{ form.recipients }}</span>
                </p>
                <p
                  class="grid grid-cols-6 justify-between ml-6 py-1 border-b-2 px-4"
                >
                  <span class="col-span-4">Total</span>
                  <span class="col-span-">{{ form.amount }}</span>
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