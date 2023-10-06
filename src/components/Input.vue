<template>
    <div class="w-full">
      <label class="block text-[15px]  font-semibold px-1 t- mb-1" v-if="label">{{label}}
         <!-- <span class="text-red text-xs">{{error}}</span> -->
      </label>
      <input :class="{'border-red-500 focus:border-red-500 active:border-red-500' : error}" autocomplete="off"  class="w-full py-2 px-4 text-sm   outline-none bg-gray-300 ring-0  active:bordr-primary rounded-lg h-[35px] border border-transparent"
    :type="type" :disabled="disabled" :max="max" :min="min" :placeholder="placeholder" :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" ref="input">
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
      inputValue: String,
      min:Number,
      max:Number,

    },

    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

