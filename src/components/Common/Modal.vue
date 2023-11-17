<template>
  <div class="modal" v-if="$store?.state.isOpenModal == true">
    <div class="modal-backdrop" @click="onToggleModal"></div>
    <div class="modal-content">
      <slot name="modal-content"></slot>
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
