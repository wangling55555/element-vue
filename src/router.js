import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/index',
    //   name: 'index',
    //   alias:"/",  //别名
    //   component: () => import( './views/Index.vue')
    // },
    {
      path:'/',
      redirect:"/mine"
    },
    {
      path: '/mine',
      name: 'mine',
      component: () => import( './components/Mine.vue')
    },
    {
      path: '/mine1',
      name: 'mine1',
      component: () => import( './components/Mine1.vue')
    },
    {
      path: '/mine2',
      name: 'mine2',
      component: () => import( './components/Mine2.vue')
    },
    {
      path: '/mine3',
      name: 'mine3',
      component: () => import( './components/Mine3.vue')
    },
    {
      path: '/formstudy',
      name: 'formstudy',
      component: () => import( './components/formstudy.vue')
    }
  ]
})
