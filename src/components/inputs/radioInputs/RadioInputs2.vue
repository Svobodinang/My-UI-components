<template>
  <div>
    <div
      class="radio-group"
      v-for="field in fields"
      :key="`radioInputs2-${field.id}`"
    >
      <input
        type="radio"
        :id="'radioInputs2' + field.id"
        :value="field.value"
        name="radioInputs2"
        @input.prevent="updateValue"
      />
      <label :for="'radioInputs2' + field.id">{{ field.value }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rdioInput2Value: String,
    fields: {
      type: Array,
      default() {
        return [{ id: 0, value: "0" }];
      },
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("update:rdioInput2Value", event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>

$color: $c-dark;
$colorRound: $c-accent-two;

$f-size: 1.3rem;

$roundWidth: $f-size;
$roundBorder: 2px solid $color;
$roundBorderRadius: 50%;

$roundHeight: $roundWidth;

$roundActiveWidth: $roundWidth * 1.5;
$roundActiveHeight: $roundActiveWidth;

$margin-bottom: $roundWidth;
$roundFromLabelMargin: $roundWidth * 2;

.radio-group {
  margin-bottom: $margin-bottom;
  margin-left: $roundFromLabelMargin;
  input[type="radio"] {
    display: none;
  }

  label {
    position: relative;
    cursor: pointer;
    font-size: $f-size;
  }

  label::before,
  label::after {
    position: absolute;
    top: -($f-size - $roundWidth + 0.1rem);
    left: -$roundFromLabelMargin;
    text-align: center;
    border-radius: $roundBorderRadius;
    content: "";
  }

  label::before {
    width: $roundWidth;
    height: $roundHeight;
    border: $roundBorder;
  }

  label::after {
    width: $roundActiveWidth;
    height: $roundActiveHeight;
    left: -($roundFromLabelMargin + $roundActiveWidth/4 - $roundWidth/4);
    top: -($f-size - $roundWidth + 0.1rem + $roundActiveWidth/4 - $roundWidth/4);
    background-color: $colorRound;
    transition-duration: 0.15s;
    transition-property: transform;
    transform: scale(0);
  }

  input[type="radio"]:checked ~ label::after {
    transform: scale(1);
  }
}
</style>