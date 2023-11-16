<template>
  <div class="bg-gray-100 text-[poppins]">
    <div>
      <dashbord :datapage="true" class="w-full"></dashbord>
      <successfulTemplate :status="status" :statusreport="statusreport" :transacicon='transacicon'
        :transacmessage="transacmessage" :messagetransaction="messagetransaction" @next="next" class="w-full">
      </successfulTemplate>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"></div>

        <div class="w-full 0 py- mb-20 px-5">
          <h1 class="text-[19px] text-gray-600 font-medium">
            Data Bundle Vend
          </h1>
          <div class="bg-green-100 w-fit py-2 mt-5 h-fit px-4">
            <h1 class="text-[poppins] text-green-900 mb-6 font-medium text-[15px]">
              Notification
            </h1>
            <p class="text-[14px] mb-4 text-green-900 font-normal">
              Welcome to our website, We are 100%, Also we are selling (WAEC,
              NABTEB, <br class="md:block hidden" />and NECO Result Checker)
              with other epin for o'level Registration
            </p>
          </div>
          <div
            class="w-full md: md:max-w-md sm:w-2/3 mt-10 lg:max-w-md h-fit  shadows rounded-[1rem] ld text-2xl shadow bg-white">
            <form @submit.prevent="prevTrans" action="" class="flex flex-col gap-5 h-fit p-8 text-xl font-semild">
              <div v-for="(field, index) in formFields" :key="index">
                <div class="flex bg-white flex-col">
                  <label :for="field.name" class="text-primary mb- ml-4 text-[15px]">{{ field.label }}</label>
                  <select :id="field.name" v-model="formValues[field.name]" @input="onInput" :class="
                    field.errorselection
                      ? ' border-secondary'
                      : '  border-gray-300 '
                  "
                    class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[15px] outline-none focus:border-primary border py-[.3rem]">
                    <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.value">
                      {{ option.text }}
                    </option>
                  </select>
                  <p :class="field.errorselection ? 'flex' : 'hidden '" class="pl-5 text-red-700 text-[14px]">
                    {{ field.message }}
                  </p>
                </div>
              </div>

              <div class="flex bg-white flex-col">
                <label for="" class="text-primary ml-4 text-[15px]">Recipients</label>

                <div class="drop-shadow-md mt-">
                  <input type="number" v-model="form.phone" :class="
                    errorphone ? ' border-secondary' : ' border-gray-300 '
                  " @input="onInput"
                    class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border py-[.2rem]"
                    placeholder="Recipients" />
                  <p :class="errorphone ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
                    please enter correct phone
                  </p>
                </div>
                <div class="flex mt-2 ml-3 gap-2 text-gray-700 font-medium items-center">
                  <input id="" type="checkbox" name="Ported_number" />
                  <label id="" for="Ported_number" class="leading-5 text-[14px]">
                    Bypass number validator
                  </label>
                </div>
              </div>
              <Button class="mt- text-[13px]" :loading="loadingState" @click="prevTrans()"
                loadingText="please wait...">Previews</Button>
            </form>

            <div class="flex gap-1">
              <img src="../assets/image/copy.svg" alt="" class="w-3" />
              <small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com
                <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
              </small>
            </div>
          </div>
        </div>
      </div>

      <div class="mx-">
        <div :class="transacPrev ? 'w-full' : 'w-0'"
          class="fixed top-0 right-0 bottom-[100rem] bg-black opacity-20 h-screen z-10"></div>
        <div :class="transacPrev ? 'bottom-0' : ' bottom-[100rem]'"
          class="duration-700 ease-in-out z-10 bottom-[100rem] w-full h-screen flex pt-32 gap-10 fixed">
          <div class="h-fit lg:w-1/4 md:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block  ml-[2rem]"></div>
          <div>
            <div class="text-[16px] bg-white mx-4 py-5 px-0">
              <p class="text-xl text-center">Transaction Previews</p>
              <p class="message pl-5 text-2xl text-red-700 text-center text-">
                {{ erromessage }}
              </p>
              <div class="mt-10 w-full mb-3">
                <p class="grid grid-cols-6 justify-between py-1 border-b-2 border-t-2 px-4">
                  <span class="col-span-4">Network</span>
                  <span class="col-span-2">{{ form.network }}</span>
                </p>
                <p class="grid grid-cols-6 justify-between py-1 border-b-2 px-4">
                  <span class="col-span-4">serviceID</span>
                  <span class="col-span-2"> {{ form.serviceID1 }} Data</span>
                </p>
                <p class="grid grid-cols-6 justify-between  py-1 border-b-2 px-4">
                  <span class="col-span-4">Recipients</span>
                  <span class="col-span-">234{{ form.phone }}</span>
                </p>
                <p class="grid grid-cols-6 justify-between  py-1 border-b-2 px-4">
                  <span class="col-span-4">Amount</span>
                  <span class="col-span-">₦{{ form.amount }}</span>
                </p>
              </div>




              <div class="mx-3">
                <p class="text-secondary cursor-pointer  mt-5" @click="cancelTrans()">
                  Cancel
                </p>
                <label for="" class="">Transaction code</label><br />
                <input @input="onInput" v-model="form.TransactionCode" type="password" name=""
                  class="w-full h-10 outline-none mb-3 px-3 rounded-[.5rem] border" id="" />

                <p :class="errortransactionCode ? 'flex' : 'hidden '" class="e pl-5 text-red-700 text-[13px]">
                  transaction Code is required
                </p>
                <Button class="mt-" :loading="loadingState" @click="submitted()" loadingText="please wait ">
                  Submit
                </Button>
              </div>
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
      transacicon: '',
      loadingState: '',
      transacmessage: true,
      messagetransaction: '',
      status: '',
      statusreport: false,
      errortransactionCode: "",
      transacPrev: "",
      erromessage: "",
      loadingState: false,
      errorphone: "",
      form: {
        errortransactionCode: false,
        phone: "",
        serviceID1: "",
        amount: "",
        planoption: "",
        variation_code: "",
        network: "",
        TransactionCode: "",
        datatype: "",
      },
      formFields: [
        {
          name: "product",
          label: "Network",
          errorselection: false,
          message: "please select network",
          options: [
            { value: "network", text: "network" },
            { value: "MTN", text: "MTN" },
            { value: "GLO", text: "GLO" },
            { value: "Airtel", text: "Airtel" },
            { value: "ninemobile", text: "9mobile" },
          ],
        },
        {
          name: "amount",
          label: "Data Plan",
          errorselection: false,
          message: "please select network",
        },
      ],
      formValues: {
        product: "network",
        amount: 2000,
        plan: "",
      },
      productOptions: {
        network: [{ value: 2000, text: "Select data Type" }],

        GLO: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "corporate100mb - ₦155 - 1Month",
            plan: 173,

          },
          {
            value: 4000,
            text: "corporate200mb - ₦80 - 1Month",
            plan: 172,

          },

          {
            value: 5000,
            text: "corporate1GB - ₦250 - 1Month",
            plan: 174,

          },
          {
            value: 6000,
            text: "corporate2GB - ₦500 - 1Month",
            plan: 175,

          },

          {
            value: 7000,
            text: "corporate3GB - ₦750 - 1Month",
            plan: 176,

          },

          {
            value: 8000,
            text: "corporate5GB - ₦1250 - 1Month",
            plan: 177,

          },

        ],

        MTN: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "SME100mb - ₦130 - 1Month",
            plan: 13,

          },
          {
            value: 4000,
            text: "SME1GB - ₦230 - 1Month",
            plan: 2,

          },

          {
            value: 5000,
            text: "SME2GB - ₦500 - 1Month",
            plan: 3,

          },
          {
            value: 6000,
            text: "SME3GB - ₦750 - 1Month",
            plan: 4,

          },

          {
            value: 7000,
            text: "SME5GB - ₦1250 - 1Month",
            plan: 4,

          },

          {
            value: 8000,
            text: "SME10GB - ₦2500 - 1Month",
            plan: 18,

          },
          //Mtn corporate data 

          {
            value: 40000,
            text: "corporate500MB - ₦150 - 1 Month",
            plan: 18,

          },
          {
            value: 9000,
            text: "corporate1GB - ₦250 - 1 Month",
            plan: 14,

          },

          {
            value: 10000,
            text: "corporate2GB - ₦500 - 1 Month",
            plan: 15,

          },

          {
            value: 20000,
            text: "corporate3GB - ₦750 - 1 Month",
            plan: 16,

          },

          {
            value: 30000,
            text: "corporate5GB - ₦1250 - 1 Month",
            plan: 17,

          },

          {
            value: 40000,
            text: "corporate10GB - ₦2500 - 1 Month",
            plan: 18,

          },
        ],
        Airtel: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "corporate100mb - ₦55 - 7DAYS",
            plan: 157,

          },
          {
            value: 5000,
            text: "corporate300mb - ₦500 - 1Month",
            plan: 158,

          },
          {
            value: 4000,
            text: "corporate1GB - ₦250 - 1Month",
            plan: 160,

          },


          {
            value: 6000,
            text: "corporate2GB - ₦500 - 1Month",
            plan: 161,

          },

          {
            value: 7000,
            text: "corporate500mb - ₦150 - 1Month",
            plan: 159,

          },

          {
            value: 8000,
            text: "corporate5GB - ₦1250 - 1Month",
            plan: 162,

          },



        ],
        ninemobile: [
          { value: 2000, text: "Select data Type", plan: "" },
          {
            value: 3000,
            text: "SME1.5 - ₦525 - 1Month",
            plan: 106,

          },
          {
            value: 4000,
            text: "SME1GB - ₦350- 1Month",
            plan: 105,

          },

          {
            value: 5000,
            text: "SME2GB - ₦700 - 1Month",
            plan: 107,

          },
          {
            value: 6000,
            text: "SME3GB - ₦1050 - 1Month",
            plan: 108,

          },

          {
            value: 7000,
            text: "SME5GB - ₦1550 - 1Month",
            plan: 109,

          },

          {
            value: 8000,
            text: "SME5GB - ₦2500 - 1Month",
            plan: 18,

          },


          {
            value: 50000,
            text: "SME5GB - ₦220 - 14days",
            plan: 104,

          },
          //ninimobile corporate data 

          {
            value: 40000,
            text: "corporate500MB - ₦150 - 1 Month",
            plan: 179,

          },
          {
            value: 9000,
            text: "corporate1GB - ₦160 - 1 Month",
            plan: 180,

          },

          {
            value: 10000,
            text: "corporate2GB - ₦320 - 1 Month",
            plan: 181,

          },

          {
            value: 20000,
            text: "corporate3GB - ₦480 - 1 Month",
            plan: 182,

          },

          {
            value: 30000,
            text: "corporate5GB - ₦800 - 1 Month",
            plan: 184,

          },


        ],

      },
    };
  },
  methods: {

    next() {
      console.log('dddddd33');
      this.transacmessage = true
      setTimeout(() => {

        this.$router.push({ name: "dashboard" });
        this.loadingState = false;

      }, 200);
    },
    getOptions(field) {
      if (field.name === "amount") {
        return this.productOptions[this.formValues.product] || [];
      }
      return field.options;
    },
    getSelectedOption(field) {
      if (field) {
        const selectedValue = this.formValues[field.name];
        const options = this.getOptions(field);
        if (options) {
          // Check if options is not undefined
          const selectedOption = options.find(
            (option) => option.value === selectedValue
          );
          return selectedOption;
        } else {
          console.error("getOptions returned undefined for field:", field);
        }
      }
    },

    cancelTrans() {
      this.transacPrev = false;
    },

    resetErrors() {
      this.formFields[0].errorselection = false;
      this.formFields[1].errorselection = false;
      this.errorphone = false;
      this.errortransactionCode = false;
    },
    onInput() {
      this.resetErrors();
    },
    prevTrans() {
      this.loadingState = true;
      const selectedOption = this.getSelectedOption(this.formFields[1]);
      const selectedProduct = this.getSelectedOption(this.formFields[0]);
      const phone = String(this.form.phone);
      const regex = /[a-zA-Z]/;
      const amountoption = selectedOption.text.split(" - ")[1]; //amount to pay
      const datatype = selectedOption.text.split(" - ")[0];
      const planoption = selectedOption.plan;
      // const variation_code = selectedOption.variation_code; //service id
      const networkoption = selectedProduct.text; //network he/she that choose
      const serviceIDoptionArray = selectedOption.text.split(" - ");
      const serviceIDoption1 = `${serviceIDoptionArray[0]} `;
      console.log(planoption, 'planoption');
      console.log(amountoption, 'amountoption');
      console.log(datatype, 'datatype');
      console.log(networkoption, 'networkoption');
      console.log(serviceIDoptionArray, 'serviceIDoptionArray');
      console.log(serviceIDoption1, 'serviceIDoption1');

      if (networkoption === "network") {
        this.formFields[0].errorselection = true;
        this.loadingState = false;
        return false;
      } else if (serviceIDoption1 === "Select data Type ") {
        this.formFields[1].errorselection = true;
        this.loadingState = false;
        console.log("yyyyyyy");
        return false;
      } else if (!phone || phone.length < 10 || phone.length > 11 || regex.test(phone)) {
        this.errorphone = true;
        this.loadingState = false;

        return false;
      } else {
        this.form.amount = amountoption.replace("₦", "");
        this.form.network = networkoption;
        this.form.serviceID1 = serviceIDoption1;
        this.form.planoption = planoption;
        // this.form.variation_code = variation_code;
        this.form.datatype = datatype;
        console.log(this.form.planoption, this.form.variation_code);
        setTimeout(() => {
          this.transacPrev = true;
          this.loadingState = false;
        }, 1000);
      }
    },

    async submitted() {
      this.loadingState = true;
      console.log(
        this.form.plan,

      );
      if (!this.form.TransactionCode) {
        this.errortransactionCode = true;
        this.loadingState = false;
        return false;
      } else {
        try {
          console.log();
          this.loadingState = true;
          const response = await fetch("https://api-abanise-five.vercel.app/sub/data", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            credentials: "include",

            body: JSON.stringify({
              "plan": this.form.planoption,
              "networkName": this.networkoption,
              "phone": `0${this.form.phone}`,
              "TransactionCode": this.form.TransactionCode,
              "datatype": this.form.datatype,
              "amount": this.form.amount,

            }),
          });

          if (!response.ok) {
            const errorData = await response.json();
            this.erromessage = errorData.message;
            throw new Error(errorData.message);
          }
          this.loadingState = true;
          const data = await response.json();
          this.message = data.success;
          console.log("Success:", data);
          this.status = data.response_description
          this.transacPrev = false;
          this.transacmessage = false;
          this.loadingState = false;
          if (this.status === 'TRANSACTION SUCCESSFUL') {
            this.messagetransaction = `You have successfully shared ${this.form.datatype} data  for this number ${this.form.phone} `
            this.transacicon = true
            this.statusreport = true
          } else {
            this.transacicon = false
            this.messagetransaction = 'Dear customer we are sorry, your tansaction is not successful try it again.'
          }

        } catch (error) {
          console.log(error);
          this.loadingState = false;
        }
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