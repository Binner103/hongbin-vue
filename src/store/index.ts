import { createStore } from 'vuex'

export default createStore({
  state: {
    loading: false,
    messages: [] as Array<string>
  },

  mutations: {
    setLoading(state, data) {
      state.loading = data;
    },

    setMessages(state, data) {
      state.messages = [...state.messages, ...data];
    }
  },

  actions: {
    getMessages({ commit }) {
      commit('setLoading', true);
      setTimeout(() => {
        commit('setLoading', false);
        commit('setMessages', ['您好!', 'hello~', 'hola !']);
      }, 1000);
    },
  },
  modules: {
  }
})
