<template>
  <main>
    <!-- 모달 -->
    <Modal
      @setState="setState"
      :isOpenModal="isOpenModal"
      :onDeleteBtnClick="onDeleteBtnClick"
    />

    <div class="d-flex justify-space-between">
      <div class="d-flex">
        <StatusBtn :status="post.status" />
        <h2 class="ml-2">{{ post.title }}</h2>
      </div>
      <div>
        <router-link :to="`/update/${$route.params.id}`">
          <v-btn class="mr-4" type="button">수정</v-btn>
        </router-link>
        <!-- 모달 토글버튼 -->
        <v-btn @click="isOpenModal = true">삭제</v-btn>
      </div>
    </div>
    <v-col>
      <h3>상세설명</h3>
      {{ post.content }}
    </v-col>
    <v-col>매물 유형 {{ post.type }}</v-col>
  </main>
</template>

<script>
import StatusBtn from "@/components/Common/StatusBtn";
import Modal from "@/components/Common/Modal";
import { deletePostById, getPostById } from "@/api/posts";

export default {
  name: "PostDetail",
  components: {
    StatusBtn,
    Modal,
  },
  data: () => ({
    post: {},
    isOpenModal: false, // 모달 상태 추후 전역상태로 변경해야 함
  }),

  methods: {
    /** 글 1개 조회, 글 삭제 API */
    getPostById,
    deletePostById,

    /** 모달 상태 변경 emit */
    setState() {
      this.isOpenModal = false;
    },
    /** 삭제 버튼 핸들러 */
    onDeleteBtnClick() {
      deletePostById(this.$route.params.id);
      this.$router.push("/");
    },
  },
  async created() {
    const res = await this.getPostById(this.$route.params.id);
    this.post = res;
  },
};
</script>
