import { postStoreModule, PostStoreState } from '@/post/post.store';
import { createStore } from 'vuex';

export interface RootState {
  appName: string;
  post: PostStoreState;
}

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: 'HONGBIN',
  } as RootState,

  modules: {
    post: postStoreModule,
  },
});

/**
 * 导出store
 */
export default store;
