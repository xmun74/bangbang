<template>
  <ContentItem :items="rooms" />
</template>

<script>
import axios from "axios";
import ContentItem from "./ContentItem.vue";

export default {
  name: "ContentList",
  components: {
    ContentItem,
  },
  data: () => ({
    rooms: [],
  }),

  methods: {
    getRooms() {
      axios.get(`http://localhost:5000/posts`).then((res) => {
        this.rooms = res.data;
      });
    },
  },
  created() {
    this.getRooms();
  },
};
</script>
