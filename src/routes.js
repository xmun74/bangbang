import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/pages/Home";
import PostDetail from "@/pages/PostDetail";
import CreatePost from "@/pages/CreatePost";
import UpdatePost from "@/pages/UpdatePost";
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
    component: PostDetail,
  },
  {
    path: "/update/:id",
    component: UpdatePost,
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
