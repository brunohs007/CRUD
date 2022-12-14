import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress';

const routes = [
  {
    path: '/',
    name: 'principal',
    component: () => import('../components/criar-perfil/CriarPerfilComponents')
  },
  {
    path: '/listar-perfil',
    name: 'lista',
    component: () => import('../components/listar-perfil/ListarPerfilComponents')
  },
  {
    path: '/editar-perfil/:id',
    name: 'editar',
    component: () => import('../components/editar-perfil/EditarPerfilComponents')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeResolve((to, from, next) => {
  if (to.name){
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router
