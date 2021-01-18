<template>
  <div class="main">
    <h1>My UI components</h1>
  </div>
  <ButtonsSections />
  <InputsSections :fields="fields" />
</template>

<script>
import ButtonsSections from "@/components/sections/Buttons";
import InputsSections from "@/components/sections/Inputs";

export default {
  name: "App",
  data: () => ({
    fields: [
      {
        id: "one",
        value: "Первый",
      },
      {
        id: "two",
        value: "Второй",
      },
      {
        id: "three",
        value: "Третий",
      },
    ],
  }),
  components: {
    ButtonsSections,
    InputsSections,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";

section {
  overflow: hidden;

  .title {
    width: 100%;
    height: 100vh;
    .img {
      width: 100%;
      height: 100%;
      background-position: -10% -10%;
      background-size: 12%;
    }
  }

  .block {
    padding: 3rem;
    min-height: 50vh;
    h3 {
      font-size: 3.5rem;
      font-weight: bold;
      text-align: center;
      margin-bottom: 3rem;
    }
  }
  &:nth-child(even) {
    .block h3 {
      color: $c-accent-two;
    }
  }
  &:nth-child(odd) {
    .block h3 {
      color: $c-accent-one;
    }
  }
}
</style>

<style lang="scss" scoped>
@import "./styles/main.scss";

.main {
  width: 100%;
  height: 100vh;

  background: linear-gradient(-45deg, $c-accent-one, $c-accent-two);
  background-size: 400% 400%;
  animation: bgAnimate 20s linear infinite;

  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 5rem;
    color: white;
    text-align: center;
  }
}

@keyframes bgAnimate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 60%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
