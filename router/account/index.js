// import isAuth from '../guard/isAuthenticated';

export default [
  {
    path: '/',
    redirect: { name: 'login' },
  },
  {
    path: '/admin',
    component: () => import('src/layouts/AuthLayout.vue'),
    children: [
      {
        path: 'Authpage',
        component: () => import('src/pages/Auth/Login.vue'),
        name: 'login',
      },

      {
        path: 'SignUpAuth',
        component: () => import('src/pages/Auth/Register.vue'),
        name: 'signup',
      },
      // {
      //   path: 'auth/:tsype',
      //   component: () => import('pages/main/Auth/Index.vue'),
      //   name: 'auth',
      //   params: true,
      // },
    ],
  },
];
