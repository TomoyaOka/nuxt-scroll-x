<script setup lang="ts">
import Animation from "~~/assets/animation";

onMounted(() => {
  let window_w = window.innerWidth;
  const app = new Animation();
  if (window_w > 768) {
    app.init_pc();
  } else {
    app.init_mobile();
  }

  window.addEventListener("resize", () => {
    if (window_w != window.innerWidth) {
      window_w = window.innerWidth;
      app.onResize();
    }
  });
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

@media (max-width: 768px) {
  .wrapper {
    width: 100%;
  }
  .container {
    width: 100%;
    flex-direction: column;
  }
}
</style>
