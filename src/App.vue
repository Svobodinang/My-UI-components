<template>
  <!-- Главная страница -->
  <div class="main">
    <h1>UI components</h1>
    <p>by Hope Freedom</p>
    <div class="social">
      <a
        href="https://www.linkedin.com/in/%D0%BD%D0%B0%D0%B4%D0%B5%D0%B6%D0%B4%D0%B0-%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D0%BD%D0%B0-5a39211ba/"
        target="_blank"
        ><img
          class="icon"
          src="@/assets/icons/social/linkedin.svg"
          alt="linkedin"
      /></a>
      <a href="https://www.instagram.com/hope___freedom/" target="_blank"
        ><img class="icon" src="@/assets/icons/social/instagram.svg" alt="vk"
      /></a>
      <a href="https://telegram.me/HopeFreedom" target="_blank"
        ><img class="icon" src="@/assets/icons/social/telegram.svg" alt="vk"
      /></a>
      <a href="https://vk.com/hope_freedom" target="_blank"
        ><img class="icon" src="@/assets/icons/social/vk.svg" alt="vk"
      /></a>
    </div>
  </div>
  <Animate />
  <ButtonsSections />
  <InputsSections :fields="fields" :placeholder="placeholder" />
  <IconsSections />
</template>

<script>
import ButtonsSections from "@/components/sections/Buttons";
import InputsSections from "@/components/sections/Inputs";
import IconsSections from "@/components/sections/Icons";
import Animate from "@/components/sections/Animate";

export default {
  name: "App",
  data: () => ({
    fields: [
      {
        id: "one",
        value: "first",
      },
      {
        id: "two",
        value: "second",
      },
      {
        id: "three",
        value: "third",
      },
    ],
    placeholder: "Enter your text",
  }),
  components: {
    ButtonsSections,
    InputsSections,
    IconsSections,
    Animate,
  },
};
</script>

<style lang="scss">
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
.main {
  width: 100%;
  height: 100vh;

  background: linear-gradient(-45deg, $c-accent-one, $c-accent-two);
  background-size: 400% 400%;
  animation: bgAnimate 20s linear infinite;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 5rem;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
  }
  p {
    font-size: 1.5rem;
    color: white;
    margin-bottom: 1.5rem;
  }

  .social {
    display: flex;
    a:not(:last-child) {
      margin-right: 1rem;
    }

    .icon {
      max-height: 1.8rem;
    }
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
