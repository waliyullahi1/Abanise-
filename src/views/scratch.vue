<template>
  <div class="text-[poppins]">
    <dashbord class="t"></dashbord>
    <div class="h-[7rem] w-full"></div>
    <div class="flex gap-10">
      <div
        class="h-fit lg:w-1/3 sm:w-[2rem] md:w-1/4 hidden lg:block md:block ml-[2rem]"
      ></div>
      <div
        class="w-full h-fit shadows rounded-[1rem] py-5 text-semibold text-2xl shadow bg-white"
      >
        <div
          class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-3 lg:gap-6 gap-10 px-8 lg:px-5"
        >
          <div
            v-for="(item, index) in item"
            :key="item.id"
            class="group shadows border-primary w-full overflow-hidden h-fit flex flex-col gap-3 rounded-[2rem]"
          >
            <div class="w-full rounded-[2rem] pt-3 px-3 overflow-hidden">
              <div class="overflow-hidden rounded-[2rem]">
                <img v-bind:src="item.image" />
              </div>
            </div>
            <div
              class="flex py-3 px-3 flex-col gap-3 border-primary transform duration-300"
            >
              <div
                class="group-hover:w-full w-1 duration-500 h-1 bg-primary"
              ></div>
              <p class="text-sm">
                <span>{{ item.card }}</span> {{ item.header }}
                <span class="tex- text-base font-semibold"
                  >({{ item.condition }})</span
                >
              </p>
              <div class="flex justify-between">
                <p class="text-[15px] font-semibold">Price</p>
                <p class="font-semibold text-[15px]">₦{{ item.price }}</p>
              </div>
              <p class="flex justify-between font-semibold text-[15px]">
                Availability(status)
                <span class="tex text-green-600 text-[15px]">Yes</span>
              </p>
            </div>

            <Button
              @click="updateNextItemName(index)"
              :loading="item.loadingState1"
              loadingText="Authenticating"
              class="w-full text-center text- text-[15px] font-semibold"
              >Buy now</Button
            >
          </div>
        </div>

        <div>
          <div
            :class="transacPrev ? 'w-full' : 'w-0'"
            class="fixed overflow-auto top-0 right-0 w-full bottom-[100rem] bg-black opacity-50 h-screen z-10"
          ></div>
          <div class="w-full h-fit">
            <div class="mx-">
              <div
                :class="transacPrev ? 'bottom-[15rem]' : 'bottom-[60rem]'"
                class="duration-700 fixed ease-in-out z-10 w-full h-screen flex pt-32 md:gap-10 gap-0 fixd"
              >
                <div
                  class="h-fit lg:w-0 sm:w-0 sm:hidden md:block md:w-0 md:ml-[5rem] ml-0"
                ></div>
                <div
                  class="md: md:w-1/2 sm:w-2/3 lg:max-w-md w-full mr-10 shadows rounded-[1rem] ld text-2xl shadow bg-white py-5 px-5 h-fit"
                >
                  <h1
                    class="text-[15px] text-center uppercase font-medium leading-tight text-primary"
                  >
                    Please enter the correct email, so that you can also receive
                    your pin in your email
                  </h1>
                  <form action="" class=" ">
                    <div>
                      <h1
                        class="text-[19px] font-medium text-secondary text-center"
                      >
                        {{ cardName }} Scratch Card
                      </h1>
                    </div>
                    <div class="sm:flex block gap-5 items-center">
                      <Input
                        label="Exam Type "
                        :type="text"
                        placeholder="Enter Quantity"
                        :error="false"
                        v-model:inputValue="form.name"
                        inputValue=""
                        disabled="disabled"
                        min="1"
                      ></Input>
                      <Input
                        label="Amount"
                        type="text"
                        placeholder="Enter your email address"
                        :error="false"
                        :inputValue="form.price"
                        disabled="disabled"
                        class="mt-1 -300"
                      ></Input>
                    </div>

                    <div class="sm:flex block gap-5">
                      <div class="w-full">
                        <Input
                          label="Enter Quantity"
                          type="number"
                          placeholder="Enter Quantity"
                          :error="false"
                          v-model:inputValue="form.quantity"
                          :inputValue="input"
                          :min="Number(1)"
                        ></Input>
                        <p
                          :class="errorquantity ? 'flex' : 'hidden '"
                          class="absolu pl-5 text-red-700 text-[13px]"
                        >
                          please enter correct quantity
                        </p>
                      </div>
                      <div class="w-full">
                        <h1 class="mt-1 font-semibold text-[15px]">Total</h1>
                        <div
                          class="-2 w-full h-8 px-5 bg-gray-300 mt-1 text-[15px] rounded-lg"
                        >
                          ₦{{ this.form.quantity * this.form.price }}
                        </div>
                      </div>
                    </div>

                    <Input
                      label="Recipient email"
                      type="text"
                      :error="erroremail1"
                      v-model:inputValue="form.email"
                      class="mt-1 bg-g-200"
                      placeholder="Recipient email"
                    ></Input>
                    <p
                      :class="erroremail1 ? 'flex' : 'hidden '"
                      class="absolu pl-5 text-red-700 text-[13px]"
                    >
                      please enter correct email
                    </p>

                    <Input
                      label="Transaction code"
                      type="text"
                      :error="errortransactionCode"
                      v-model:inputValue="form.transactionpin"
                      class="mt-1 mb-3 bg-g-200"
                      placeholder="Your Number"
                    ></Input>
                    <p
                      :class="errortransactionCode ? 'flex' : 'hidden '"
                      class="absolu pl-5 text-red-700 text-[13px]"
                    >
                      please enter correct email
                    </p>

                    <p
                      class="text-secondary cursor-pointer ml-6 text-[15px]"
                      @click="cancelTrans()"
                    >
                      Cancel
                    </p>
                    <Button
                      :loading="loadingState2"
                      @click="submit()"
                      loadingText="wait please...."
                    >
                      Buy now</Button
                    >
                    <Button
                      :loading="loadingState2"
                      @click="generatePDF()"
                      loadingText="wait please...."
                    >
                      pdf</Button
                    >
                  </form>

                  <vue3-html2pdf
                    :show-layout="false"
                    :float-layout="true"
                    :enable-download="true"
                    :preview-modal="true"
                    :paginate-elements-by-height="1400"
                    filename="Recelpt"
                    :pdf-quality="2"
                    :manual-pagination="true"
                    pdf-format="a4"
                    pdf-orientation="portrait"
                    pdf-content-width="800px"
                    @progress="onProgress($event)"
                    @hasStartedGeneration="hasStartedGeneration()"
                    @hasGenerated="hasGenerated($event)"
                    ref="html2Pdf"
                  >
                    <template #pdf-content>
                      <section class=" container mx-auto">
         <div >
            <div class=" mx-10">
               <h1 class=" font-semibold text-2xl text-center">abaniseedu.com</h1>
               <p class="text-[14px] font-medium py-1">YOUR TRANSACTION DETAILS ARE AS FOLLOWS:</p>
               <p class=" text-green-500 py-5 rounded-md text-center bg-green-100">Your Successful purchased  Pin</p>
               <div class="text-[16px] bg-white  ">
              
              <div class="mt-10 w-full border  mb-3">
               <ul class=" text-[13px]  font-medium" v-for="item in recelpt" :key="item.id" >
                <li class="flex justify-center   border-b-0     px-3 gap-6  ">
                  <div class=" p-0 sm:p-3 w-1/3">
                      <h1 class=" text-gray-600">{{item.headers}}</h1>
                  </div>

                  <div class="w-full  p-3  border-l  border-b">
                    <h1>{{item.details}}</h1>
                  </div>
                </li>
               </ul>
                  <div class="w-full border h-fit">
                    <div   v-for="item in pin" :key="item.id"  class=" gap-10 items-center px-5  border-b tracking-  backdrop-opacity-100  font-semibold bg- text-[13px]  placehold-center justify-between flex ">
                
                        <p class=" border-r py-3 pr-2 ">{{item.name}}</p>
                        <p class=" border-r py-3 pr-2  text-left">{{item.pin}}</p>
                        <p class="  py-3 ">{{ item.seriaNo}} </p>
                    
                </div>
                  </div>
              </div>
               <div class="flex gap-5 justify-center mb-9 mt-9">
                   <Button :loading="loadingState" class=" w-fit h-fit px-10" loadingText="please wait...."> print</Button>
                   <Button :loading="loadingState" class=" w-fit px-10" loadingText="please wait...."> save</Button>

                 </div>
              
            </div>
            </div>
         </div>
       </section>
                    </template>
                  </vue3-html2pdf>
                  <button @click="generateReport()">Delleor</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <section slot="pdf-content" class="container mx-auto">
            <div>
              <div class="mx-10">
                <h1 class="font-semibold text-2xl text-center">
                  abaniseedu.com
                </h1>
                <p class="text-[14px] font-medium py-1">
                  YOUR TRANSACTION DETAILS ARE AS FOLLOWS:
                </p>
                <p
                  class="text-green-500 py-5 rounded-md text-center bg-green-100"
                >
                  Your Successful purchased {{}}
                </p>
                <div class="text-[16px] bg-white">
                  <div class="mt-10 w-full border mb-3">
                    <ul
                      class="text-[13px] font-medium"
                      v-for="item in itemss"
                      :key="item.id"
                    >
                      <li
                        class="sm:flex justify-center block sm:border-b-0 border-b sm:py-0 py-3 px-3 sm:gap-6 gap-2"
                      >
                        <div class="p-0 sm:p-3 w-1/3">
                          <h1 class="text-gray-600">{{ item.headers }}</h1>
                        </div>

                        <div
                          class="w-full p-0 sm:p-3 border-l-0 sm:border-l border-b-0 sm:border-b"
                        >
                          <h1>{{ item.details }}</h1>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex gap-5 justify-center mb-9 mt-9">
                    <button @click="printDownload">Print Download</button>
                    <Download v-show="false" ref="DownloadComp" />
                    <Button
                      @click="generatePdf()"
                      :loading="loadingState"
                      class="hidden w-fit h-fit px-10"
                      loadingText="please wait...."
                    >
                      print</Button
                    >
                    <Button
                      :loading="loadingState"
                      class="w-fit px-10"
                      loadingText="please wait...."
                    >
                      save</Button
                    >
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div class="flex gap-1">
          <img src="../assets/image/copy.svg" alt="" class="w-3" /><small
            class="font-semibold text- text-sm gap-1 flex text-gray-800"
            >abaniseedu.com
            <img src="../assets/image/copy.svg" alt="" class="w-3" />2023</small
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import waecImg from "@/assets/image/waeccard.jpg";
// import VueHtml2pdf from 'vue3-html2pdf'
import neco from "@/assets/image/neco.jpg";
import vwaec from "../assets/image/vgce.jpg";
import nabteb from "@/assets/image/nabteb1.jpg";
import gcewaec from "../assets/image/gce.jpg";
import nabtebgce from "../assets/image/pinnabteb.jpg";
import Vue3Html2pdf from "vue3-html2pdf";
export default {
  props: {
    reference: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      recelpt: [
        {
          headers: "Service Name",
          details: "",
        },

        {
          headers: "quantity",
          details: "",
        },

       
       
        {
          headers: "Amount",
          details: "",
        },

        {
          headers: "Status",
          details: "Successful ",
        },

        {
          headers: "Date",
          details: "",
        },
      ],

      pin: [
        {
          id: 1,
          seria: "WRN26483681232222222222222",
          name: "waec",
          pin: "12242325234534",
        },

        {
          id: 2,
          seria: "WRN26483681232222222222222",
          name: "waec",
          pin: "34242325234534",
        },

        {
          id: 3,
          seria: "WRN26483681232222222222222",
          name: "waec",
          pin: "74242325234534",
        },
      ],
      text: "1",
      input: "1",
      loadingState2: false,
      transacPrev: false,
      track: true,
      erroremail1: false,
      errortransactionCode: false,
      cardlink: "",
      numm: Number(1),
      cardName: "",
      form: {
        name: "",
        email: "",
        semiprice: "",
        quantity: 1,
        price: Number,
        total: "",
        transactionpin: "",
      },

      item: [
        {
          id: 1,
          image: waecImg,
          price: "3500",
          card: "WAEC",
          header: "Scratch card ",
          condition: "result checker",
          loadingState1: false,
        },

        {
          id: 2,
          image: neco,
          price: "1000",
          card: "Neco",
          header: "Scratch card ",
          condition: "result checker",
          loadingState1: false,
        },

        {
          id: 3,
          image: nabteb,
          price: "1000",
          card: "Nabteb",
          header: "Scratch card ",
          condition: "result checker",
          loadingState1: false,
        },

        {
          id: 4,
          image: gcewaec,
          price: "1500",
          card: "GCEWaec",
          header: "Pin card ",
          condition: "For registration",
          loadingState1: false,
        },

        {
          id: 5,
          image: nabtebgce,
          price: "1500",
          card: "GCENabteb",
          header: "pin ",
          condition: "For registration",
          loadingState1: false,
        },

        {
          id: 6,
          image: vwaec,
          price: "1500",
          card: "Waec",
          header: "Result Verification ",
          condition: "",
        },
      ],
    };
  },

  methods: {
    updateNextItemName(index) {
      if (index < this.item.length - 1) {
        this.form.name = this.item[index].card;
        this.form.price = this.item[index].price;
        this.item[index].loadingState1 = true;
      } else {
        this.form.name = "11";
        this.form.price = "11";
      }
      console.log(this.form.name, this.form.price, this.form.total);
      setTimeout(() => {
        this.transacPrev = true;
        this.item[index].loadingState1 = false;
      }, 500);
    },

    cancelTrans() {
      this.transacPrev = false;
    },
    resetErrors() {
      (this.errortransactionCode = false),
        (this.erroremail1 = false),
        (this.errorphone = false);
    },
    onInput() {
      this.resetErrors();
    },
    async submit() {

      this.recelpt[0].details = this.form.name,
       this.recelpt[1].details = this.form.quantity,
            this.recelpt[2].details = `₦${this.form.quantity * this.form.price}`,
             this.recelpt[4].details = 'rrrrrrrrrrr',
      console.log(this.form.quantity * this.form.price);
            this.$refs.html2Pdf.generatePdf();

      // if (!this.form.quantity) {
      //   this.errorquantity = true;
      //   this.loadingState2 = false;
      // } else if (!this.form.email) {
      //   this.erroremail1 = true;
      //   this.loadingState2 = false;
      //   return false;
      // } else if (!this.form.transactionpin) {
      //   this.errortransactionCode = true;
      //   this.loadingState2 = false;
      //   return false;
      // } else {
      //   this.loadingState2 = false;
      //   try {
      //     this.loadingState = false;
      //     const response = await fetch ("http://localhost:3500/card/sell", {
      //       method: "POST",
      //       headers: { "Content-Type": "application/json" },
      //       credentials: "include",
      //       body: JSON.stringify({
      //         examType: this.form.name,
      //         numCodes: this.form.quantity,
      //         amount: this.form.quantity * this.form.price,
      //         TransactionCode: this.form.transactionpin,
      //         email: this.form.email,
      //       }),
      //     });

      //     if (!response.ok) {
      //       this.loadingState = false;
      //       const errorData = await response.json();
      //       console.log(errorData.message);
      //       this.erromessage = errorData.message;
      //       throw new Error(errorData.message);
      //     }
      //     this.loadingState = false;
      //     const data = await response.json();
      //     this.message = data.success;
      //     console.log("Success:", data);

      //     //information  to receipt 
      //     this.recelpt[0].details = this.form.name,
      //      this.recelpt[1].details = this.form.quantity,
      //       this.recelpt[2].details = this.form.amount,
      //        this.recelpt[4].details = 'rrrrrrrrrrr',
      //         this.pin = data,
              
              
      //     localStorage.setItem("newArray", JSON.stringify(data));
      //     setTimeout(() => {
      //       this.$router.push({ name: "pagesucess" });
      //       this.loadingState = false;
      //     }, 50);
          



      //   } catch (error) {
      //     console.log(error);
      //     this.loadingState = false;
      //   }
      // }
    },

    generateReport() {
      this.$refs.html2Pdf.generatePdf();
    },
  },

  components: {
    Vue3Html2pdf,
  },
};
</script>

<style>
</style>