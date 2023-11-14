<template>
  <v-container>
    <h2 class="my-5">글 수정</h2>
    <v-form @submit="updatePost">
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
        <v-radio-group v-model="post.type" mandatory>
          <v-radio label="진행중" value="진행중" />
          <v-radio label="마감" value="마감" />
        </v-radio-group>
      </v-col>
      <v-col>
        <label> 매물 유형 : {{ radios || "null" }}</label>
        <v-radio-group v-model="radios" mandatory>
          <v-radio label="빌라/다세대" value="빌라/다세대" />
          <v-radio label="단독 주택" value="단독주택" />
          <v-radio label="원룸" value="원룸" />
          <v-radio label="아파트" value="아파트" />
        </v-radio-group>
      </v-col>

      <div class="d-flex justify-end">
        <v-btn color="primary" type="submit">수정</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdatePost",
  components: {},
  data: () => ({
    post: {},
    radios: null,
  }),

  methods: {
    getPost() {
      axios
        .get(`http://localhost:5000/posts/${this.$route.params.id}`)
        .then((res) => {
          this.post = res.data;
          this.radios = res.data.type;
        });
    },
    updatePost() {
      axios.put(`http://localhost:5000/posts/${this.$route.params.id}`, {
        id: this.post.id,
        title: this.post.title,
        content: this.post.content,
        type: this.radios,
        img: this.post.img,
        link: this.post.link,
        status: this.post.type,
      });

      this.$router.push(`/post/${this.$route.params.id}`);
    },
  },

  created() {
    this.getPost();
  },
};
</script>
