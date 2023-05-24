import Vue from 'vue'
import Router from 'vue-router'
import dashboard from '@/components/dashboard'
import editboard from '@/components/editboard'
import sheguer from '@/components/sheguer'
import view from '@/components/view'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: dashboard
    },
    {
      path: '/sheguer',
      name: 'sheguer',
      component: sheguer
    },
    {
      path: '/:Joueur_id',
      name: 'view',
      component: view
    },
    {
      path: '/editboard/:Joueur_id',
      name: 'editboard',
      component: editboard
    }
  ]
})
