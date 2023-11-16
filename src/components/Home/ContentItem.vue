<template>
  <v-col>
    <router-link :to="'/post/' + item?.id">
      <v-card class="card pa-4">
        <span class="text-caption ont-weight-thin">
          {{ item?.type }}
        </span>
        <h3 class="py-4">
          {{ item?.title }}
        </h3>
        <div class="pb-4">{{ item?.content }}</div>
        <div class="d-flex justify-end">
          <StatusBtn :status="item?.status" />
        </div>
      </v-card>
    </router-link>
  </v-col>
</template>

<script>
import StatusBtn from "@/components/Common/StatusBtn.vue";
export default {
  name: "ContentItem",
  components: {
    StatusBtn,
  },
  props: {
    item: { type: Object, default: () => {} },
  },
  data: () => ({}),
};
</script>
<style scoped>
.card {
  border-radius: 15px;
  min-width: 300px;
  height: 190px;
}
</style>
