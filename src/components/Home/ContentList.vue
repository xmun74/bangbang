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
    getPosts,
  },
  async created() {
    const res = await this.getPosts();
    this.posts = res;
  },
};
</script>
