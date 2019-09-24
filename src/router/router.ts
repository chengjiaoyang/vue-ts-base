/**
 * meta 可配置参数
 * @param {boolean} icon 页面icon
 * @param {boolean} keepAlive 是否缓存页面
 * @param {string} title 页面标题
 */
export default [
    {
      path: '/',
    },
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
            icon: '',
            keepAlive: true,
            title: 'index',
        },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/login.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: 'login',
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home/home.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: 'home',
      },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about/about.vue'),
      meta: {
        icon: '',
        keepAlive: true,
        title: 'about',
      },
    },
  ];
