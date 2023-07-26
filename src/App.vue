<script setup>

//import nextTickComponent from "./nextTick/nextTickComponent.vue";
// import ParentComponent from "./parent-child/ParentComponent.vue";
// import ChildComponent from "./parent-child/ChildComponent.vue";
//import router from "./routers";
import { RouterView } from "vue-router";
// import ParentComponet from "./child-parent/parentComponent.vue";
// import ChildComponent from "./child-parent/parentComponent.vue";

</script>

<template>
  <!-- <header></header> -->

  <main>
    <!-- <KeepAlive> -->
    <RouterView />
    <!-- </KeepAlive> -->
    <!-- <nextTickComponent></nextTickComponent> -->
    <!-- <ChildComponent></ChildComponent> -->
     <!-- <ParentComponent></ParentComponent> -->
      <!-- <ParentComponet></ParentComponet>  -->
     <!-- <ChildComponent></ChildComponent>  -->
  </main>
</template>
