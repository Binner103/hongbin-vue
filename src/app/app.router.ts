import { createRouter, createWebHistory } from 'vue-router';
import appRoutes from './app.routes';
import postRoutes from '@/post/post.routes';

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes: [...appRoutes, ...postRoutes],
});

/**
 * 默认导出路由
 */
export default router;
