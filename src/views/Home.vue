<template>
  <main>
    <div class="d-flex justify-space-between my-5">
      <h2>방 목록</h2>
      <div class="d-flex align-center">
        <!-- Dropdown - 추후 상태를 배열로 관리해야 함 -->
        <Dropdown label="방종류" class="mr-1">
          <div slot="dropdown-content">
            <h2>방 종류</h2>
            <div>중복 선택이 가능합니다.</div>
            <ul>
              <li v-for="item in post_types" :key="item" class="type-btn">
                {{ item }}
              </li>
            </ul>
          </div>
        </Dropdown>
        <!-- <Dropdown label="진행상태" class="mr-1" /> -->
        <!-- <Dropdown label="지역" class="mr-1" /> -->
      </div>
    </div>
    <ContentList />
  </main>
</template>

<script>
import ContentList from "../components/Home/ContentList.vue";
import Dropdown from "@/components/Common/DropDown.vue";
import POST_TYPES from "@/constants/post";

export default {
  name: "Home",
  components: {
    ContentList,
    Dropdown,
  },

  data: () => ({
    post_types: POST_TYPES,
  }),
};
</script>

<style scoped>
.dropdown-trigger-btn {
  width: 80px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgb(179, 178, 178);
  border-radius: 5px;
  padding: 6px 10px 6px 10px;
  font-size: 13px;
}
.type-btn {
  border: 1px solid gray;
  border-radius: 5px;
  width: fit-content;
  min-width: 80px;
  height: 25px;
}
</style>
