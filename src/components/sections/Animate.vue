<template>
  <Title title="GSAP" />
  <section>
    <div class="block">
      <h3>animate</h3>
      <div class="components">
        <GsapAnimate1 />
      </div>
    </div>
    <div class="block">
      <h3>canvas animate</h3>
      <div class="components">
        <CanvasAnimate1 />
      </div>
    </div>
  </section>
</template>

<script>
import GsapAnimate1 from "@/components/gsapAnimate/GsapAnimate1";
import CanvasAnimate1 from "@/components/canvasAnimate/CanvasAnimate1";

export default {
  components: {
    GsapAnimate1,
    CanvasAnimate1,
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