<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <div class="d-flex">
        <StatusBtn :status="post.status" />
        <h2 class="ml-2">{{ post.title }}</h2>
      </div>
      <v-btn>
        <router-link :to="`/update/${$route.params.id}`">수정하기</router-link>
      </v-btn>
    </div>
    <v-col>
      <label>내용</label>
      {{ post.content }}
    </v-col>
    <v-col>매물 유형 {{ post.type }}</v-col>
  </v-container>
</template>

<script>
import axios from "axios";
import StatusBtn from "@/components/Common/StatusBtn";

export default {
  name: "PostDetail",
  components: {
    StatusBtn,
  },
  data: () => ({
    post: {},
  }),

  methods: {
    getPost() {
      axios
        .get(`http://localhost:5000/posts/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data;
        });
    },
  },
  created() {
    this.getPost();
  },
};
</script>
