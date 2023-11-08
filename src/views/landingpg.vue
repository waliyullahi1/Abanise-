<template>
   
 <div class="overflow-y-hidden text-[poppins]">
  
   <Header @transaction="transact()" :headertext="headerChange" class="fixed z-40 top-0"></Header>
    
    <div class="w-full "></div>
    <section  class=" j" >
          <Carousel  :autoplay="9000" :transition="2000"  :wrap-around="true" :items-to-show="1">
        <slide v-for="slide in hero" :key="slide.id" class="w-full  ">
            <div :style="{backgroundImage:'url('+ slide.image +')'}" class=" image sticky top-0 w-full h-[30rem] md:h-[40rem]  overflow-hidden ">
         <div  class="container pt-8  flex flex-col md:gap-4 gap-0 px-4 justify-center h-full mx-auto "> 
            <div class=" overflow-hidden  h-fit"> <p class= " heropa   text-5xl px-1 text-[1.5rem] sm:text-[2rem]  md:text-[3rem] text-white  ">{{slide.heroSection}}</p></div>
            <div class=" w-full flex justify-center items-center overflow-hidden">
                   <div class="md:w-1/2 herop w-full flex justify-center mx-2 items-center"> <a class="sm:text-2xl text-xl text-[white] pt-0 ">{{slide.heroParagraph}}</a></div>

            </div>
                          <div class="flex gap-5 mt-2 sm:mt-8 justify-center items-center">
            <router-link  to="/login"><p class="flex items-center hover:bg-primary  gap-3 border py-2 px-2 w-fit opacity-60 md:text-2xl text-xl text-white"> <img src="@/assets/image/sign.svg" class="w-10 md:w-10 " alt=""> login in</p></router-link>
            <p><router-link  to="/register" class="md:text-2xl text-xl text-white hover:text-secondary py-2 px-2 border-l-2 " >sign up</router-link></p>
            
        </div>
         <p class= "font-semibold text-7xl text-white hidden font-mem]"> BUY ONLINE REGISTRATION CARD PIN AUTOMATICINSTANTLY DELIVERY</p>
    </div>j
    </div>
           <template #addons>
      <navigation />
      <pagination />
    </template>
        </slide>
         </Carousel>
    <!-- <div class=" image sticky top-0 w-full h-[30rem] md:h-[40rem]  overflow-hidden ">
    <div  class="container pt-8  flex flex-col gap-2 px-4 justify-center h-full mx-auto "> 
        <p class= "  font- text-4xl px-1  md:text-[5rem] text-white font-[roboto] ">Buy scratch <span class="text-secondary">Card</span></p>
        <a class="md:text-2xl text-xl text-[white] pt-4 ">Get instant accesss to scratch card PINs for  WAEC,<br class="md:flex hidden">  NECO  and NABTEB</a>
        <div class="flex gap-5 mt-8 items-center">
            <router-link  to="/login"><p class="flex items-center hover:bg-primary  gap-3 border py-2 px-2 w-fit opacity-60 md:text-2xl text-xl text-white"> <img src="@/assets/image/sign.svg" class="w-10 md:w-10 " alt=""> login in</p></router-link>
            <p><router-link  to="/register" class="md:text-2xl text-xl text-white hover:text-secondary py-2 px-2 border-l-2 " >sign up</router-link></p>
            
        </div>
         <p class= "font-semibold text-7xl text-white hidden font-mem]"> BUY ONLINE REGISTRATION CARD PIN AUTOMATICINSTANTLY DELIVERY</p>
    </div>j
    </div> -->
    <div class="w-full bg-primary ">
        <div class="grid mx-auto px-4  container md:max-w-full lg:max-w-full justify-between md:grid-cols-4 grid-cols-1 gap-10 py-10 w-full h-fit">
        <div class=" text-white  border-l-2 pl-3 ">
            <h1 class=" text-[20px] mb-2  text-white">Discounted Prices</h1>
            <p class="text-[14px] font leading-relaxed ">Buy Waec , Neco, Nabteb resultchecker and Waec pin, Nabteb pin at highly subsized prices</p>
        </div>

         <div class=" text-white  border-l-2 pl-3 ">
            <h1 class=" text-[20px] mb-2  text-white">Instant Delivery</h1>
            <p class="text-[14px] font leading-relaxed ">Users receive Product atmost 3 minutes after Purchase</p>
        </div>

         <div class=" text-white border-l-2 pl-3  ">
            <h1 class=" text-[20px] mb-2  text-white">24/7 Customer Support</h1>
            <p class="text-[14px] font leading-relaxed ">Our customer service agent are always available to respond to any issues that you might have</p>
        </div>

         <div class=" text-white  border-l-2 pl-3 ">
            <h1 class=" text-[20px] mb-2  text-white">User-Friendly Experience</h1>
            <p class="text-[14px] font leading-relaxed ">Top notch user Interface that give you a smooth and satisfying experience</p>
        </div>
    </div>
    </div>
    </section>
    <section id="section" class="container  my-10  mt-10 mx-auto">
        <marquee behavior="scroll" direction="left" scrollamount="" class=" text-sm md:text-[13px] font-bold w-full font-bo text-primary "><span>IF YOU WANT  TO PROCESS YOUR ADDMISSION TO ANY UNIVERSITY OR POLYTECHNIC KINDLY MESSAGE  THIS WHATSAPP NUMBER 07068393706 </span></marquee>
      <div class="  flex flex-col justify-cen
      ter gap-5 items-center ">
        <p class="text-3xl font-bold text">CARDS PRODUCT</p>
        <p class="md:text-xl text-sm  font-normal ">CLICK ON ANY CARD BELOW TO BUY THE CARD PIN INSTANTLY </p>
        <div class="grid md:grid-cols-2  lg:grid-cols-3 sm:grid-cols-2  grid-cols-1 gap-20 px-10 ">
            <div  v-for="item in item" :key="item.id" class=" group shadow border-primary w-full overflow-hidden  h-fit flex flex-col gap-3 rounded-[2rem]" >
                <div class="w-full rounded-[2rem] group-hover:drop-shadow-xl  duration-700  pt-3 px-3 overflow-hidden ">
                   <div class="overflow-hidden duration-700   rounded-[2rem] "> <img v-bind:src="item.image" class="w-[20rem]" /></div>
                   
                </div>
                <div class=" flex py-3 px-3 flex-col gap-3 border-primary transform duration-300">
                    <div class=" group-hover:w-full w-1 duration-500 h-1 bg-primary"></div>
                    <p class="text-[17px] "><span>{{item.card}}</span> {{item.header}} <span class="tex- text-base font-sebold">({{item.condition}})</span></p>
                    <div class="flex justify-between">
                    <p class="text-[17px]">Price</p> 
                    <p class="font-semibold font-lg ">₦{{item.price}}</p>
                    </div>
                    <p class="flex justify-between font-font-[17px] ">Availability(status) <span class="tex text-green-600 ">Yes</span></p>
                </div>
                 <router-link :class="item.itIsAvalable? 'block':'hidden'" target="_blank" :to="`/card/${item.id}`"><PrimaryBtn class="w-full text-center font-[14px] font-sembold">Buy now</PrimaryBtn></router-link>
                 <router-link :class="item.itIsAvalable? 'hidden':'block'" target="_blank" :to="`/`"><PrimaryBtn class="w-full text-center font-[14px]  font-sembold">Not Available</PrimaryBtn></router-link>

            </div>
            
        </div>
      </div>
    </section>
    <section class="container  mx-auto my-20 py-5">
       <div class="">
        <h1 class="md:text-3xl text-xl text-primary font-bold text-center">PHONE AIRTIME AND DATA BUNDLE  </h1>
        <p class="font-normal md:text-2xl text-[15px] mb-20 text-center">We provide affordable price for Airtime and Data bundle </p>
        <div class="grid md:grid-cols-4 grid-cols-2  md:gap-10 gap-3 justify-center "> 
            <div  isJsFinishedRun class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img src="@/assets/image/mtn.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center   text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center rounded-[2rem] font-semibold"><router-link  to="/register"> Buy now</router-link></PrimaryBtn>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img src="@/assets/image/airtel.png" alt="mtn logo" class="md:w-[13rem] w-[10rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                    <PrimaryBtn @click="procced" class="w-full text-center rounded-[2rem]  font-semibold"><router-link  to="/register"> Buy now</router-link></PrimaryBtn>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="shadows rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img src="@/assets/image/9mobile.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center  rounded-[2rem] font-semibold"><router-link  to="/register"> Buy now</router-link></PrimaryBtn>
                </div>
            </div>

            <div class="flex flex-col justify-center items-center">
                <div class="shadows  rounded-[2rem] overflow-hidden w-[7rem] md:w-[10rem]"><img src="@/assets/image/glo.png" alt="mtn logo" class="w-[13rem]"></div>
                <div class="e w-fit mt-5 py-2 px-3">
                    <h1 class="font-bold text-primary text-center  text-[1rem]">MTN Airtime VTU And Data</h1>
                      <PrimaryBtn @click="procced" class="w-full text-center  rounded-[2rem] font-semibold"> <router-link  to="/login"> Buy now</router-link></PrimaryBtn>
                </div>
            </div>

        </div>
       </div>
    </section>
    <section id="how" class="bg-gray-200">
        <div class="container  mx-auto my-20 py-20">
            <p class="text-3xl text-center text-primary">How it is works</p>
            <p class="text-xl py-6 text-center text-primary">Start purchasing cards now. It’s easy, secure and takes only a few minutes!</p>

            <div class="w-full grid grid-cols-1 sm:px-5 px-11 sm:grid-cols-3 gap-6">
                <div  v-motion-slide-visible-left class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">
                    
                    <div><img class="bg w-20 bg-primary py-4 px-4 rounded-full " src="../assets/image/card1.svg" alt=""></div>
                    <h1 class="text-3xl text-secondary font-mermaid">1</h1>
                    <p class=" text-xl text-center font-semibold ">Select Card type <br> & number of pins</p>
                    <p class=" text-[15px] text-center">Start by selecting the card you want to purchase from the above list, then select the number of pins in next page </p>
                </div>
                <div v-motion-pop-visible class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">
                    
                    <div ><img class="bg-  w-20 bg-primary py-4 px-4 rounded-full " src="../assets/image/payment.svg" alt=""></div>
                    <h1 class="text-3xl text-secondary font-mermaid">2</h1>
                    <p class=" text-xl text-center font-semibold ">Make Payment <br> </p>
                    <p class=" text-[15px]  text-center">We partnered with Paystack to make your payment process fast and secure.   </p>
                </div>
                <div  v-motion-slide-visible-once-bottom class="c shadow-lg rounded-2xl py-4 px-4 flex  gap-4 justify-center items-center flex-col ">
                    
                    <div><img class="bg-  w-20 bg-primary py-4 px-4 rounded-full " src="../assets/image/token.svg" alt=""></div>
                    <h1 class="text-3xl text-secondary font-mermaid">3</h1>
                    <p class=" text-xl text-center font-semibold ">Receive Tokens Instantly <br> </p>
                    <p class=" text-[15px]  text-center">Immediately after your payment, if successful,you will be direct to another page automatically to copy you token.   </p>
                </div>
            </div>
        </div>
    </section>
    <section class="container hidden my-20 mx-auto py-5 ">
     <div class="flex flex-col gap-5 justify-center images h-96 items-center">
     <p class="text-3xl justify-center font-semibold text-white  ">ABOUT US</p>
     <p class="md:w-2/3 w-full px-2  font-normal text-center text-white"> We are the best source. With a platform that is trusted by Paystack , you can shop online with complete confidence and no worries. Our pleasure is in seeing you happy. We take great pride in providing top-notch service, and we have no doubt that after utilizing our service for the first time, you'll make our website your homepage. </p>
     </div>
    </section>
   
    <section>
        <div :class=" track ? 'translate-x-0 ' : 'translate-x-[250rem]'" class=" duration-700 ease-in-out w-full transform top-0 fixed z-50  blurr h-[50rem]">
            <div class="w-[30rem]  transl duration-700 ease-in-out transform mx-auto shadows bg-white h-[10rem] mt-[20rem]  "   :class=" track ? '' : 'translate-x-[1rem]'" >
                <div class="border flex border-b-primary  transform py-3 text-center mt-2 justify-center item-center w-full text-primary ">
                    <p class="font-semibold text- text-sm">Transaction ID </p>
                    <img @click="idHidden()" src="@/assets/image/cancel.svg" class="w-4  relative  left-[10rem]"/>
                </div>

                <form action="" class=" py-10 mb-5 px-3">
                    <Input label="Transaction ID" type="text" placeholder="" :error="false" inputValue="" :disabled=disabled ></Input>
                </form>

                <button @click="idHidden()">Cancell</button>
            </div>

        </div>
    </section>
    <loadingJs :isJsFinishedRun="isJsFinishedRun" > </loadingJs>
    <Footer></Footer>
    
 
 </div>
 </template>


<script>
    import 'vue3-carousel/dist/carousel.css'
    import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
    import hero2 from '@/assets/image/hero.jpg';
     import hero3 from '@/assets/image/her.jpg';
    import { onMounted, ref } from 'vue';
     import hero1 from '@/assets/image/dash.jpg';
    import waecImg from '@/assets/image/waeccard.jpg';
    import neco from '@/assets/image/neco.jpg';
     import vwaec from '../assets/image/vgce.jpg'
    import nabteb from  '@/assets/image/nabteb1.jpg';
   import gcewaec from  '../assets/image/gce.jpg'
   import nabtebgce from '../assets/image/pinnabteb.jpg'

    export default {
         name: 'Autoplay',

          setup() {
    const headerChange=ref(true)
    const isJsFinishedRun=ref(true)
    onMounted(async()=>{
        isJsFinishedRun.value=true
    })
    window.addEventListener('scroll', () => {
      if (window.scrollY > 70) {
       headerChange.value =false  
      } else {
        headerChange.value = true
      }
    });
    return { headerChange, isJsFinishedRun};
  },
         components: {
    Carousel,
    Slide,
    Pagination,
  },
        data(){
            return{
                
                 scrollPosition: null,
                track: false,
                item:[
                    {
                        id: 1,
                       
                        image:waecImg ,
                        price:'4000.00',
                        card:'Waec',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true
                    },

                    {
                        id: 2,
                        image: neco,
                        price:'1200.00',
                        card:'Neco',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true,
                    },

                    {
                        id: 3,
                        image: nabteb,
                        price:'1000.00',
                        card:'Nabteb',
                        header:'Scratch card ',
                        condition:'result checker',
                        itIsAvalable:true
                    },


                      {
                        id: 4,
                        image: gcewaec,
                        price:'19,000.00',
                        card:'GCEWaec',
                        header:'Pin card ',
                        condition:'For registration',
                        itIsAvalable:true,
                    },

                    {
                        id: 5,
                        image: neco,
                        price:'12,500.00',
                        card:'GCENeco',
                        header:'Pin card ',
                        condition:'For registration',
                        itIsAvalable:true,
                    },

                   
                    {
                        id: 6,
                        image: nabtebgce,
                        price:'16,500.00',
                        card:'GCENabteb',
                        header:'pin ',
                        condition:'For registration',
                        itIsAvalable:false
                    },

                    {
                        id:7,
                        image: vwaec,
                        price:'15000',
                        card:'Waec',
                        header:'Result Verification ',
                        condition:'Correction of date of birth in NYSE',
                        itIsAvalable:false
                    },

                    

                  


                   



               


                    
                ],
               hero:[
                    {
                        id: 1,
                       
                        image:hero1 ,
                        heroSection:'Buy scratch Card and Exam pin',
                        heroParagraph:'Get instant accesss to scratch card for resultchecker and Exam PINs for  WAEC, NECO  and NABTEB'
                    },

                    
                      

                    {
                        id: 2,
                        image: hero2,
                         heroSection:'Buy & Sell  Airtime, Data, &',
                        heroParagraph:'We are a major player in distribution & selling affordable and discounted cheapest data ',
                       
                    },
                    
                   {
                        id: 2,
                        image: hero3,
                         heroSection:`Get Your Admission Instantly `,
                        heroParagraph:'Get your Admission to any university or Polytechnic Without jamb ',
                       
                    },

                      {
                        id: 2,
                        image: hero3,
                         heroSection:`Register Your Olevel's `,
                        heroParagraph:'You can register your GCEWAEC, GCENABTEB, NABTEB and NECO, and get a good grade ',
                       
                    },
                ]
            }
        },
        methods:{
            
           transact(){
                this.track = !this.track
                console.log('happyis')
            },
            idHidden(){
                this.track = !this.track
            }
        },

        created(){
      
        }
       
    }
</script>

<style scoped>
.carousel__item {
   width: 200%;
  
}
.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
 
}
.carousel__slide--active .heropa{
   animation: p 3s ;
   animation-iteration-count: 1;  
}


.carousel__slide--active .herop{
   animation: pa 3s ;
   animation-iteration-count: 1;  
}


@keyframes p {
  from {
     transform: translateY(-100px);
      }
  to { transform: scale(0px); }
}
@keyframes pa {
  from {
     transform: translateY(100px);
      }
  to { transform: scale(0px); }
}





    

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
       
        background-color: #164b3b;
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