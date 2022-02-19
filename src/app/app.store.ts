import { postStoreModule } from '@/post/post.store';
import { createStore } from 'vuex';

/**
 * 创建store
 */
const store = createStore({
  state: {
    appName: 'HONGBIN'
  },

  modules: {
    post: postStoreModule
  }
});

/**
 * 导出store
 */
export default store;
