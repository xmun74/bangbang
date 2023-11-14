<template>
  <ul class="">
    <div v-for="(item, idx) in items" :key="idx + item.title">
      <router-link :to="'/post/' + item.id">
        <v-card width="200px">
          <!-- 이미지 -->
          <v-img aspect-ritio="2"></v-img>
          <!-- 텍스트 -->
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>
            {{ item.content }}
          </v-card-text>
          <!-- 상태버튼 -->
          <v-card-actions>
            <v-btn>마감</v-btn>
          </v-card-actions>
        </v-card>
      </router-link>
    </div>
  </ul>
</template>

<script>
export default {
  name: "ContentItem",
  props: {
    items: { type: Array, default: () => [] },
  },
  data: () => ({}),
};
</script>
