import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/pages/Home";
import RoomDetail from "@/pages/RoomDetail";
import CreatePost from "@/pages/CreatePost";
import ErrorPage from "@/pages/ErrorPage";

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
  {
    path: "*",
    component: ErrorPage,
  },
];

const router = new VueRouter({
  mode: "history", // # 제거
  routes,
});

export default router;
