<template>
  <div>
    <div
      class="checkboxes-group"
      v-for="field in fields"
      :key="`checkboxInputs2-${field.id}`"
    >
      <input
        type="checkbox"
        :id="'checkboxInputs2' + field.id"
        :value="field.value"
        name="checkboxInputs2"
        @input.prevent="updateValue"
      />
      <label :for="'checkboxInputs2' + field.id">{{ field.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    checkboxInput2Value: String,
    fields: {
      type: Array,
      default() {
        return [{ id: 0, value: "0" }];
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:checkboxInput2Value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/main.scss";

$color: $c-dark;
$colorAccent: $c-accent-two;
$colorfrom: $c-light;

$f-size: 18px;
$lineHeight: 1px;
$line: 1px solid $color;
$borderRound: 2px solid $color;
$roundRadius: 50%;
$transitionDuration: 200ms;

$lineWidth: $f-size * 2;
$roundWidth: $f-size;
$roundHeight: $roundWidth;

$labelMaxWidth: $f-size * 5;

$margin-bottom: $f-size;
$marginFromLabel: $f-size;

.checkboxes-group {
  margin-bottom: $margin-bottom;

  input[type="checkbox"] {
    display: none;
  }

  label {
    position: relative;
    display: inline-block;
    max-width: $labelMaxWidth;
    word-wrap: break-word;
    cursor: pointer;
    font-size: $f-size;
    color: $color;
  }

  label::before,
  label::after {
    position: absolute;
    display: block;
    content: "";
  }

  label::before {
    top: ($roundHeight / 2) + $lineHeight;
    left: $labelMaxWidth + $roundHeight + $marginFromLabel;
    width: $lineWidth;
    height: $lineHeight;
    border-top: $line;
  }

  label::after {
    top: 0;
    left: $labelMaxWidth + $marginFromLabel;
    width: $roundWidth;
    height: $roundHeight;
    border: $borderRound;
    border-radius: $roundRadius;
    background-color: $colorfrom;
    transition-timing-function: ease-in;
    transition-duration: $transitionDuration;
  }

  input[type="checkbox"]:checked ~ label::after {
    border-color: $colorAccent;
    background-color: $colorAccent;
    transform: translateX($lineWidth + $roundHeight - 2px);
  }
}
</style>