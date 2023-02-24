<template>
  <section class="fourth-section js-section">
    <div class="fourth-section__box">
      <h2 class="js-fade">lasthsection</h2>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.fourth-section {
  width: 100vw;
  height: 100vh;
  height: 100svh;
  border: 1px solid;
  padding: 20px;
}

.fourth-section__box {
  line-height: 1;
  letter-spacing: -0.06em;
  h2 {
    font-size: 200px;
  }
}

@media (max-width: 768px) {
  .fourth-section {
    padding: 20px;
  }
  .fourth-section__box {
    h2 {
      font-size: 120px;
    }
    p {
      font-size: 80px;
    }
  }
}
</style>
