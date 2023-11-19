<template>
  <main>
    <!-- 글 삭제 모달 -->
    <Modal :onDeleteBtnClick="onDeleteBtnClick">
      <h3 slot="modal-content" class="d-flex justify-start">글 삭제</h3>
      <h4 slot="modal-content" class="flex-grow-1 d-flex align-center">
        해당 글을 삭제하시겠습니까?
      </h4>
      <div slot="modal-content">
        <v-btn @click="onDeleteBtnClick" class="mr-2">삭제</v-btn>
        <v-btn @click="onToggleModal">취소</v-btn>
      </div>
    </Modal>

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
        <v-btn @click="onToggleModal">삭제</v-btn>
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
  }),

  methods: {
    /** 글 1개 조회, 글 삭제 API */
    getPostById,
    deletePostById,

    /** 삭제 버튼 핸들러 */
    onDeleteBtnClick() {
      deletePostById(this.$route.params.id);
      this.$router.push("/");
    },

    /** 모달 토글 핸들러 */
    onToggleModal() {
      this.$store.commit("toggleModal");
    },
  },
  async created() {
    const res = await getPostById(this.$route.params.id);
    this.post = res;
  },
};
</script>
