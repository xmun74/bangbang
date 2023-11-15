import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/views/Home";
import PostDetail from "@/views/PostDetail";
import CreatePost from "@/views/CreatePost";
import UpdatePost from "@/views/UpdatePost";
import ErrorPage from "@/views/ErrorPage";

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
  mode: "history",
  routes,
});

export default router;
