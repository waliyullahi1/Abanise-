<template>
  <div class=" bg-gray-100">
    <div>
      <dashbord class="w-full"></dashbord>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex mt-10 gap-10">
        <div class="h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-1/5 ml-[2rem]"></div>
        <div class="w-full md: md:w-1/2 sm:w-2/3 lg:max-w-md h-fit mx-4 shadows rounded-[1rem] ld text-2xl shadow bg-white" >
          <form @submit.prevent="submitForm" action="" class="flex flex-col gap-5 h-fit p-8 text-xl font-semild">
            
            <div v-for="(field, index) in formFields" :key="index" >
              <div class="flex bg-white flex-col">
              <label  :for="field.name" class="text-primary mb- ml-2 text-[17px]">{{ field.label }}</label>
              <select :id="field.name" v-model="formValues[field.name]" class="w-full font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]" >
                  <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.value">{{ option.text }}</option>
              </select>
              <p :class="field.errorselection ? 'flex':'hidden '" class="  pl-5 text-red-700 text-[14px]">{{ field.message }}</p>
               
             </div>
            </div>

              <div class="flex bg-white flex-col">
                <label for="" class="text-primary text-[17px]">Recipients</label>
                
                <div class="flex drop-shadow-md mt-2">
                  <input type="number" :class="errorname ? ' border-secondary' : '  border-primary '" @input="onInput" class="w-full px-2 font-seibold rounded-[.2rem] ml-2 text-[17px] outline-none focus:border-primary border-gray-100 border-2 py-[.5rem]" placeholder="Recipients"/>
                </div>
             </div>
             <Button class="mt-" :loading="loadingState"  @click="submitForm()" loadingText="Authenticating">Sign up</Button>
             <button type="button " @click="submitting()">button</button>
          </form>
          
          <div class="flex gap-1">
            <img src="../assets/image/copy.svg" alt="" class="w-3" />
            <small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com
              <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
            </small>
          </div>
        </div>
      </div>

      <div class=" ">
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

              <p
                class="text-secondary cursor-pointer ml-6 mt-5"
                @click="transPrev()"
              >
                Cancel
              </p>

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
    <div>
      <form @submit.prevent="submitForm">
        <div v-for="(field, index) in formFields" :key="index">
          <label :for="field.name">{{ field.label }}</label>
          <select :id="field.name" v-model="formValues[field.name]">
            <option
              v-for="(option, index) in getOptions(field)"
              :key="index"
              :value="option.value"
            >
              {{ option.text }}
            </option>
          </select>

          <div
            v-for="(part, index) in getSelectedOptionText(field)"
            :key="index"
          >
            {{ part }}
          </div>
          <h1>{{ getSelectedOptionText(field) }}</h1>
          <input type="text" v-model="form.phone" placeholder="phone" />
        </div>
        <button type="submit">Submit</button>
      </form>

      <button @click="submitting" type="button">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        amount: "",
        phone: "",
        serviceID: "",
      },
      formFields: [
        {
          name: "products",
          label: "Network",
          errorselection:false,
          message: 'please select network',
          options: [
            { value: "network", text: "Network" },
            { value: "mtn", text: "MTN" },
            { value: "GLO", text: "GLO" },
            { value: "airtel", text: "Airtel" },
            { value: "ninemobile", text: "9mobile" },
          ],
        },
        { name: "amount", label: "Amount", errorselection: false, message: 'please select your your data' },
      ],
      formValues: {
      product: "network", // Set default network
      amount: 2000, // Set default data type
    },
     
      productOptions: {
         network: [{ value: 2000, text: "Select data Type" },],
        GLO: [
          { value: 2000, text: "Select data Type" },
          { value: 3000, text: "2.3GB - ₦910 - 1 Month" },
          { value: 4000, text: "3.75GB - ₦1,365 - 1 Month" },

          { value: 16000, text: "Select data Type" },
        ],

        mtn: [
          { value: 2000, text: "Select data Type" },
             { value: 4000, text: "3.75GB - ₦1,365 - 1 Month" }
        ],
        airtel: [
          { value: 2000, text: "Select data Type" }
        ],

        ninemobile: [
          { value: 5000, text: "Select data Type" }
        ],
      },
    };
  },
  methods: {
     resetErrors() {
   this.erroremail1 = false;
    this.errorname = false;
    this.errorphone = false;
    this.erroremail = false;
    this.errorpassword = false;
    this.errorconfirmpassword = false;
    this.errortransactionCode = false;
  },

    getOptions(field) {
      if (field.name === "amount") {
        return this.productOptions[this.formValues.product] || [];
      }
      return field.options;
    },
    getSelectedOptionText(field) {
      const selectedValue = this.formValues[field.name];
      const options = this.getOptions(field);
      const selectedOption = options.find(
        (option) => option.value === selectedValue
      );
      return selectedOption ? selectedOption.text.split(" - ") : [] ;
    },

    async submitForm() {
      // Get the selected option text
      const selectedOptionTextProduct = this.getSelectedOptionText(
        this.formFields[0]
      ); // Assuming 'product' is the first field
      const selectedOptionTextAmount = this.getSelectedOptionText(
        this.formFields[1]
      ); // Assuming 'amount' is the second field
      console.log(selectedOptionTextAmount[0]);
      console.log(selectedOptionTextAmount[0]);
       this.formFields[0].errorselection = true
       if (selectedOptionTextAmount[1] && selectedOptionTextAmount[1].includes("₦")) {
         this.form.amount = selectedOptionTextAmount[1].replace("₦", "");
     
       }
     
      this.form.serviceID = selectedOptionTextAmount[0];

      // Log the selected option text
      console.log(
        "Selected option text for product:",
        selectedOptionTextProduct
      );
      console.log("Selected option text for amount:", selectedOptionTextAmount); // Convert form values and selected option text to JSON
      // const bodyString = JSON.stringify({
      //   product: this.formValues.product,
      //   amount: this.formValues.amount,
      //   selectedOptionText: selectedOptionText
      // });
    },

    submitting() {
      
      this.formFields[0].errorselection = true
    },
  },
};
</script>