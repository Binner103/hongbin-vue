import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/posts',
    component: PostIndex,
  },
];

export default routes;