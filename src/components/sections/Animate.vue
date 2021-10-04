<template>
  <Title title="Animate" />
  <section>
    <div class="block">
      <h3>Gsap animate</h3>
      <div class="components">
        <GsapAnimate1 />
      </div>
    </div>
    <div class="block">
      <h3>Canvas animate</h3>
      <div class="components">
        <CanvasAnimate1 />
      </div>
    </div>
    <div class="block">
      <h3>Scroll animate</h3>
      <div class="components">
        <ScrollAnimate1 />
      </div>
    </div>
    <div class="block">
      <h3>WebGL animate</h3>
      <div class="components">
        <WebGLAnimate1 />
      </div>
    </div>
  </section>
</template>

<script>
import GsapAnimate1 from "@/components/gsapAnimate/GsapAnimate1";
import CanvasAnimate1 from "@/components/canvasAnimate/CanvasAnimate1";
import ScrollAnimate1 from "@/components/scrollAnimate/ScrollAnimate1";
import WebGLAnimate1 from "@/components/webGLAnimate/WebGLAnimate1"

export default {
  components: {
    GsapAnimate1,
    CanvasAnimate1,
    ScrollAnimate1,
    WebGLAnimate1
  },
};
</script>

<style lang="scss" scoped>
.components {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 45%;
  }
}
</style>