import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/pages/Home";
import RoomDetail from "@/pages/RoomDetail";
import CreatePost from "@/pages/CreatePost";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/createPost",
    component: CreatePost,
  },
  {
    path: "/post/:id",
    component: RoomDetail,
  },
];

const router = new VueRouter({
  mode: "history", // # 제거
  routes,
});

export default router;
