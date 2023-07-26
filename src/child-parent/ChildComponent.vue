<template>
  <div>
    <h2>Child Component</h2>
    <input v-model="childMessage" @input="sendMessage" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    initialValue: {
      type: String,
      required: true,
    },
  },
  setup(props,{emit}) {
    const childMessage = ref(props.initialValue);

  
    const sendMessage = () => {
      const message = childMessage.value;
    
      this.$emit('message-updated', message);
    };

    return {
      childMessage,
      sendMessage,
    };
  },
});
</script>
