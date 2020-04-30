import VueRouter from 'vue-router';

let routes = [
  {
    path: '/',
    component: () => import('./views/Home.vue')
  },
  {
    path: '/view/:model',
    component: () => import('./views/Index.vue')
  },
  {
    path: '/:model/create',
    component: () => import('./views/Create.vue')
  },
  {
    path: '/:model/:id',
    component: () => import('./views/Edit.vue')
  }
]

export default new VueRouter({
  routes // short for `routes: routes`
});
