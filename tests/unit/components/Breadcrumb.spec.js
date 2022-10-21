import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import Breadcrumb from '@/components/Breadcrumb/index.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)
localVue.use(ElementUI)

const routes = [
  {
    path: '/',
    name: 'home',
    children: [{
      path: 'dashboard',
      name: 'dashboard'
    }]
  },
  {
    path: '/menu',
    name: 'menu',
    children: [{
      path: 'FPA_AAE',
      name: 'FPA_AAE',
      meta: { title: 'FPA_AAE' },
      children: [{
        path: 'FPA_AAE-1',
        name: 'FPA_AAE-1',
        meta: { title: 'FPA_AAE-1' }
      },
      {
        path: 'FPA_AAE-2',
        name: 'FPA_AAE-2',
        redirect: 'noredirect',
        meta: { title: 'FPA_AAE-2' },
        children: [{
          path: 'FPA_AAE-2-1',
          name: 'FPA_AAE-2-1',
          meta: { title: 'FPA_AAE-2-1' }
        },
        {
          path: 'FPA_AAE-2-2',
          name: 'FPA_AAE-2-2'
        }]
      }]
    }]
  }]

const router = new VueRouter({
  routes
})

describe('Breadcrumb.vue', () => {
  const wrapper = mount(Breadcrumb, {
    localVue,
    router
  })
  it('dashboard', () => {
    router.push('/dashboard')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(1)
  })
  it('normal route', () => {
    router.push('/menu/FPA_AAE')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(2)
  })
  it('result route', () => {
    router.push('/menu/FPA_AAE/FPA_AAE-2/FPA_AAE-2-1')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(4)
  })
  it('no meta.title', () => {
    router.push('/menu/FPA_AAE/FPA_AAE-2/FPA_AAE-2-2')
    const len = wrapper.findAll('.el-breadcrumb__inner').length
    expect(len).toBe(3)
  })
  // it('click link', () => {
  //   router.push('/menu/FPA_AAE/FPA_AAE-2/FPA_AAE-2-2')
  //   const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
  //   const second = breadcrumbArray.at(1)
  //   console.log(breadcrumbArray)
  //   const href = second.find('a').attributes().href
  //   expect(href).toBe('#/menu/FPA_AAE')
  // })
  // it('noRedirect', () => {
  //   router.push('/menu/FPA_AAE/FPA_AAE-2/FPA_AAE-2-1')
  //   const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
  //   const redirectBreadcrumb = breadcrumbArray.at(2)
  //   expect(redirectBreadcrumb.contains('a')).toBe(false)
  // })
  it('last breadcrumb', () => {
    router.push('/menu/FPA_AAE/FPA_AAE-2/FPA_AAE-2-1')
    const breadcrumbArray = wrapper.findAll('.el-breadcrumb__inner')
    const redirectBreadcrumb = breadcrumbArray.at(3)
    expect(redirectBreadcrumb.contains('a')).toBe(false)
  })
})
