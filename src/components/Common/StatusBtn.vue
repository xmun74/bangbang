<template>
  <div :class="[status === '진행중' ? 'bg-green' : 'bg-red', 'btn']">
    {{ status }}
  </div>
</template>

<script>
export default {
  name: "StatusBtn",

  data: () => ({}),
  props: {
    status: { type: String, default: "" },
  },
};
</script>

<style scoped>
.btn {
  padding: 10px;
  color: white;
  border-radius: 15px;
  min-width: 70px;
  height: 36px;
  text-align: center;
  font-weight: 500;
  font-size: 12px;
}
.bg-green {
  background-color: rgb(65, 175, 65);
}
.bg-red {
  background-color: rgb(240, 137, 118);
}
</style>
