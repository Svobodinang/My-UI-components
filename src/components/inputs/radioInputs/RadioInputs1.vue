<template>
  <div>
    <div class="radio-group" v-for="field in fields" :key="`radioInputs1-${field.id}`">
      <input
        type="radio"
        :id="'radioInputs1' + field.id"
        :value="field.value"
        name="radioInputs1"
        @input.prevent="updateValue"
      />
      <label :for="'radioInputs1' + field.id">{{ field.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rdioInput1Value: String,
    fields: {
      type: Array,
      default() {
        return [{ id: 0, value: "0" }];
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:rdioInput1Value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../styles/main.scss";

$bg-color: $c-light;
$color: $c-dark;
$checked-color: $c-light;
$checked-bg: $c-accent-two;

$f-size: 1.3rem;
$border-radius: 3px;
$box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
$checked-box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.4);

$transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);

$min-width: $f-size * 5;
$padding: 0 $f-size / 2;
$height: $f-size * 2.2;
$f-weight: bold;
$margin-bottom: $f-size;

.radio-group {
  margin-bottom: $margin-bottom;
  label {
    min-width: $min-width;
    padding: $padding;
    line-height: $height; // height
    border-radius: $border-radius;
    background-color: $bg-color;
    color: $color;
    font-weight: $f-weight;
    font-size: $f-size;
    cursor: pointer;
    box-shadow: $box-shadow;
    transition: $transition;
    text-align: center;
    display: inline-block;
    letter-spacing: 0.5px;
  }
  input {
    display: none;
  }

  input:checked ~ label {
    color: $checked-color;
    box-shadow: $checked-box-shadow;
    background-color: $checked-bg;
  }
}
</style>