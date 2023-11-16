<template>
  <div class="modal" v-if="this.$store?.state.isOpenModal == true">
    <div class="modal-backdrop" @click="onToggleModal"></div>
    <div class="modal-content">
      <!-- 추후 변경 사항 - Content는 props로 전달받기 -->
      <h4 class="flex-grow-1 d-flex align-center">
        해당 글을 삭제하시겠습니까?
      </h4>
      <div>
        <v-btn @click="onDeleteBtnClick" class="mr-2">삭제</v-btn>
        <v-btn @click="onToggleModal">취소</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    onDeleteBtnClick: { type: Function },
  },
  methods: {
    /** 모달 토글 핸들러 */
    onToggleModal() {
      this.$store.commit("toggleModal");
    },
  },
};
</script>

<style scoped>
.modal {
  z-index: 11;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.modal-backdrop {
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
}
.modal-content {
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  min-width: 700px;
  min-height: 200px;
  background: white;
  padding: 15px;
  @media (min-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 15px;
  }
}
</style>
