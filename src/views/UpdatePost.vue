<template>
  <main>
    <h2 class="my-5">글 수정</h2>
    <v-form @submit.prevent="onFormSubmit">
      <v-col
        >제목
        <v-text-field
          hide-details="auto"
          required
          :counter="50"
          v-model="post.title"
        />
      </v-col>
      <v-col>
        내용
        <v-text-field required :counter="100" v-model="post.content" />
      </v-col>
      <v-col>
        진행상태
        <v-radio-group v-model="post.status" mandatory>
          <v-radio label="진행중" value="진행중" />
          <v-radio label="마감" value="마감" />
        </v-radio-group>
      </v-col>
      <v-col>
        <label> 매물 유형 : {{ post.type || "null" }}</label>
        <v-radio-group v-model="post.type" mandatory>
          <v-radio
            v-for="item in post_types"
            :key="item"
            :label="item"
            :value="item"
          />
        </v-radio-group>
      </v-col>

      <div class="d-flex justify-end">
        <v-btn color="primary" type="submit">수정</v-btn>
      </div>
    </v-form>
  </main>
</template>

<script>
import { getPostById, updatePostById } from "@/api/posts";
import POST_TYPES from "@/constants/post";

export default {
  name: "UpdatePost",
  components: {},
  data: () => ({
    post: {},
    post_types: POST_TYPES,
  }),

  methods: {
    /** 글 1개 조회, 글 수정 API */
    getPostById,
    updatePostById,

    /** 폼 제출 핸들러 */
    async onFormSubmit() {
      const res = await updatePostById(this.$route.params.id, this.post);
      console.log("수정", res);
      this.$router.push(`/post/${this.$route.params.id}`);
    },
  },

  async created() {
    const res = await this.getPostById(this.$route.params.id);
    this.post = res;
  },
};
</script>
