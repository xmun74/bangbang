<template>
  <v-container>
    <header class="mb-10">
      <router-link to="/" class="header-title">방방</router-link>
    </header>
    <router-view />
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>

<style scoped>
.header-title {
  font-weight: 600;
  font-size: 36px;
}
</style>
