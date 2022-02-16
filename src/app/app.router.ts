import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from './components/index.vue'
import About from './components/about.vue';

/**
 * 定义路由
 */
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/about-us',
    redirect: '/about'
  }
];

/**
 * 创建路由器
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;