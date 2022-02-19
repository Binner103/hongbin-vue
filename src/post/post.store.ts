import { RootState } from '@/app/app.store';
import { Module } from 'vuex';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from './create/post-create.store';

export interface PostStoreState {
  create: PostCreateStoreState;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
  },
};
