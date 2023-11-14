<template>
  <v-container>
    <v-row>
      <v-toolbar>
        <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <v-toolbar-title to="/"
          ><router-link to="/">방방</router-link></v-toolbar-title
        >
      </v-toolbar>
      <router-view />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Header",

  data: () => ({}),
};
</script>
