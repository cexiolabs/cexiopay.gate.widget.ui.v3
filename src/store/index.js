import Vue from "vue";
import Vuex from "vuex";
import widget from "@/store/widget";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    widget,
  },
});
