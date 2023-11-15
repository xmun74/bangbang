<template>
  <ContentItem :items="posts" />
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
