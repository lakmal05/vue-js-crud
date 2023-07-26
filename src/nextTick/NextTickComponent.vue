<template>
  <main>
    <h1>{{ countData.count }}</h1>
    <button ref="submit-btn" @click="plus(1)">+</button>
  </main>
</template>

<script>
import { ref, nextTick } from "vue";

export default {
  setup() {
    // const count = ref("1");
    const countData = {
      count: 0,
    };
    const plus = (amount) => {
      const btn = this.$refs["submitBtn"];
      console.log(btn.value);

      countData.count += amount;

      nextTick(() => {
        const btn = this.$refs["submitBtn"];
        console.log(btn.value);
      });
    };
    return {
      count,
      plus,
    };
  },
};
</script>
