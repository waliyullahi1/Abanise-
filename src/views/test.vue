<template>

  <div id="app">
    <h1>eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</h1>
    <!-- <Carousel :autoplay="8000"  :wrap-around="true" class=" " :items-to-show="1">
        <slide v-for="slide in hero" :key="slide.id" class="w-full  ">
           <div>
             <div class="w-full h-fit px-3"> <img 
   class="h-full w-full" 
  v-bind:src="slide.image" 
  v-show="slide.isVisible"
  :class="{ 'fade-out': slide.fadeOut }"
  :style="slideStyles[index]"
  @mousedown="pauseZoom(slide)" 
  @mouseup="resumeZoom(slide)" 
  @mouseleave="resumeZoom(slide)"
>
</div>
            <div class="text-left flex-col hidden relative left-20 lg:bottom-[4rem] md:bottom-[7rem]">
                <p class="font- text-4xl text-[white] md:text-[3rem] text-whte font-[Poppins]"></p>
                <p class="md:text-xl text-xl text-[white] pt-2 m"></p>
                <a href="" class="bg-secondary text-[white] mt-4 py-2 px-2 w-fit rounded-lg text-"></a>
            </div>
           </div>
           <template #addons>
      <navigation />
      <pagination />
    </template>
        </slide>
    </Carousel> -->


  <Carousel :autoplay="8000"  :wrap-around="true" class=" " :items-to-show="1">
    <slide v-for="slide in hero" :key="slide.id" class="w-full  ">
           <div>
             <div class="w-full image h-fit px-3"> hhhhhhhhhhhhhhhhhhhhhhh</div>
            <div class="text-left flex-col gap  relative left-20 lg:bottom-[4rem] md:bottom-[7rem]">
                <p class="font- text-4xl  md:text-[3rem] text-whte font-[Poppins]">{{slide.condition}}</p>
                <p class=" text-xl  pt-2 m">ddffffffffffffffff</p>
                <a href="" class="bg-secondary  mt-4 py-2 px-2 w-fit rounded-lg text-">55555555</a>
            </div>
           </div>
           <template #addons>
      <navigation />
      <pagination />
    </template>
        </slide>

  </Carousel>
  </div> 

  
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import hero1 from '@/assets/image/fi1.jpg';
import waecImg from '@/assets/image/waeccard.jpg';
import hero3 from '../assets/image/vgce.jpg'
import nabteb from  '@/assets/image/nabteb1.jpg';

export default {
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
       hero:[
                    {
                        id: 1,
                        image:hero1 ,
                        price:'3500',
                        card:'Waec',
                        header:'Scratch card ',
                        condition:'result checker',
                        fadeOut: false,
                       isVisible: true,  // This image will be displayed
                        paused: false
                    },
                    {
                        id: 2,
                        image: hero3,
                        price:'1000',
                        card:'Nabteb',
                        header:'Scratch card ',
                        condition:'result checker',
                       isVisible: true,  // This image will also be displayed
                        paused: false
                    }
                ],
      activeIndex: 0
    };
  },
 methods: {
    pauseZoom(slide) {
      slide.paused = true;
    },
    showImage(slide) {
      slide.isVisible = true;
    },
    resumeZoom(slide) {
      slide.paused = false;
    },
   
  },



};
</script>

<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  opacity: 1;
  transform: rotateY(-10deg) scale(0.95);
}

.carousel__slide--next {
  opacity: 1;
  transform: rotateY(10deg) scale(0.95);
}
.gap{

}

.carousel__slide--active {
  opacity: 1;
  transform: rotateY(0) scale(1.1);
 
}
.carousel__slide--active p{
   animation: p 1s ;
   overflow: hidden;
   width: fit-content;
   height: fit-content;
}
.carousel__slide--active .image{
   animation:  7.75s infinite;
}
@keyframes zoom {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}
@keyframes p {
  from { transform: translateY(-100px); }
  to { transform: scale(0px); }
}
</style>