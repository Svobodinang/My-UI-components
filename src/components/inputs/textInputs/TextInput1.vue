<template>
  <div class="input-group">
    <input type="text" required @input="updateValue" />
    <div class="label-box">
      <label>{{ placeholder }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    TextInput1Value: String,
    placeholder: {
      type: String,
      default: 'placeholder'
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("update:TextInput1Value", event.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../../styles/main.scss";

$color: $c-dark;
$color-accent: $c-accent-two;

$f-size: 18px;
$transition-duration: 0.2s;
$transition-timing-function: ease;
$input-border-height: 1px;
$input-padding: $f-size / 5;

$active-line-height: $f-size / 9;
$inputWidth: $f-size * 15;


.input-group {
  width: $inputWidth;
  margin-top: $f-size;
  .label-box {
    position: relative;
    width: 100%;

    label {
      position: absolute;
      top: -($f-size * 2);
      color: $color-accent;
      font-size: $f-size;
      transition: all $transition-duration $transition-timing-function;
      pointer-events: none;
    }

    &::before,
    &::after {
      position: absolute;
      bottom: $input-border-height;
      width: 0;
      height: $active-line-height;
      background-color: $color-accent;
      content: "";
      transition-duration: $transition-duration;
      transition-property: width;
    }

    &::before {
      left: 50%;
    }

    &::after {
      right: 50%;
    }
  }

  input {
    outline: unset !important;
    box-sizing: border-box;
    padding: $input-padding;
    width: $inputWidth;
    border: none;
    border-bottom: $input-border-height solid $color-accent;
    font-size: $f-size;
  }

  input:focus ~ .label-box::before,
  input:focus ~ .label-box::after {
    width: 50%;
  }

  input:focus ~ .label-box label,
  input:valid ~ .label-box label {
    font-size: $f-size - $f-size / 4;
    transform: translateY(-($f-size));
  }
}
</style>