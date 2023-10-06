<template>
  <div class="bg-gray-100 h-fit ">
    <div>
      <dashbord class="w-full hiden"></dashbord>
      <div class="w-full h-[5.5rem] bg-secondary"></div>
      <div class="flex h-fit w-full">

        <div class="lg:w-full  md:w-1/2  border-2">

        
        </div>
        <div class="mt-10">
          <h1 class="flex text-2xl font-semibold">Fund History</h1>
        <div class="w bg-slate-400 h-96  lg:w-[800px] w-full sm:w-[400px] md:w-[600px]  md:mr-[3rem] border-x-primary mb-20  overflow-scroll  mt-  border-2">
       <table class="font-normal bg-white  text-sm">
                <tr>
                  <th>SN</th>
                  <th>Date/Time</th>
                  <th>Type</th>
                  <th>Desc</th>
                  <th>Recipient</th>
                  <th>Value</th>
                  <th>Amount</th>
                  <th>Wallet Bal</th>
                  <th>Status</th>
                </tr>
                <tr  v-for="item in transaction" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.date }}</td>
                  <td>{{ item.type }}</td>
                  <td>{{ item.des }}</td>
                  <td>{{ item.Recipient }}</td>
                  <td>{{ item.value }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.walletBal }}</td>
                  <td>{{ item.status }}</td>
                </tr>
              </table>
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
      transaction: [
        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 2,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

          {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

        {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 1,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
        {
          id: 2,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

          {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },

        {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },


        {
          id: 4,
          date: "23-03-2023",
          type: "Mtn Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Mtn Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },


        {
          id: 3,
          date: "23-03-2023",
          type: "Glo Airtime  ",
          des: "buy 70 airtime ",
          Recipient: "09134678754",
          value: "Glo Airtime",
          amount: "3000",
          walletBal: "1244",
          status: "success ",
        },
      ],
    };
  },
  methods: {},

  created() {
    console.log(this.transaction);
  },
};
</script>

<style >
table {
  font-family: arial, sans-serif;
  width: 1000px  ;

}

td,
th {
  border: 1px solid #000000;
  text-align: left;
  padding: 10px;
 
}
.over{
    overflow: hidden;
}

tr:nth-child(even) {
  background-color: #f8fff9;
}
</style>