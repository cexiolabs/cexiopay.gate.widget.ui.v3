export default {
  namespaced: true,
  state: {
    widgetColorsTheme: {
      ctaColor: "#1CB6C1",
      backgroundColor: "#FFFFFF",
      mainColor: "",
    },
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
};
