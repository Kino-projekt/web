import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Users from './views/Users.vue'
import Register from './components/Register/Register.vue'
import Login from './components/Login/Login.vue'
import Seances from './views/Seances.vue'
import Movies from './views/Movies.vue'
import addArticle from './views/addArticle.vue'
import store from './store.js'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles
    },
    {
      path: '/users',
      name: 'users',
      component: Users
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/seances',
      name: 'seances',
      component: Seances
    },
    {
      path: '/movies',
      name: 'movies',
      component: Movies
    },
    {
      path: '/addArticle',
      name: 'addArticle',
      component: addArticle,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresAuth: false,
        requiresAdmin: false,
      }
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    console.log(to)
    if (to.matched.meta && store.state.user && to.matched.meta.requiresAdmin && store.state.user.role == "ADMIN") {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router