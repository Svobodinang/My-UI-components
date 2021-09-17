<template>
  <button
    class="btn"
    :class="{ 'btn-active': btnActive }"
    @click="btnActive = !btnActive"
    type="button"
  >
    <svg
      width="342"
      height="342"
      viewBox="0 0 342 342"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M192 149.4V0H149.4V149.4H0V192H149.4V341.4H192V192H341.4V149.4H192Z"
        fill="black"
      />
    </svg>
  </button>
</template>

<script>
export default {
  data: () => ({
    btnActive: false,
  }),
};
</script>

<style lang="scss" scoped>

$c-light: $c-light;
$c-accent: $c-accent-one;
$c-dark: $c-dark;

$width: 80px;
$height: $width;

$box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);

$transition: all 0.2s;

.btn {
  background: $c-light;
  width: $width;
  height: $height;
  box-shadow: $box-shadow;
  color: $c-dark;

  border-radius: 50%;
  outline: 0;
  border: 0;
  display: inline-block;
  cursor: pointer;

  transition: $transition;

  &.btn-active {
    background: $c-accent;
    transform: rotate(45deg);
    svg path {
      fill: $c-light;
    }
  }

  svg {
    width: 40%;
    height: 40%;
    path {
      transition: all 0.2s;
    }
  }
}
</style>