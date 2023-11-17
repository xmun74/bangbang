<template>
  <header>
    <v-container class="">
      <div class="d-flex justify-space-between align-center">
        <router-link to="/" class="header-title orange--text text--accent-4">
          방방
        </router-link>

        <div class="d-flex">
          <router-link
            v-for="nav in navList"
            :key="nav.title"
            :to="nav.to"
            :class="[
              $route.path == nav.to ? 'orange--text text--accent-4' : '',
              'nav-title',
            ]"
          >
            {{ nav.title }}
          </router-link>
          <div>
            <v-divider vertical />
            <router-link to="/" class="ml-6">로그인</router-link>
          </div>
        </div>
      </div>
    </v-container>

    <v-divider />
    <v-container>
      <router-view />
    </v-container>
  </header>
</template>

<script>
export default {
  name: "Header",

  data: () => ({
    navList: [
      {
        title: "지도",
        to: "/map",
      },
      {
        title: "방내놓기",
        to: "/createPost",
      },
    ],
  }),
};
</script>

<style scoped>
.header-title {
  font-family: "Black Han Sans", sans-serif;
  font-size: 36px;
}
.nav-title {
  color: rgb(50, 50, 50);
  font-weight: 400;
  margin-right: 24px;
}
.nav-title:hover {
  color: orangered;
}
</style>
