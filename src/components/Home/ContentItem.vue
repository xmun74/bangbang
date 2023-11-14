<template>
  <v-row>
    <v-col
      v-for="(item, idx) in items"
      :key="idx + item.title"
      :style="{ minWidth: '300px' }"
    >
      <router-link :to="'/post/' + item.id">
        <v-card>
          <!-- 이미지 -->
          <v-img aspect-ritio="2"></v-img>
          <!-- 텍스트 -->
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            {{ item.content }}
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
