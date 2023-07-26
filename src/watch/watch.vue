<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="pluse">+</button>
  </div>
</template>

<script>
import { reactive, watch } from "vue";

export default {
  setup() {
    const state = reactive({
      count: 0,
    });
  

    watch(
      () => state.count,
      (newValue, oldValue) => {
        // console.log(`Count changed  ${oldValue} -- ${newValue}`);
      }
    );

    return {
      count: state.count,
      pluse
    };
  },
};
</script>
