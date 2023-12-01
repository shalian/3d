import { createRouter, createWebHashHistory } from 'vue-router';
// 
import Home from '@/views/home.vue'
const OceanComponent = () => import('@/containers/Ocean/index.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  // 添加其他路由
  {
    path: '/ocean',
    name: 'Ocean',
    component: OceanComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
