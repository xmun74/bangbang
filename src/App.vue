<template>
  <v-app>
    <Header></Header>
  </v-app>
</template>

<script>
import Header from "@/components/Common/Header";
import "@/styles/reset.css";

export default {
  name: "App",
  components: {
    Header,
  },

  data: () => ({}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Noto+Sans+KR:wght@100;200;300;400;500;600;800;900&display=swap");

html,
body,
#app {
  font-family: "Noto Sans KR", sans-serif;
}

.v-application a {
  text-decoration: none;
  color: inherit;
}
</style>
