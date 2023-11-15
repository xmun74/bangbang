<template>
  <div class="modal" v-if="isOpenModal == true">
    <div class="backdrop" @click="setIsOpenModal"></div>
    <div class="modal-content">
      <!-- 추후 변경 사항 - Content는 props로 전달받기 -->
      <h4>해당 글을 삭제하시겠습니까?</h4>
      <div>
        <v-btn @click="onDeleteBtnClick">삭제</v-btn>
        <v-btn @click="setIsOpenModal">취소</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpenModal: { type: Boolean, default: false },
    onDeleteBtnClick: { type: Function },
  },
  methods: {
    /** 모달 상태 emit */
    setIsOpenModal() {
      this.$emit("setState");
    },
  },
};
</script>

<style>
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
.backdrop {
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
  min-height: 100px;
  background: white;
  @media (min-width: 768px) {
    width: auto;
    height: auto;
    border-radius: 15px;
  }
}
</style>
