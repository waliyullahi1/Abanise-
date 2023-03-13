<template>
   
 <div class="overflow-y-hidden">
  
   <Header class="fixed z-40 top-0"></Header>
   
    <div class="w-full h-10"></div>
    <section  class=" " >
    <div class=" image sticky top-0 w-full h-[30rem] md:h-[40rem]   overflow-hidden ">
    <div  class="container   flex flex-col gap-5 px-4 justify-center h-full mx-auto "> 
        <p class= "  font-semibold text-5xl  md:text-[7rem] text-white font-mermaid text-[Mermaid Swash Caps, Confetti Stream]">Buy scratch <span class="text-secondary">Card</span></p>
        <p class="text-xl text-white ">Get instant accesss to scratch card PINs for WAEC,  NECO  and NABTEB</p>
        <div class="flex gap-5 mt-8 items-center">
            <router-link  to="/login"><p class="flex items-center hover:bg-primary  gap-3 border py-2 px-2 w-fit opacity-60 text-2xl text-white"> <img src="@/assets/image/sign.svg" class="w-10" alt=""> login in</p></router-link>
            <p><router-link  to="/register" class="text-2xl text-white hover:text-secondary py-2 px-2 border-l-2 " >sign up</router-link></p>
            
        </div>
         <p class= "font-semibold text-7xl text-white hidden font-mem]"> BUY ONLINE REGISTRATION CARD PIN AUTOMATICINSTANTLY DELIVERY</p>
    </div>
    </div>
    <div class="w-full bg-primary ">
        <div class="grid mx-auto px-4  container md:max-w-full lg:max-w-full justify-between md:grid-cols-4 grid-cols-2 gap-10 py-10 w-full h-fit">
        <div class=" text-white  border-l-2 pl-3 ">
            <h1 class="font-bold text-[20px] mb-2  text-white">Discounted Prices</h1>
            <p class="text-[17px] font leading-relaxed ">Buy Waec , Neco, Nabteb resultchecker and Waec pin, Nabteb pin at highly subsized prices</p>
        </div>

         <div class=" text-white  border-l-2 pl-3 ">
            <h1 class="font-bold text-[20px] mb-2  text-white">Instant Delivery</h1>
            <p class="text-[17px] font leading-relaxed ">Users receive Product atmost 3 minutes after Purchase</p>
        </div>

         <div class=" text-white border-l-2 pl-3  ">
            <h1 class="font-bold text-[20px] mb-2  text-white">24/7 Customer Support</h1>
            <p class="text-[17px] font leading-relaxed ">Our customer service agent are always available to respond to any issues that you might have</p>
        </div>

         <div class=" text-white  border-l-2 pl-3 ">
            <h1 class="font-bold text-[20px] mb-2  text-white">User-Friendly Experience</h1>
            <p class="text-[17px] font leading-relaxed ">Top notch user Interface that give you a smooth and satisfying experience</p>
        </div>
    </div>
    </div>
    </section>
    <section class="container  my-10  mt-10 mx-auto">
        <marquee behavior="scroll" direction="left" scrollamount="" class=" text-xl w-full font-bold text-primary "><span>If you want to process your admission to any university or polythenic kindly call this whatsapp number 07068393706</span></marquee>
      <div class="  flex flex-col justify-cen
      ter gap-5 items-center ">
        <p class="text-3xl font-bold text">CARDS PRODUCT</p>
        <p class="md:text-xl text-sm  font-normal ">CLICK ON ANY CARD BELOW TO BUY THE CARD PIN INSTANTLY </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-20 px-10 ">
            <div v-for="item in item" :key="item.id" class=" group shadows border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]" >
                <div class="w-full rounded-[2rem] pt-3 px-3 overflow-hidden ">
                   <div class="overflow-hidden rounded-[2rem] "> <img v-bind:src="item.image" /></div>
                   
                </div>
                <div class=" flex py-3 px-3 flex-col gap-3 border-primary transform duration-300">
                    <div class=" group-hover:w-full w-1 duration-500 h-1 bg-primary"></div>
                    <p class="text-xl "><span>{{item.card}}</span> {{item.header}} <span class="tex- text-base font-semibold">({{item.condition}})</span></p>
                    <div class="flex justify-between">
                    <p class="text-xl font-semibold">Price</p> 
                    <p class="font-semibold font-lg ">₦{{item.price}}</p>
                    </div>
                    <p class="flex justify-between font-semibold font-lg ">Availability(status) <span class="tex text-green-600 ">Yes</span></p>
                </div>
                 <router-link target="_blank" :to="`/card/${item.id}`"><PrimaryBtn class="w-full text-center font-semibold">Buy now</PrimaryBtn></router-link>
            </div>
            
        </div>
      </div>
    </section>
    <section class="container mx-auto my-20 py-5">
       <div class="">
        <h1 class="text-4xl font-semibold text-center">PHONE ARTIME AND DATA </h1>
        <p class="font-normal text-2xl mb-20 text-center">We provide affordable Price for card</p>
        <div class="grid md:grid-cols-4 grid-cols-2  gap-10 justify-center "> 
            <div class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[10rem]"><img src="@/assets/image/mtn.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center   text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center rounded-[2rem] font-semibold">Buy now</PrimaryBtn>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[10rem]"><img src="@/assets/image/airtel.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                    <PrimaryBtn @click="procced" class="w-full text-center rounded-[2rem]  font-semibold">Buy now</PrimaryBtn>>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[10rem]"><img src="@/assets/image/9mobile.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center  rounded-[2rem] font-semibold">Buy now</PrimaryBtn>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center">
                <div class="shadows  rounded-[2rem] overflow-hidden w-[10rem]"><img src="@/assets/image/glo.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center  rounded-[2rem] font-semibold">Buy now</PrimaryBtn>
                </div>
            </div>

        </div>
       </div>
    </section>
    <section class="container my-20 mx-auto py-5 ">
     <div class="flex flex-col gap-5 justify-center images h-96 items-center">
     <p class="text-3xl justify-center font-semibold text-white  ">ABOUT US</p>
     <p class="w-2/3 font-normal text-center text-white"> We are the best source. With a platform that is trusted by Paystack and Flutterwave, you can shop online with complete confidence and no worries. Our pleasure is in seeing you happy. We take great pride in providing top-notch service, and we have no doubt that after utilizing our service for the first time, you'll make our website your homepage. </p>
     </div>
    </section>
    <section>
        <div :class=" track ? 'block ' : 'hidden'" class="w-full top-0 fixed z-50  blurr  hden h-[50rem]">
            <div class="w-[30rem]   mx-auto shadows bg-white h-[10rem] mt-[20rem] ">
                <div class="border flex border-b-primary py-3 text-center mt-2 justify-center item-center w-full text-primary ">
                    <p class="font-semibold text- text-sm">Transaction ID </p>
                    <img @click="idHidden()" src="@/assets/image/cancel.svg" class="w-4  relative  left-[10rem]" />
                </div>

                <form action="" class=" py-10 mb-5 px-3">
                    <Input label="Transaction ID" type="text" placeholder="" :error="false" inputValue="" :disabled=disabled ></Input>
                </form>

                <button @click="idHidden()">Cancell</button>
            </div>

        </div>
    </section>
    <Footer></Footer>
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
                track: false,
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
        methods:{
            procced(){
                this.track = !this.track
            },
            idHidden(){
                this.track = !this.track
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
        background-image: url(../assets/image/dash.jpg);
        background-position:right;
        background-repeat: no-repeat;
        background-size:cover;
    }

     .shadows{
    box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -webkit-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    -moz-box-shadow: -1px 3px 49px -10px rgba(0,0,0,0.29);
    }
    .blurr{
       backdrop-filter: blur(5px);
     
    }
</style>