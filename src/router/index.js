import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes result mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/result',
    component: Layout,
    redirect: '/result/FPA_AAE',
    name: 'Result',
    meta: {
      title: 'Result',
      icon: 'nested'
    },
    children: [
      {
        path: 'FPA_AAE',
        component: () => import('@/views/result/FPA_AAE/index'), // Parent router-view
        name: 'FPA_AAE',
        meta: { title: 'FPA_AAE' },
        children: [
          {
            path: 'FPA_AAE-train',
            component: () => import('@/views/result/FPA_AAE/train'),
            name: 'FPA_AAE-train',
            meta: { title: 'train' }
          },
          {
            path: 'FPA_AAE-test',
            component: () => import('@/views/result/FPA_AAE/test'),
            name: 'FPA_AAE-test',
            meta: { title: 'test' }
          },
          {
            path: 'FPA_AAE-train_test',
            component: () => import('@/views/result/FPA_AAE/train_test'),
            name: 'FPA_AAE-train_test',
            meta: { title: 'train_test' }
          }
        ]
      },
      {
        path: 'FPA_MSE',
        component: () => import('@/views/result/FPA_MSE/index'), // Parent router-view
        name: 'FPA_MSE',
        meta: { title: 'FPA_MSE' },
        children: [
          {
            path: 'FPA_MSE-train',
            component: () => import('@/views/result/FPA_MSE/train'),
            name: 'FPA_MSE-train',
            meta: { title: 'train' }
          },
          {
            path: 'FPA_MSE-test',
            component: () => import('@/views/result/FPA_MSE/test'),
            name: 'FPA_MSE-test',
            meta: { title: 'test' }
          },
          {
            path: 'FPA_MSE-train_test',
            component: () => import('@/views/result/FPA_MSE/train_test'),
            name: 'FPA_MSE-train_test',
            meta: { title: 'train_test' }
          }
        ]
      },
      {
        path: 'FPA_nonz',
        component: () => import('@/views/result/FPA_nonz/index'), // Parent router-view
        name: 'FPA_nonz',
        meta: { title: 'FPA_nonz' },
        children: [
          {
            path: 'FPA_nonz-train',
            component: () => import('@/views/result/FPA_nonz/train'),
            name: 'FPA_nonz-train',
            meta: { title: 'train' }
          },
          {
            path: 'FPA_nonz-test',
            component: () => import('@/views/result/FPA_nonz/test'),
            name: 'FPA_nonz-test',
            meta: { title: 'test' }
          },
          {
            path: 'FPA_nonz-train_test',
            component: () => import('@/views/result/FPA_nonz/train_test'),
            name: 'FPA_nonz-train_test',
            meta: { title: 'train_test' }
          }
        ]
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
