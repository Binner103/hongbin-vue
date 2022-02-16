import { createStore } from 'vuex';

/**
 * 创建store
 */
const store = createStore({
  state: {
    name: '',
    loading: false,
  },

  getters: {
    name(state) {
      return `🎈${state.name}`;
    },
  },

  mutations: {
    setName(state, data) {
      state.name = data;
    },

    setLoading(state, data) {
      state.loading = data;
    },
  },

  actions: {
    getName({commit}) {
      commit('setLoading', true);

      setTimeout(() => {
        const name = '璇彬网'
        commit('setName', name)
        commit('setLoading', false)
      }, 2000)
    },
  },
});

export default store;
