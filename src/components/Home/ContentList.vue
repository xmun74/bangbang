<template>
  <v-row>
    <ContentItem v-for="item in posts" :item="item" :key="item?.id" />
  </v-row>
</template>

<script>
import ContentItem from "./ContentItem.vue";
import { getPosts } from "@/api/posts";

export default {
  name: "ContentList",
  components: {
    ContentItem,
  },
  data: () => ({
    posts: [],
  }),

  methods: {
    /** 글 목록 조회 API */
    getPosts,
  },
  async created() {
    const res = await this.getPosts();
    this.posts = res;
  },
};
</script>
