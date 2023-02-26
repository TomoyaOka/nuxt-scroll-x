<template>
  <section class="second-section js-section">
    <div class="second-section__box">
      <h2>second</h2>
      <p>contents-area</p>
      <div class="filter js-filter"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.second-section {
  width: 800px;
  height: 100vh;
  height: 100svh;
  padding: 20px;
}

.second-section__box {
  width: fit-content;
  position: relative;
  line-height: 1;
  letter-spacing: -0.06em;
  h2 {
    font-size: 140px;
  }
  p {
    font-size: 60px;
  }
}

@media (max-width: 768px) {
  .second-section {
    width: 100%;
    padding: 20px;
  }
  .second-section__box {
    h2 {
      font-size: 80px;
    }
    p {
      font-size: 26px;
    }
  }
}
</style>
