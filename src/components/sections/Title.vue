<template>
<!-- Разделитель секций - заголовок секции -->
  <div class="tickers">
    <div
      v-for="i in tickerCount"
      :key="i"
      class="ticker-block"
      :class="{ 'other-direct': i % 2 }"
    >
      <div class="ticker">
        <div v-for="j in titlesCount" :key="j" ref="titles">
          <h2>{{ title }}</h2>
        </div>
      </div>
      <div class="ticker hidden-ticker">
        <div v-for="j in titlesCount" :key="j">
          <h2>{{ title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Заголовок",
    },
  },
  data: () => ({
    tickerCount: 2,
    titlesCount: 2,
  }),
  mounted() {
    this.calcTitlesCount();
  },
  methods: {
    calcTitlesCount() {
      let charCountInPage;
      let charCount = this.title.length;
      let windowWidth = window.innerWidth - 17;
      if (windowWidth > 1500) {
        charCountInPage = 40;
      } else if (windowWidth > 1100) {
        charCountInPage = 35;
      } else if (windowWidth > 700) {
        charCountInPage = 20;
      } else if (windowWidth > 500) {
        charCountInPage = 17;
      } else {
        charCountInPage = 17;
      }
      this.titlesCount = Math.floor(charCountInPage / charCount);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.tickers {
  margin-top: 5rem;
  margin-bottom: 2rem;
}
.ticker-block {
  position: relative;
  width: 100%;
  overflow: hidden;

  $animation-time: 15s;

  .ticker {
    width: 100%;
    overflow: hidden;
    h2 {
      color: transparent;
      -webkit-text-stroke: 1px $c-dark;
      text-stroke: 1px $c-dark;
      font-size: 5rem;

      @media screen and (max-width: 500px) {
        font-size: 3rem;
      }
    }
    display: flex;
    justify-content: space-between;
    animation: ticker $animation-time infinite linear;
  }
  @keyframes ticker {
    0% {
      transform: translate(0);
    }
    100% {
      transform: translate(100%);
    }
  }

  .hidden-ticker {
    position: absolute;
    top: 0;
    width: 100%;
    transform: translate(-100%);
    animation: hidden-ticker $animation-time infinite linear;
    right: 5%;
  }
  @keyframes hidden-ticker {
    0% {
      transform: translate(-100%);
    }
    100% {
      transform: translate(0%);
    }
  }

  @media screen and (max-width: 1100px) {
    .ticker {
      animation-duration: 6s;
    }
  }
  
  @media screen and (max-width: 500px) {
    .ticker {
      animation-duration: 3s;
    }
  }

  &.other-direct {
    .ticker {
      animation-direction: reverse;
    }
  }
}
</style>