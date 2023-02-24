<template>
  <section class="second-section js-section">
    <div class="second-section__box">
      <h2>secondsection</h2>
      <p>contents-area</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.second-section {
  width: 800px;
  height: 100vh;
  height: 100svh;
  border: 1px solid;
  padding: 20px;
}

.second-section__box {
  line-height: 1;
  letter-spacing: -0.06em;
  h2 {
    font-size: 200px;
  }
  p {
    font-size: 120px;
  }
}

@media (max-width: 768px) {
  .second-section {
    padding: 20px;
  }
  .second-section__box {
    h2 {
      font-size: 120px;
    }
    p {
      font-size: 80px;
    }
  }
}
</style>
