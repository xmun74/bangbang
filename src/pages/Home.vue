<template>
  <v-container>
    방 목록
    <v-btn @click="movetocreatepost">방 생성</v-btn>

    <div id="app">
      <v-btn @click="movetopost1">1페이지로</v-btn>
      <v-btn @click="movetopost2">2페이지로</v-btn>
      <router-view />
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Home",

  data: () => ({}),
  methods: {
    movetocreatepost() {
      window.location.href = "/createPost";
    },
    movetopost1() {
      window.location.href = "/post/1";
    },
    movetopost2() {
      window.location.href = "/post/2";
    },
  },
};
</script>
