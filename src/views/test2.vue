<template>
  <form @submit.prevent="submitForm">
    <div v-for="(field, index) in formFields" :key="index">
      <label :for="field.name">{{ field.label }}</label>
      <select :id="field.name" v-model="formValues[field.name]">
        <option v-for="(option, index) in getOptions(field)" :key="index" :value="option.value">{{ option.text }}</option>
      </select>
      <h1>{{ getSelectedOptionText(field) }}</h1>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      formFields: [
        {
          name: "product",
          label: "Network",
          options: [
            { value: "mtn", text: "MTN" },
            { value: "GLO", text: "GLO" },
            { value: "airtime", text: "Airtime" },
            { value: "ninemobile", text: "9mobile" },
          ],
        },
        { name: "amount", label: "Amount" },
      ],
      formValues: {},
      productOptions: {
        GLO: [
          { value: 2000, text: "1GB - ₦475 - 1 Month" },
          { value: 3000, text: "2.3GB - ₦910 - 1 Month" },
          { value: 4000, text: "3.75GB - ₦1,365 - 1 Month" },
          { value: 5000, text: "7GB - ₦2,375 - 1 Month" },
          { value: 6000, text: "5.25 - ₦1,820 - 1 Month" },
          { value: 7000, text: "9GB - ₦2,580 - 1 Month" },
          { value: 8000, text: "12GB - ₦3,800 - 1 Month" },
          { value: 9000, text: "Lasting GLO 200MB - ₦195 - 1 Month" },
          { value: 10000, text: "Lasting GLO 500MB - ₦200 - 1 Month" },
          { value: 11000, text: "Lasting GLO 1GB - ₦360 - 1 Month" },
          { value: 12000, text: "12GB - ₦3,800 - 1 Month" },
          { value: 13000, text: "Lasting GLO 2GB - ₦705 - 1 Month" },
          { value: 14000, text: "Lasting GLO 3GB - ₦1,050 - 1 Month" },
          { value: 15000, text: "Lasting GLO 5GB - ₦1,750 - 1 Month" },
           { value: 16000, text: "Lasting GLO 10GB - ₦3,400 - 1 Month" },
        ],

         mtn: [
          { value: 2000, text: "500MB CG - ₦130 - 1 Month" },
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
          { value: 5000, text: "1GB AIRTEL CG -₦310-1 Month" },
          { value: 9000, text: "2GB AIRTEL CG - ₦615 - 1 Month" },
          { value: 5000, text: "5GB AIRTEL CG - ₦1,580 - 1 Month" },
          { value: 9000, text: "500MB AIRTEL CG - ₦200 - 1 Month" },
        ],

        ninemobile : [
          { value: 5000, text: "500MB - ₦430 - 1 Month" },
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
    const selectedValue = this.formValues[field.name];
    const options = this.getOptions(field);
    const selectedOption = options.find(option => option.value === selectedValue);
    return selectedOption ? selectedOption.text.split(' - ') : [];
  },


  async submitForm() {
  // Get the selected option text
  const selectedOptionText = this.getSelectedOptionText(this.formFields[1]); // Assuming 'amount' is the second field
   const selectedOptionText1 = this.getSelectedOptionText(this.formFields[0]); // Assuming 'amount' is the second field
  const selectedOptionText2 = this.getSelectedOptionText(this.formFields[2]); // Assuming 'amount' is the second field
  
   console.log(selectedOptionText, selectedOptionText1, selectedOptionText2)
  // Convert form values and selected option text to JSON
  const bodyString = JSON.stringify({
    product: this.formValues.product,
    amount: this.formValues.amount,
    selectedOptionText: selectedOptionText
  });

  }}
}
</script>
