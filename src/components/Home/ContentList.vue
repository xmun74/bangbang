<template>
  <div class="d-flex flex-column" width="100%">
    <ContentItem :items="rooms" />
  </div>
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
      axios.get(`http://localhost:5000/rooms`).then((res) => {
        // console.log(res.data);
        this.rooms = res.data;
      });
    },
  },
  created() {
    this.getRooms();
  },
};
</script>
