import accountRoutes from './account';
import dashboardRoutes from './dashboard';

const routes = [

  ...accountRoutes,
  ...dashboardRoutes,

  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/Error404.vue'),
  },

];
export default routes;
