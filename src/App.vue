<template>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
export default {
  name: "App",

  components: {
    Header,
  },

  data: () => ({}),
};
</script>

<style>
a {
  text-decoration: none;
  color: black;
}
</style>
