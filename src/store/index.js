import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isMenuOpen: false,
  },
  mutations: {
    OPEN_MENU(state) {
      state.isMenuOpen = true;
    },
    CLOSE_MENU(state) {
      state.isMenuOpen = false;
    },
  },
  actions: {},
  modules: {},
});
