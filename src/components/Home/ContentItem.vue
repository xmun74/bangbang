<template>
  <v-row>
    <v-col v-for="(item, idx) in items" :key="idx + item.title">
      <router-link :to="'/post/' + item.id">
        <v-card class="card">
          <!-- 텍스트 -->
          <v-card-title class="d-flex flex-col font-weight-bold">
            {{ item.title }}</v-card-title
          >
          <v-card-text>
            {{ item.content }} -
            <span class="text-caption ont-weight-thin">
              {{ item.type }}
            </span>
          </v-card-text>
          <!-- 상태버튼 -->
          <v-card-actions class="d-flex justify-end">
            <StatusBtn :status="item.status" />
          </v-card-actions>
        </v-card>
      </router-link>
    </v-col>
  </v-row>
</template>

<script>
import StatusBtn from "@/components/Common/StatusBtn.vue";
export default {
  name: "ContentItem",
  components: {
    StatusBtn,
  },
  props: {
    items: { type: Array, default: () => [] },
  },
  data: () => ({}),
};
</script>
<style scoped>
.card {
  border-radius: 15px;
  min-width: 300px;
}
</style>
