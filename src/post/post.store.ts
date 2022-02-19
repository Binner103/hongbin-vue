import { RootState } from '@/app/app.store';
import { Module } from 'vuex';
import {
  postCreateStoreModule,
  PostCreateStoreState,
} from './create/post-create.store';
import { postIndexStoreModule } from './index/post-index.store';

export interface PostStoreState {
  create: PostCreateStoreState;
}

export interface PostItem {
  id: number;
  title: string;
  content: string;
}

export const postStoreModule: Module<PostStoreState, RootState> = {
  namespaced: true,

  modules: {
    create: postCreateStoreModule,
    index: postIndexStoreModule
  },
};
