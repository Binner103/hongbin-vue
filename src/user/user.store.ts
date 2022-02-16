import { Module } from 'vuex';
import { RootState } from '@/app/app.store';

export interface UserState {
  currentUser: string;
}

const store: Module<UserState, RootState> = {
  state: {
    currentUser: '',
  },

  mutations: {
    setCurrentUser(state, data) {
      state.currentUser = data;
    },
  },

  actions: {
    getCurrentUser(context) {
      const name = '宏彬';
      context.commit('setCurrentUser', name);
    },
  },
};

export default store;
