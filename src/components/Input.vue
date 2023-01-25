<template>
    <div class="w-full">
      <label class="block text-xl w-full px-2 text-black  mb-2" v-if="label">{{label}}
         <!-- <span class="text-red text-xl">{{error}}</span> -->
      </label>
      <input :class="{'border-red-500 focus:border-red-500 active:border-red-500' : error}" autocomplete="off"  class="w-full py-2 px-4 text-sm outline-none border-none text-black ring-0 focus:border-primary active:border-primary rounded-lg border border-trans"
    :type="type" :disabled="disabled" :placeholder="placeholder" :value="inputValue" @input="$emit('input', $event.target.value)" ref="input" :min="min" :max="max">
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
      inputValue:[Number, String], 
      type: Number,
      disabled: Boolean,
      placeholder:String,
      rounded:Boolean,
      min: {
      default: 1,
      type: Number
      },
      max:{
      default: 100,
      type: Number
      },
    },
   
    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

