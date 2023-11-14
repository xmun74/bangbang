<template>
  <v-container>
    <div class="d-flex justify-space-between">
      <div class="d-flex">
        <StatusBtn :status="post.status" />
        <h2 class="ml-2">{{ post.title }}</h2>
      </div>
      <div>
        <v-btn class="mr-4">
          <router-link :to="`/update/${$route.params.id}`">수정</router-link>
        </v-btn>
        <!-- 모달 토글버튼 -->
        <template>
          <v-btn v-bind="attrs" v-on="on">삭제</v-btn>
        </template>
      </div>
    </div>
    <v-col>
      <label>내용</label>
      {{ post.content }}
    </v-col>
    <v-col>매물 유형 {{ post.type }}</v-col>

    <!-- 삭제 모달 -->
    <v-dialog v-model="modal" max-width="300">
      <v-card>
        <v-card-title>해당 글을 삭제하시겠습니까?</v-card-title>
        <v-card-actions>
          <v-spacer />
          <v-btn color="green" text @click="deletePost">삭제</v-btn>
          <v-btn text @click="modal = false"> 취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
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
    modal: false,
  }),

  methods: {
    getPost() {
      axios
        .get(`http://localhost:5000/posts/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data;
        });
    },
    deletePost() {
      axios.delete(`http://localhost:5000/posts/${this.$route.params.id}`);
    },
  },
  created() {
    this.getPost();
  },
};
</script>
