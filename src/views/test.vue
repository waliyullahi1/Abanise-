<template>
  <div class="flex mt-10 gap-32">
        <div
          class="h-fit lg:w-1/5 md:w-1/6 w-0 border-2  sm:hidden  lg:mr-0 mr-0   hidden lg:block md:block"
        ></div>
        <div class=" container  ">
          <h1 class="text-2xl font-semibold mb-11">Transaction History</h1>
          <div class="w-full  border-2">
            <div class="overflow-scroll border-4 h-full  w-full  ">
            <div class="  shadows ld text-2xl shadow bg-white">
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

              <div class="flex gap-1">
                <img src="../assets/image/copy.svg" alt="" class="w-3" />
                <small
                  class="font-semibold text- text-sm gap-1 flex text-gray-800"
                  >abaniseedu.com
                  <img src="../assets/image/copy.svg" alt="" class="w-3" />2023
                </small>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
</template>