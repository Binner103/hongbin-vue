import { createApp } from 'vue';
import App from './app/app.vue';
import appStore from './app/app.store';
import appRouter from './app/app.router';

/**
 * 创建应用
 */
const app = createApp(App);

/**
 * 使用路由
 */
app.use(appRouter);

/**
 * 应用store
 */
app.use(appStore);

/**
 * 挂载应用
 */
app.mount('#app');
