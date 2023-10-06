<template>
  <div class="bg-gray-100 h-screen">
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
            @submit.prevent="prevTrans"
            action=""
            class="flex flex-col gap-5 h-fit p-8 text-xl font-semild"
          >
            <div v-for="(field, index) in formFields" :key="index">
              <div class="flex bg-white flex-col">
                <label
                  :for="field.name"
                  class="text-primary mb- ml-2 text-[17px]"
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
                  class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
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

            <div class="flex bg-white flex-col">
              <label for="" class="text-primary text-[17px]">Recipients</label>

              <div class="drop-shadow-md mt-2">
                <input
                  type="number"
                  v-model="form.phone"
                  :class="
                    errorphone ? ' border-secondary' : '  border-primary '
                  "
                  @input="onInput"
                  class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]"
                  placeholder="Recipients"
                />
                <p
                  :class="errorphone ? 'flex' : 'hidden '"
                  class="e pl-5 text-red-700 text-[13px]"
                >
                  please enter correct phone
                </p>
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

<script>
export default {
  data() {
    return {
      transacPrev: "",
      loadingState: false,
      errorphone: "",
      form: {
        phone: "",
        amount: "",
        serviceID: "",
        network: "",
        TransactionCode: "",
      },
      formFields: [
        {
          name: "product",
          label: "Network",
          errorselection: false,
          message: "please select network",
          options: [
            { value: "network", text: "network" },
            { value: "mtn", text: "MTN" },
            { value: "GLO", text: "GLO" },
            { value: "airtime", text: "Airtime" },
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
        product: "network", // Set default network
        amount: 2000, // Set default data type
      },
      productOptions: {
        network: [{ value: 2000, text: "Select data Type" }],
        GLO: [
          { value: 2000, text: "Select data Type" },
          { value: 3000, text: "2.3GB - ₦910 - 1 Month" },
          { value: 4000, text: "3.75GB - ₦1,365 - 1 Month" },
          { value: 5000, text: "7GB - ₦2,375 - 1 Month" },
          { value: 6000, text: "5.25 - ₦1,820 - 1 Month" },
          { value: 7000, text: "9GB - ₦2,580 - 1 Month" },
          { value: 8000, text: "12GB - ₦3,800 - 1 Month" },
          { value: 9000, text: "Lasting GLO 200MB - ₦195 - 1 Month" },
        ],

        mtn: [
          { value: 2000, text: "Select data Type" },
          { value: 3000, text: "1GB CG - ₦260 - 1 Month" },
          { value: 4000, text: "2GB CG - ₦520 - 1 Month" },
          { value: 5000, text: "3GB CG - ₦780 - 1 Month" },
          { value: 6000, text: "5GB CG - ₦1,300 - 1 Month" },
          { value: 7000, text: "10GB CG - ₦2,600 - 1 Month" },
          { value: 8000, text: "500MB SME DATA - ₦110 - 1 Month" },
          { value: 9000, text: "1GB SME DATA - ₦220 - 1 Month" },
          { value: 10000, text: "2GB SME DATA - ₦441 - 1 Month" },
          { value: 11000, text: "Lasting GLO 1GB - ₦360 - 1 Month" },
          { value: 12000, text: "3GB SME DATA - ₦663 - 1 Month" },
          { value: 13000, text: "5GB SME DATA - ₦1,105 - 1 Month" },
          { value: 14000, text: "10GB SME DATA - ₦2,210 - 1 Month" },
        ],
        airtime: [
          { value: 2000, text: "Select data Type" },
          { value: 9000, text: "2GB AIRTEL CG - ₦615 - 1 Month" },
          { value: 5000, text: "5GB AIRTEL CG - ₦1,580 - 1 Month" },
          { value: 9000, text: "500MB AIRTEL CG - ₦200 - 1 Month" },
        ],

        ninemobile: [
          { value: 2000, text: "Select data Type" },
          { value: 9000, text: "1.5GB - ₦860 - 1 Month" },
          { value: 5000, text: "2GB - ₦1,032 - 1 Month" },
          { value: 9000, text: "15GB - ₦4,500 - 1 Month" },
        ],
      },
    };
  },
  methods: {
    getOptions(field) {
      if (field.name === "amount") {
        return this.productOptions[this.formValues.product] || [];
      }
      return field.options;
    },
    getSelectedOptionText(field) {
      if (field) {
        const selectedValue = this.formValues[field.name];
        const options = this.getOptions(field);
        const selectedOption = options.find(
          (option) => option.value === selectedValue
        );
        return selectedOption ? selectedOption.text.split(" - ") : [];
      }
      return [];
    },

    cancelTrans() {
      this.transacPrev = false;
    },

    resetErrors() {
      this.formFields[0].errorselection = false;
      this.formFields[1].errorselection = false;
      this.errorphone = false;
    },
    onInput() {
      this.resetErrors();
    },
    prevTrans() {
      this.loadingState = true;
      // Get the selected option text
      const phone = String(this.form.phone);
      const selectedOptionText = this.getSelectedOptionText(this.formFields[1]);
      const selectedOptionText1 = this.getSelectedOptionText(
        this.formFields[0]
      );
      const selectedOptionText2 = this.getSelectedOptionText(
        this.formFields[2]
      );
      //  console.log(selectedOptionText1[0])
      // console.log(selectedOptionText[0])
      if (selectedOptionText1[0] === "network") {
        this.formFields[0].errorselection = true;
        this.loadingState = false;
        return false;
      } else if (selectedOptionText[0] === "Select data Type") {
        this.formFields[1].errorselection = true;
        this.loadingState = false;
        console.log(selectedOptionText, selectedOptionText2);
        return false;
      } else if (!this.form.phone || phone.length < 10 || phone.length > 11) {
        this.errorphone = true;
        this.loadingState = false;
        console.log(selectedOptionText, selectedOptionText2);
        return false;
      } else if (this.form.phone.length < 10) {
        this.errorphone = true;
        this.loadingState = false;
        console.log(selectedOptionText, selectedOptionText2);
        return false;
      } else {
        this.form.amount = selectedOptionText[1].replace("₦", "");
        this.form.network = selectedOptionText1[0];
        this.form.serviceID = selectedOptionText[0];
        console.log(this.form.serviceID);
        console.log(this.form.amount, this.form.network);
        setTimeout(() => {
          this.transacPrev = true;
          this.loadingState = false;
        }, 7000);
      }

      // Convert form values and selected option text to JSON
    },
    async submitted() {},
  },

  watch: {
    email(value) {
      this.submit();
    },
  },
};
</script>