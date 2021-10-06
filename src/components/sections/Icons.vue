<template>
  <!-- <Title title="Icons" /> -->
  <section>
    <div class="block">
      <h3>Menu icons</h3>
      <div class="content">
        <MenuIcon1 />
      </div>
    </div>
  </section>
</template>

<script>
import MenuIcon1 from "@/components/icons/menuIcons/MenuIcon1";

export default {
  components: {
    MenuIcon1,
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