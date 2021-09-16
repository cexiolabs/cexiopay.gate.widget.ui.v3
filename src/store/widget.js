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
    isMenu: false,
    isMoreCoins: false,
  },
  mutations: {
    CHANGE_SCREEN(state, screen) {
      state.currentScreen = screen;
    },
    OPEN_MENU(state) {
      state.isMenu = true;
    },
    CLOSE_MENU(state) {
      state.isMenu = false;
    },
    OPEN_MORE_COINS(state) {
      state.isMoreCoins = true;
    },
    CLOSE_MORE_COINS(state) {
      state.isMoreCoins = false;
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
