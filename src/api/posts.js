import axios from "axios";

const BASE_URL = `http://localhost:5000`;

export const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

export const getPostById = async (id) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data;
};

export const createPost = async (post) => {
  const res = await axios.post(`http://localhost:5000/posts`, {
    id: String(new Date()),
    title: post.title,
    content: post.content,
    type: post.radios,
    img: "",
    link: "",
    status: "진행중",
  });
  return res.data;
};

export const updatePostById = async (id, post, radios) => {
  const res = await axios.put(`http://localhost:5000/posts/${id}`, {
    id: post.id,
    title: post.title,
    content: post.content,
    type: radios,
    img: post.img,
    link: post.link,
    status: post.type,
  });
  return res.data;
};

export const deletePostById = async (id) => {
  const res = await axios.delete(`http://localhost:5000/posts/${id}`);
  return res.data;
};
