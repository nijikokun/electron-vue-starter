import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: process.env.IS_ELECTRON ? 'hash' : 'history',
  routes: [
    {
      path: '/',
      name: 'main-page',
      component: require('./pages/Main.vue').default,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})

/*
router.beforeResolve((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Assign username to a vue prototype variable to pass
    // authentication check.
    if (Vue.prototype.$variable.username) {
      return next()
    }

    return next({
      path: '/login'
    });
  }

  next()
})
*/

export default router
