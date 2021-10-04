<template>
  <div class="scroll-animate-1">
    <p class="scroll-animate-1__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et inventore
      ipsum placeat, delectus debitis quae voluptates deleniti odio fugiat
      asperiores ea rerum, amet velit! Itaque molestiae repellat iure amet
      iusto.
    </p>

    <p class="scroll-animate-1__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et inventore
      ipsum placeat, delectus debitis quae voluptates deleniti odio fugiat
      asperiores ea rerum, amet velit! Itaque molestiae repellat iure amet
      iusto.
    </p>

    <p class="scroll-animate-1__text">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et inventore
      ipsum placeat, delectus debitis quae voluptates deleniti odio fugiat
      asperiores ea rerum, amet velit! Itaque molestiae repellat iure amet
      iusto.
    </p>
  </div>
</template>

<script>
import { debounce, throttle } from "underscore";

const MAX_SKEW = 50;

export default {
  mounted() {
    let scrollFunc = this.checkScrollSpeed();
    let counter = 1
    let aveSpeed = 0
    window.onscroll = () => {
      let speed = scrollFunc();
      // берем среднюю скорость за последние 3 измерения
      if (counter < 4) {
        aveSpeed = (aveSpeed + speed) / counter
        counter += 1
      } else {
        counter = 1
        aveSpeed = speed
      }

      if (aveSpeed > MAX_SKEW) aveSpeed = MAX_SKEW;
      if (aveSpeed < -MAX_SKEW) aveSpeed = -MAX_SKEW;

      this.setSkew("scroll-animate-1__text", aveSpeed / 7);
      this.setBack("scroll-animate-1__text");
    };
  },
  methods: {
    // throttle - говорим, сколько раз в секунду вызывать эту функцию, чтобы она невызывалась слишком часто
    setSkew: throttle(function(className, skew) {
      let elements = document.getElementsByClassName(className);
      for (let element of elements) {
        element.style.transform = `skewY(${skew}deg)`;
      }
    }, 50),
    // При резком прокручивании, сохранается skew, поэтому надо вернуть его обратно
    // debounce - вызывается, только когда вызываем в последний раз
    setBack: debounce(function (className) {
      let elements = document.getElementsByClassName(className);
      for (let element of elements) {
        element.style.transform = `skewY(0deg)`;
      }
    }, 100),
    // детектирование скорости прокрутки
    checkScrollSpeed(settings) {
      settings = settings || {};

      var lastPos,
        newPos,
        timer,
        delta,
        delay = settings.delay || 50; // in "ms" (higher means lower fidelity )

      function clear() {
        lastPos = null;
        delta = 0;
      }

      clear();

      return function () {
        newPos = window.scrollY;
        if (lastPos != null) {
          // && newPos < maxScroll
          delta = newPos - lastPos;
        }
        lastPos = newPos;
        clearTimeout(timer);
        timer = setTimeout(clear, delay);
        return delta;
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.scroll-animate-1 {
  p {
    font-size: 5rem;
    text-transform: uppercase;
    font-weight: bold;
    min-width: 800px;
    margin: 0 auto 100px auto;
    line-height: 1;
    transition: transform 0.2s linear;
  }
}
</style>