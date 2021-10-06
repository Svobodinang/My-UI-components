<template>
  <!-- <Title title="Inputs" /> -->
  <section>
    <div class="block">
      <h3>Radio inputs</h3>
      <div class="content">
        <RadioInputs1
          :fields="fields"
          v-model:rdioInput1Value="rdioInput1Value"
        />
        <RadioInputs2
          :fields="fields"
          v-model:rdioInput2Value="rdioInput2Value"
        />
      </div>
    </div>
    <div class="block">
      <h3>Checkbox inputs</h3>
      <div class="content">
        <CheckboxInputs1
          :fields="fields"
          v-model:checkboxInputs1Value="checkboxInputs1Value"
        />
        <CheckboxInputs2
          :fields="fields"
          v-model:checkboxInputs2Value="checkboxInputs2Value"
        />
      </div>
    </div>
    <div class="block">
      <h3>Text inputs</h3>
      <div class="content">
        <TextInput1
          :placeholder="placeholder"
          v-model:TextInput1Value="TextInput1Value"
        />
      </div>
    </div>
  </section>
</template>

<script>
import RadioInputs1 from "@/components/inputs/radioInputs/RadioInputs1";
import RadioInputs2 from "@/components/inputs/radioInputs/RadioInputs2";

import CheckboxInputs1 from "@/components/inputs/checkboxInputs/CheckboxInputs1";
import CheckboxInputs2 from "@/components/inputs/checkboxInputs/CheckboxInputs2";

import TextInput1 from "@/components/inputs/textInputs/TextInput1";

export default {
  components: {
    RadioInputs1,
    RadioInputs2,
    CheckboxInputs1,
    CheckboxInputs2,
    TextInput1,
  },
  props: ["fields", "placeholder"],
  data: () => ({
    rdioInput1Value: "",
    rdioInput2Value: "",
    checkboxInputs1Value: [],
    checkboxInputs2Value: [],
    TextInput1Value: "",
  }),
};
</script>

<style lang="scss" scoped>
.content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 3rem;
  margin-bottom: 2rem;
}
</style> 