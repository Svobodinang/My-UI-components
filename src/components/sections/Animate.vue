<template>
  <!-- <Title title="Animate" /> -->
  <section>
    <div class="block">
      <h3>css animate</h3>
      <div class="components">
        <CssAnimate1 />
      </div>
    </div>
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
        <CanvasAnimate2 />
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
import CanvasAnimate1 from "@/components/animate/canvasAnimate/CanvasAnimate1";
import CanvasAnimate2 from "@/components/animate/canvasAnimate/CanvasAnimate2";
import GsapAnimate1 from "@/components/animate/gsapAnimate/GsapAnimate1";
import CssAnimate1 from "@/components/animate/cssAnimate/CssAnimate1";
import ScrollAnimate1 from "@/components/animate/scrollAnimate/ScrollAnimate1";
import WebGLAnimate1 from "@/components/animate/webGLAnimate/WebGLAnimate1";

export default {
  components: {
    CssAnimate1,
    GsapAnimate1,
    CanvasAnimate1,
    CanvasAnimate2,
    ScrollAnimate1,
    WebGLAnimate1,
  },
};
</script>

<style lang="scss" scoped>
.components {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    min-width: 45%;
    box-sizing: border-box;
  }
}
</style>