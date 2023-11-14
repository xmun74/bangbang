<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <h2>방 목록</h2>
      <router-link to="/createPost">
        <v-btn>방 내놓기</v-btn>
      </router-link>
    </div>

    <ContentList />
    <!-- <router-view /> -->
  </v-container>
</template>

<script>
import ContentList from "../components/Home/ContentList.vue";

export default {
  name: "Home",
  components: {
    ContentList,
  },

  data: () => ({}),
  methods: {},
};
</script>
