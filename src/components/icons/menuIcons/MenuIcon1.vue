<template>
  <div class="menu-icon-1">
    <div
      class="menu-icon"
      :class="{ 'menu-icon-open': activeMenu }"
      @click="clickIcon"
    >
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    activeMenu: false,
  }),
  methods: {
    clickIcon() {
      this.activeMenu = !this.activeMenu;
    },
  },
};
</script>

<style lang="scss" scoped>

$colorLine: $c-accent-one;

$iconWidth: 85px;
$transitionDuration: 0.5s;
$transitionTimingFunction: ease-in-out;

$lineHeight: $iconWidth / 7;

.menu-icon-1 {
  width: $iconWidth;
  .menu-icon {
    cursor: pointer;
    padding: $iconWidth/3 0;
    span {
      display: block;
      width: 100%;
      height: $lineHeight;
      background-color: $colorLine;
      transition-timing-function: $transitionTimingFunction;
      transition-duration: $transitionDuration;

      &::before,
      &::after {
        display: block;
        width: 100%;
        height: $lineHeight;
        background-color: $colorLine;
        content: "";
        transition-timing-function: $transitionTimingFunction;
        transition-duration: $transitionDuration;
      }

      &::before {
        transform: translate(0, -($lineHeight * 2));
      }

      &::after {
        transform: translate(0, $lineHeight);
      }
    }
  }

  .menu-icon-open {
    span {
      transform: rotate(180deg);

      &::before,
      &::after {
        width: 60%;
      }

      &::before {
        transform: translate($iconWidth / 2 + $lineHeight / 7, -($lineHeight + $lineHeight / 7)) rotate(45deg);
      }

      &::after {
        transform: translate($iconWidth / 2 + $lineHeight / 7, $lineHeight / 7) rotate(-45deg);
      }
    }
  }
}
</style>