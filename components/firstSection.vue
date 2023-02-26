<template>
  <section class="first-section js-section">
    <div class="first-section__box">
      <h2>HelloWorld</h2>
      <div class="arrow-box">→</div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.first-section {
  width: calc(100vw + 100px);
  height: 100vh;
  height: 100svh;
  padding: 40px;
  position: relative;
}

.first-section__box {
  display: flex;
  align-items: center;
  gap: 70px;
  position: absolute;
  left: 40px;
  bottom: 40px;
  line-height: 1;
  letter-spacing: -0.1em;
  h2 {
    font-size: 160px;
  }
}

.arrow-box {
  width: 200px;
  height: 200px;
  border-radius: 100vmax;
  border: 1px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  padding-top: 10px;
}

@media (max-width: 768px) {
  .first-section {
    width: 100%;
    padding: 20px;
  }
  .first-section__box {
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    gap: 30px;
    position: absolute;
    left: 20px;
    bottom: auto;
    top: 100px;
  }
  .first-section__box {
    h2 {
      font-size: 60px;
    }
    p {
      font-size: 26px;
    }
  }

  .arrow-box {
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 60px;
    transform: rotate(90deg);
    padding-top: 10px;
  }
}
</style>
