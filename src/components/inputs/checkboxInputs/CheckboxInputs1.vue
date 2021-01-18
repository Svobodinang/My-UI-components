<template>
  <div>
    <div
      class="checkboxes-group"
      v-for="field in fields"
      :key="`checkboxInputs1-${field.id}`"
    >
      <input
        type="checkbox"
        :id="'checkboxInputs1' + field.id"
        :value="field.value"
        name="checkboxInputs1"
        @input.prevent="updateValue"
      />
      <label :for="'checkboxInputs1' + field.id">{{
        field.value
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkboxInput1Value: String,
    fields: {
      type: Array,
      default() {
        return [{ id: 0, value: "0" }];
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:checkboxInput1Value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/main.scss";

$color: $c-dark;
$colorArrow: $c-accent-one;

$f-size: 1.3rem;
$squareBorder: 2px solid $color;

$squarewidth: $f-size;
$squareheight: $squarewidth;

$arrowWidth: $squarewidth * 1.2;
$arrowHight: $squarewidth * 0.7;

$margin-bottom: $f-size;
$squareFromLabelMargin: $f-size * 2;

.checkboxes-group {
  margin-bottom: $margin-bottom;
  margin-left: $squareFromLabelMargin;

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;
    cursor: pointer;
    font-size: $f-size;
  }

  label::before {
    position: absolute;
    top: -($f-size - $squarewidth + 0.1rem);
    left: -$squareFromLabelMargin;
    z-index: 1;
    width: $squarewidth;
    height: $squareheight;
    border: $squareBorder;
    content: "";

    transition-timing-function: ease-in-out;
    transition-duration: 0.2s;
  }

  input[type="checkbox"]:checked ~ label::before {
    width: $arrowWidth;
    height: $arrowHight;
    border-color: $colorArrow;
    border-top-style: none;
    border-right-style: none;
    transform: rotate(-45deg);
  }
}
</style>