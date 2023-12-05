import { createRouter, createWebHashHistory } from 'vue-router';
// 
import Home from '@/views/home.vue'
const OceanComponent = () => import('@/containers/Ocean/index.vue');
const LunarComponent = () => import('@/containers/Lunar/index.vue');
const ChristmasComponent = () => import('@/containers/Christmas/index.vue');

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
  {
    path: '/lunar',
    name: 'Lunar',
    component: LunarComponent,
  },
  {
    path: '/christmas',
    name: 'Christmas',
    component: ChristmasComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
