<template>
  <v-container>
    <h2 class="my-5">방 상세설명</h2>
    <v-form @submit.prevent="createPost">
      <v-col
        >제목
        <v-text-field
          label="제목을 입력해주세요"
          hide-details="auto"
          required
          :counter="50"
          v-model="title"
        />
      </v-col>
      <v-col>
        내용
        <v-text-field
          label="내용을 입력해주세요."
          required
          :counter="100"
          v-model="content"
        />
      </v-col>
      <v-col>
        <label> 매물 유형 : {{ radios || "null" }}</label>
        <v-radio-group v-model="radios" mandatory>
          <v-radio label="빌라/다세대" value="빌라/다세대"></v-radio>
          <v-radio label="단독 주택" value="단독주택"></v-radio>
          <v-radio label="원룸" value="원룸"></v-radio>
          <v-radio label="아파트" value="아파트"></v-radio>
        </v-radio-group>
      </v-col>
      위치, 날짜
      <v-col>제목: {{ title }} 내용: {{ content }} 유형: {{ radios }}</v-col>
      <div class="d-flex justify-end">
        <v-btn color="primary" type="submit">등록</v-btn>
      </div>
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "CreatePost",

  data: () => ({
    title: "",
    content: "",
    radios: null,
  }),

  methods: {
    createPost() {
      // e.preventDefault();
      axios.post(`http://localhost:5000/rooms`, {
        id: new Date(),
        title: this.title,
        content: this.content,
        type: this.radios,
        img: "",
        link: "",
      });
      console.log(this.title, this.content, this.radios);
      this.$router.push("/");
    },
  },
};
</script>
