import { createStore } from "vuex";

/**
 * 创建store
 */
const store = createStore({
  state: {
    name: ''
  },

  getters: {
    name(state) {
      return `🎈${state.name}`
    }
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    }
  },

  actions: {
    getName(context) {
      const name = '璇彬网';
      context.commit('setName', name);
      console.log(context);
    }
  }
});

export default store;