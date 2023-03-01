<template>
   
 <div class="overflow-y-hidden">
  
   <Header class="fixed z-50 top-0"></Header>
   
    <div class="w-full h-10"></div>
    <section >
    <div class="  image w-full border h-[30rem] overflow-hidden ">
    <div class="container flex flex-col gap-5 justify-center h-full mx-auto "> 
        <p class= "  font-semibold text-7xl text-white font-mermaid text-[Mermaid Swash Caps, Confetti Stream]">Buy scratch <span class="text-secondary">Card</span></p>
        <p class="text-xl text-white ">Get instant accesss to scratch card PINs for WAEC,  NECO  and NABTEB</p>
        
    </div>
    </div>
    </section>
    <section class="container  my-10  mt-10 mx-auto">
        <marquee behavior="scroll" direction="left" scrollamount="" class="w-full text-black "><span>this is text 43535467586789782433453464575678562353346</span></marquee>
      <div class="  flex flex-col justify-center gap-5 items-center ">
        <p class="text-3xl font-bold text">CARDS PRODUCT</p>
        <p class="text-xl font-normal ">CLICK ON ANY CARD BELOW TO BUY THE CARD PIN INSTANTLY </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-10 px-10 ">
            <div v-for="item in item" :key="item.id" class=" group shadows border-primary w-full overflow-hidden   flex flex-col gap-3 rounded-[2rem]  ">
                <div class="w-full rounded-[2rem] pt-3 px-3 overflow-hidden ">
                   <div class="overflow-hidden rounded-[2rem] "> <img v-bind:src="item.image" /></div>
                   
                </div>
                <div class=" flex py-3 px-3 flex-col gap-3 border-primary transform duration-300">
                    <div class=" group-hover:w-full w-1 duration-500 h-1 bg-primary"></div>
                    <p class="text-xl "><span>{{item.card}}</span> {{item.header}} <span class="tex- text-base font-semibold">({{item.condition}})</span></p>
                    <div class="flex justify-between">
                    <p class="text-xl font-semibold">Price</p> 
                    <p class="font-semibold font-lg ">₦{{ item.price }}</p>
                    </div>
                    <p class="flex justify-between font-semibold font-lg ">Availability(status) <span class="tex text-green-600 ">Yes</span></p>
                </div>
                 <router-link target="_blank" :to="`/waec/${item.id}`"><PrimaryBtn class="w-full text-center font-semibold">Buy now</PrimaryBtn></router-link>
            </div>
            
        </div>
      </div>
    </section>
    <section class="container mx-auto py-5 ">
     <div class="flex flex-col gap-5 justify-center images h-96 items-center">
     <p class="text-3xl justify-center font-semibold text-white  ">ABOUT US</p>
     <p class="w-2/3 font-normal text-center text-white"> We are the best source. With a platform that is trusted by Paystack and Flutterwave, you can shop online with complete confidence and no worries. Our pleasure is in seeing you happy. We take great pride in providing top-notch service, and we have no doubt that after utilizing our service for the first time, you'll make our website your homepage. </p>
     </div>
    </section>
    <section class="container mx-auto my-10">
        <h1 class="text-5xl font-semibold ">Why Choose <span class="text-primary font-normal"></span> </h1>
        <div>

        </div>
    </section>
    <Footer></Footer>
 </div>
 </template>


<script>

    import waecImg from '@/assets/image/waeccard.jpg';
    import neco from '@/assets/image/neco.jpg';
    import nabteb from  '@/assets/image/nabteb1.jpg';
   
    export default {
        data(){
            return{
                item:[
                    {
                        id: 1,
                       
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
                        image: waecImg,
                        price:'1500',
                        card:'GCEWaec',
                        header:'Pin card ',
                        condition:'For registration'
                    },

                   
                    {
                        id: 5,
                        image: neco,
                        price:'1500',
                        card:'Waec',
                        header:'Result Verification ',
                        condition:'For registration'
                    }
                ]
            }
        }
    }
</script>

<style>






    

    .animatio {
      
        
        animation-duration: 2s;
        animation-name: waliu;
        
    }

    @keyframes waliu {
        from{ 
            opacity: 0;
            transform: rotate(90deg);
            transform: translateY(300px);
            color: aqua;
        }

        to{
        
        opacity: 1;
         transform: rotate(0deg);
         transform: translateY(0px);
         color: black;
        }
    }

    .images{
        background-image: url(../assets/image/hero12.jpg);
        background-position:right;
        background-repeat: no-repeat;
        background-size:cover;
    }
    .image{
        background-image: url(../assets/image/hero5.jpg);
        background-position:right;
        background-repeat: no-repeat;
        background-size:cover;
    }

     .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
</style>