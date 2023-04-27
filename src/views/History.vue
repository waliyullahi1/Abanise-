<template>
 
  <div>
    <dashbord class=" t "></dashbord>
    <div class="  h-[7rem] w-full  "></div>
     <div  class="flex  gap-10 ">
      <div class="  h-fit lg:w-1/3 sm:w-[2rem] sm:block hidden lg:block md:block md:w-[5rem]  ml-[2rem] "></div>
      <div>
        
      </div>
        <!-- <div class="w-full w-fit h-fit shadows rounded-[1rem] py-5 px-5 text-semibold text-2xl shadow bg-white ">
           <div class="grid md:grid-cols-2  sm:grid-cols-2  grid-cols-1 md:gap-10 lg:gap-32 gap-10 px-10 ">
            <div v-for="item in item" :key="item.id" class=" group shadows border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]" >
                <div class="w-full rounded-[2rem] pt-3 px-3 overflow-hidden ">
                   <div class="overflow-hidden rounded-[2rem] "> <img v-bind:src="item.image" /></div>
                   
                </div>
                <div class=" flex py-3 px-3 flex-col gap-3 border-primary transform duration-300">
                    <div class=" group-hover:w-full w-1 duration-500 h-1 bg-primary"></div>
                    <p class="text-sm "><span>{{item.card}}</span> {{item.header}} <span class="tex- text-base font-semibold">({{item.condition}})</span></p>
                    <div class="flex justify-between">
                    <p class=" md:text-xl text-sm font-semibold">Price</p> 
                    <p class="font-semibold font-lg ">₦{{item.price}}</p>
                    </div>
                    <p class="flex justify-between text-sm lg:text-xl font-semibold font-lg ">Availability(status) <span class="tex text-green-600 ">Yes</span></p>
                </div>
                 <router-link target="_blank" :to="`/card/${item.id}`"><PrimaryBtn class="w-full text-center text- font-semibold">Buy now</PrimaryBtn></router-link>
            </div>
            
        </div>
           
        <div class="flex gap-1"> <img src="../assets/image/copy.svg" alt="" class="w-3"><small class="font-semibold text- text-sm gap-1 flex text-gray-800">abaniseedu.com <img src="../assets/image/copy.svg" alt="" class="w-3">2023</small></div>
        </div> -->
    </div>
  </div>
  <div>

  </div>
</template>

<script>

 import waecImg from '@/assets/image/waeccard.jpg';
    import neco from '@/assets/image/neco.jpg';
     import vwaec from '../assets/image/vgce.jpg'
    import nabteb from  '@/assets/image/nabteb1.jpg';
   import gcewaec from  '../assets/image/gce.jpg'
   import nabtebgce from '../assets/image/pinnabteb.jpg'
 export default {
    data(){
            return{
                track: true,
                item:[
                    {
                        id:1,
                        image:waecImg ,
                        price:'3500',
                        card:'Waec',
                        header:'Scratch card ',
                        condition:'result checker'
                    },

                    {
                        id: 2,
                        image: neco,
                        price:'1000',
                        card:'Neco',
                        header:'Scratch card ',
                        condition:'result checker'
                    },

                    {
                        id: 3,
                        image: nabteb,
                        price:'1000',
                        card:'Nabteb',
                        header:'Scratch card ',
                        condition:'result checker'
                    },


                      {
                        id: 4,
                        image: gcewaec,
                        price:'1500',
                        card:'GCEWaec',
                        header:'Pin card ',
                        condition:'For registration'
                    },

                   
                    {
                        id: 5,
                        image: nabtebgce,
                        price:'1500',
                        card:'GCENabteb',
                        header:'pin ',
                        condition:'For registration'
                    },

                    {
                        id:6,
                        image: vwaec,
                        price:'1500',
                        card:'Waec',
                        header:'Result Verification ',
                        condition:''
                    }
                ]
            }
        },

    components:{
         
    }
 }
</script>

<style>

</style>