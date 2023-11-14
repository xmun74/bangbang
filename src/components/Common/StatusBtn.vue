<template>
  <v-btn>{{ status }}</v-btn>
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
