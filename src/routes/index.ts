import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/containers/Ocean/index.vue'

const routes = [
  {
    path: '/test',
    name: 'Home',
    component: Home,
  },
  // 添加其他路由
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
