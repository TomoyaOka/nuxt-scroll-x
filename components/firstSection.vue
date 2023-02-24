<template>
  <section class="first-section js-section">
    <div class="first-section__box">
      <h2>firstsection</h2>
      <p>keyvisual-area</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.first-section {
  width: calc(100vw + 100px);
  height: 100vh;
  height: 100svh;
  border: 1px solid;
  padding: 40px;
}

.first-section__box {
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
  .first-section {
    padding: 20px;
  }
  .first-section__box {
    h2 {
      font-size: 120px;
    }
    p {
      font-size: 80px;
    }
  }
}
</style>
