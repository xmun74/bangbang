<template>
  <div class="d-flex flex-column" width="100%">
    <ContentItem :items="rooms" />
  </div>
</template>

<script>
import ContentItem from "./ContentItem.vue";
export default {
  name: "ContentList",
  components: {
    ContentItem,
  },
  data: () => ({
    rooms: [
      { id: 1, title: "판교", content: "방2/화장실1", img: "", link: "" },
      { id: 2, title: "강남", content: "방1/지하1", img: "", link: "" },
      { id: 3, title: "판교3", content: "방3/화장실2", img: "", link: "" },
      { id: 4, title: "판교4", content: "방2/3층", img: "", link: "" },
      { id: 5, title: "판교5", content: "방1/화장실1", img: "", link: "" },
      { id: 6, title: "판교6", content: "원룸", img: "", link: "" },
      { id: 7, title: "판교7", content: "방2/화장실1/4층", img: "", link: "" },
    ],
  }),
};
</script>
