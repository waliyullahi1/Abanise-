<template>
  <button
    type="button"
    class="
      py-3
      px-4
      w-full
      justify-center
      flex
      bg-primary
      hover:bg-green-900
      text-white
      font-medium
      text-base
      duration-500
      ease-in-out
      rounded-lg
      hover:text-white
      active:text-white
      focus:text-white
      active:bg-primary
      focus:bg-primary
    " 
    :class="loading ? 'bg-primary text-white': ''"
    :disabled="loading || disabled"
  >
    <div class="flex items-center justify-center capitalize">
      <div v-if="loading"  class="flex items-center text-white">
        <div class=" mr-2">
          <svg class="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg" 
            xmlns:xlink="http://www.w3.org/1999/xlink" 
            style="
              margin: auto; 
              display: block;
              shape-rendering: auto;"
              width="244px"
              height="244px"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid">

            <circle 
              cx="50" 
              cy="50" 
              fill="none"
              stroke="#ffffff" 
              stroke-width="5" 
              r="38" 
              stroke-dasharray="179.0707812546182 61.690260418206066">
              <animateTransform 
                attributeName="transform" 
                type="rotate" 
                repeatCount="indefinite" 
                dur="1s" 
                values="0 50 50;360 50 50" 
                keyTimes="0;1">
              </animateTransform>
            </circle>
          </svg>
        </div>
        {{ loadingText }}
      </div>
      <div v-if="!loading">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'LoadingButton',
  props: {
    loading: Boolean,
    color: String,
    disabled: Boolean,
    loadingText: {
      default: "Loading",
      type: String
    },
  },
}
</script>

<style>
</style>