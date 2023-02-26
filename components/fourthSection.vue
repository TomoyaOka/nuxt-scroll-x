<template>
  <section class="fourth-section js-section">
    <div class="fourth-section__box">
      <h2 class="js-fade">last</h2>
      <p>inertia scroll</p>
      <div class="filter js-filter"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fourth-section {
  width: 100vw;
  height: 100vh;
  height: 100svh;
  padding: 20px;
}

.fourth-section__box {
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
  .fourth-section {
    width: 100%;
    padding: 20px;
  }
  .fourth-section__box {
    h2 {
      font-size: 80px;
    }
    p {
      font-size: 26px;
    }
  }
}
</style>
