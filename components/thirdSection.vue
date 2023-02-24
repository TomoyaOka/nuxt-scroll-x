<template>
  <section class="third-section js-section">
    <div class="third-section__box">
      <h2 class="js-fade">thirdsection</h2>
      <p>contents-area</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.third-section {
  width: 1200px;
  height: 100vh;
  height: 100svh;
  border: 1px solid;
  padding: 20px;
}

.third-section__box {
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
  .third-section {
    padding: 20px;
  }
  .third-section__box {
    h2 {
      font-size: 120px;
    }
    p {
      font-size: 80px;
    }
  }
}
</style>
