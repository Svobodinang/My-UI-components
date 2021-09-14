<template>
  <Title title="Buttons" />
  <section>
    <div class="block">
      <h3>Small action buttons</h3>
      <div class="content">
        <ActionSmallButton1 />
      </div>
    </div>
  </section>
</template>

<script>
import Title from "@/components/sections/Title";
import ActionSmallButton1 from "@/components/buttons/ActionSmallButtons/ActionSmallButton1";

export default {
  components: {
    Title,
    ActionSmallButton1,
  },
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