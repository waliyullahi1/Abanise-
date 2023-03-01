<template>
    <div class="w-full">
      <label class="block text-[1rem] font-bold px-2 text-black mb-2" v-if="label">{{label}}
         <!-- <span class="text-red text-xs">{{error}}</span> -->
      </label>
      <input :class="{'border-red-500 focus:border-red-500 active:border-red-500' : error}" autocomplete="off"  class="w-full py-2 px-4 text-sm outline-none bg-gray-100 text-black ring-0  rounded-lg border border-transparent"
    :type="type" :disabled="disabled" :placeholder="placeholder" :min="min" :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" ref="input">
      <!-- <p></p> -->
    </div>

    
</template>

<script>
  export default {
    name:"TextInput",
    props: {
      extraClass: String,
      error: Boolean,
      label:String,
      type: String,
      disabled: Boolean,
      placeholder:String,
      inputValue: [String, Number],
      min:Number,
    },

    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

