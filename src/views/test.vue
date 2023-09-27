<template>
  <div>
    <header style="po" :style="{ backgroundColor: bgColor, position:pos }">
      <h1>Header</h1>
    </header>
    <main>
      <p>Scroll down to see the header background color change.</p>
      <p v-for="i in 20" :key="i">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero vel aliquam bibendum, velit sapien lacinia nunc, vel bibendum velit quam ac nibh. Donec euismod, sapien vel aliquet tincidunt, lorem enim bibendum nisl, vel bibendum velit quam ac nibh.</p>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const bgColor = ref('transparent');
    let pos  =  ref('static')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        bgColor.value = 'lightblue';
         pos.value = 'fixed';
      } else {
        bgColor.value = 'transparent';
        pos  =  ref('static')
      }
    });
    return { bgColor, pos };
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