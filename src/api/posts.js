import axios from "axios";

const BASE_URL = `http://localhost:5000`;

/** 글 목록 조회 API */
export const getPosts = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};

/**
 * 글 1개 조회 API
 * @param {string} id 글 id
 * @returns
 */
export const getPostById = async (id) => {
  const res = await axios.get(`${BASE_URL}/posts/${id}`);
  return res.data;
};

/**
 * 글 생성 API
 * @param {object} post - title, content, type, img, link, status
 * @returns
 */
export const createPost = async (post) => {
  const { title, content, type, img, link, status } = post;

  const res = await axios.post(`${BASE_URL}/posts`, {
    id: Number(new Date()),
    title,
    content,
    type,
    img,
    link,
    status,
  });
  return res.data;
};

/**
 * 글 수정 API
 * @param {string} id - 글 id
 * @param {object} post - title, content, type, img, link, status
 * @returns
 */
export const updatePostById = async (id, post) => {
  const { title, content, type, img, link, status } = post;

  const res = await axios.put(`${BASE_URL}/posts/${id}`, {
    id,
    title,
    content,
    type,
    img,
    link,
    status,
  });
  return res.data;
};

/**
 * 글 삭제 API
 * @param {string} id - 글 id
 * @returns
 */
export const deletePostById = async (id) => {
  const res = await axios.delete(`${BASE_URL}/posts/${id}`);
  return res.data;
};
