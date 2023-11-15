<template>
  <v-container>
    <h2 class="my-5">방 상세설명</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-col
        >제목
        <v-text-field
          label="제목을 입력해주세요"
          hide-details="auto"
          required
          :counter="50"
          v-model="post.title"
        />
      </v-col>
      <v-col>
        내용
        <v-text-field
          label="내용을 입력해주세요."
          required
          :counter="100"
          v-model="post.content"
        />
      </v-col>
      <v-col>
        <label> 매물 유형 : {{ post.type || "null" }}</label>
        <v-radio-group v-model="post.type" mandatory>
          <v-radio label="빌라/다세대" value="빌라/다세대"></v-radio>
          <v-radio label="단독 주택" value="단독주택"></v-radio>
          <v-radio label="원룸" value="원룸"></v-radio>
          <v-radio label="아파트" value="아파트"></v-radio>
        </v-radio-group>
      </v-col>

      <div class="d-flex justify-end">
        <v-btn color="primary" type="submit">등록</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import { createPost } from "@/api/posts";

export default {
  name: "CreatePost",

  data: () => ({
    post: {
      title: "",
      content: "",
      type: null,
      img: "",
      link: "",
      status: "진행중",
    },
  }),

  methods: {
    createPost,

    /** 폼 제출 핸들러 */
    async onFormSubmit() {
      const res = await createPost(this.post);
      console.log("등록", res);
      this.$router.push("/");
    },
  },
};
</script>
