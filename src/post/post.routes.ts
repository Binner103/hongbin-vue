import { RouteRecordRaw } from 'vue-router';
import PostIndex from './index/post-index.vue';
import PostShow from './show/post-show.vue';
import PostMeta from './show/components/post-meta.vue'

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
    component: PostShow,
    children: [
      {
        path: 'meta',
        component: PostMeta
      }
    ]
  },
];

export default routes;
