import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isOpenModal: false,
    isOpenDropdown: false,
  },
  mutations: {
    toggleModal(state) {
      state.isOpenModal = !state.isOpenModal;
    },
    toggleDropdown(state) {
      state.isOpenDropdown = !state.isOpenDropdown;
    },
  },
  actions: {},
  getters: {},
});
