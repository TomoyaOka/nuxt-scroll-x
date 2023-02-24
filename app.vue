<script setup lang="ts">
import Animation from "~~/assets/animation";

onMounted(() => {
  const app = new Animation();
  app.init();
});

/*----------------
* meta
------------------*/
useHead({
  title: "ScrollX Demo",
});
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <NuxtPage />
    </div>
    <div class="js-height">Height : <span></span></div>
  </div>
</template>

<style lang="scss">
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  height: 100svh;
  overflow: hidden;
}

.container {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
}
</style>
