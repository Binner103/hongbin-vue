import { RootState } from "@/app/app.store";
import { Module } from "vuex";

export interface PostCreateStoreState {
  namespace: boolean;
  loading: boolean;
}

export const postCreateStoreModule: Module<PostCreateStoreState, RootState> = {
  namespaced: true,

  state: {
    loading: false,
  } as PostCreateStoreState,

  getters: {
    loading(state) {
      return state.loading;
    },
  },
};
