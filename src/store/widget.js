export default {
  namespaced: true,
  state: {
    widgetColorsTheme: {
      ctaColor: "#1CB6C1",
      backgroundColor: "#FFFFFF",
      mainColor1: "#344563",
      mainColor2: "#758EB1",
      borderLineColor: "#E3E7EE",
      errorColor: "#E65069",
    },
    currentScreen: "c-screen-1",
  },
  mutations: {
    CHANGE_SCREEN(state, screen) {
      state.currentScreen = screen;
    },
  },
  getters: {
    widgetColorsTheme(state) {
      return state.widgetColorsTheme;
    },
  },
  actions: {},
  modules: {},
};
