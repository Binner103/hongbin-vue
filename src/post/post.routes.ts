import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';
import PostShow from './show/post-show.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    component: PostIndex,
  },
  {
    path: '/posts/:postId',
    component: PostShow
  },
];

export default routes;
