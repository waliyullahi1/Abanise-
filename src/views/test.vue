<template>
  <div class="container https://e-cardmarket.com.ng/ https://www.intech.org.ng/our-services">
    <transition name="scroll">
      <div v-if="show" class="fixed">
       ggggggggggggggggggggg
      </div>
    </transition>
    <div class="scroll" @scroll="onScroll">
      ...
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    onScroll() {
      const el = document.querySelector(".scroll");
      const scrollTop = el.scrollTop;
      if (scrollTop > 100) {
        this.show = true;
      } else {
        this.show = false;
      }
    },
  },
};
</script>

<style>
.container {
  position: relative;
  flex: 1;
  display: flex;
}

.fixed {
  position: absolute;
}

.scroll {
  overflow-y: scroll;
  height: 100%;
}

.scroll-enter-active,
.scroll-leave-active {
  transition: all 0.5s ease-in-out;
}

.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}
</style>