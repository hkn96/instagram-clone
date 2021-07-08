import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/home/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/direct',
    name: 'Direct',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/direct'),
  },
  {
    path: '/explore',
    name: 'Explore',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/explore'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () =>
      import(/* webpackChunkName: "profile" */ '../views/profile'),
    children: [
      {
        path: '',
        name: 'ProfilPost',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/post.vue'),
      },
      {
        path: 'igtv',
        name: 'ProfilIGTV',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Igtv.vue'),
      },
      {
        path: 'save',
        name: 'ProfilSave',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Save.vue'),
      },
      {
        path: 'tag',
        name: 'ProfilTag',
        component: () =>
          import(/* webpackChunkName: "profile" */ '../views/profile/Tag.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
