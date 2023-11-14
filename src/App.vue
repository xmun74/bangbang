<template>
  <v-app>
    <Header />
  </v-app>
</template>

<script>
import Header from "@/components/Common/Header";
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
  color: rgb(19, 9, 9);
}
</style>
