import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Articles from './views/Articles.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Seances from './views/Seances.vue'
import Movies from './views/Movies.vue'
import addArticle from './views/addArticle.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
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
      component: addArticle
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
  ]
})