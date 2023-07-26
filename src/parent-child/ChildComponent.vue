<template>
  <div>
    <input v-model="childMessage" />
    <p>Parent Message: {{ messageFromParent }}</p>
    <p>Child Message: {{ childMessage }}</p>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";

export default defineComponent({
  props: {
    message: String,
  },
  setup(props) {
    const childMessage = ref("");

    const messageFromParent = computed(() => {
      return `${props.message} - ${childMessage.value}`;
    });
    return {
      childMessage,
      messageFromParent,
    };
  },
});
</script>
