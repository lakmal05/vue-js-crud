<template>
  <div>
    <h2>This is Parent component</h2>
    <p>Message from Pa: {{ message }}</p>
    <input />
    <ChildComponent :receivedMessage="message" />
  </div>
</template>
 <script>
import { useCounterStore } from "@/store";
import { defineComponent } from "vue";
import ChildComponent from "./ChildComponent.vue";

export default defineComponent({
  components: {
    ChildComponent,
  },
  setup() {
    const counterStore = useCounterStore();
    const message = counterStore.message;

    return {
      message,
    };
  },
});
</script> 
