<template>
  <div>
    <button class="dropdown-trigger-btn" @click="onToggleDropdown">
      {{ label }}
      <div class="dropdown-content" v-if="$store?.state.isOpenDropdown == true">
        <slot name="dropdown-content"></slot>
      </div>
    </button>
  </div>
</template>

<script>
export default {
  name: "Dropdown",

  data: () => ({}),
  props: {
    label: { type: String, default: "" },
  },
  methods: {
    onToggleDropdown() {
      this.$store.commit("toggleDropdown");
    },
  },
};
</script>

<style scoped>
.dropdown-trigger-btn {
  position: relative;
  width: 80px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(179, 178, 178);
  border-radius: 5px;
  padding: 6px 10px 6px 10px;
  font-size: 12px;
}
.dropdown-content {
  z-index: 2;
  position: absolute;
  top: 40px;
  right: 0;
  display: flex;
  justify-content: flex-start;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgb(179, 178, 178);
  width: 100%;
  min-height: 200px;
  min-width: 320px;
  padding: 15px 25px;
}
</style>
