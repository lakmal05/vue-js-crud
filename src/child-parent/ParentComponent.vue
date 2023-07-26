<template>
  <div>
    <h2>Parent Component</h2>
    <p>Message from Child: {{ parentMessage }}</p>
    <ChildComponent :initialValue="parentMessage" @message-updated="handleMessageUpdate" />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import ChildComponent from "../child-parent/ChildComponent.vue";

export default defineComponent({
  components: {
    ChildComponent,
  },
  setup() {
    const parentMessage = ref("");
    const handleMessageUpdate = (message) => {
      parentMessage.value = message;
    };

    return {
      parentMessage,
      handleMessageUpdate,
    };
  },
});
</script>
