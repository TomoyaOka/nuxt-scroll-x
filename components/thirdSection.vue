<template>
  <section class="third-section js-section">
    <div class="third-section__box">
      <h2 class="js-fade">third</h2>
      <p>contents-area</p>
      <div class="filter js-filter"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.third-section {
  width: 1200px;
  height: 100vh;
  height: 100svh;
  padding: 20px;
}

.third-section__box {
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
  .third-section {
    width: 100%;
    padding: 20px;
  }
  .third-section__box {
    h2 {
      font-size: 80px;
    }
    p {
      font-size: 26px;
    }
  }
}
</style>
