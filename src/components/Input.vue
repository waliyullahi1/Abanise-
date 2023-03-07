<template>
    <div class="w-full">
      <label class="block text-xs px-2 text-white mb-2" v-if="label">{{label}}
         <!-- <span class="text-red text-xs">{{error}}</span> -->
      </label>
      <input :class="{'border-red-500 focus:border-red-500 active:border-red-500' : error}" autocomplete="off"  class="w-full py-2 px-4 text-sm outline-none bg-secondary text-white ring-0 focus:border-primary active:border-primary rounded-lg border border-transparent"
    :type="type" :disabled="disabled" :placeholder="placeholder" :value="inputValue" @input="$emit('update:inputValue', $event.target.value)" ref="input">
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
      inputValue: String
    },

    methods: {
      focus() {
        this.$refs.input.focus()
      }
    }
  }
</script>

